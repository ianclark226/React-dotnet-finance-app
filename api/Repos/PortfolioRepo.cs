using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repos
{
    public class PortfolioRepo : IPortfolioRepo
    {
        private readonly ApplicationDBContext _context;
        public PortfolioRepo(ApplicationDBContext context) {
            _context = context;
        }

        public async Task<Portfolio> CreateAsync(Portfolio portfolio)
        {
            await _context.Portfolios.AddAsync(portfolio);
            await _context.SaveChangesAsync();
            return portfolio;
        }

        public async Task<Portfolio> DeletePorfolio(AppUser appUser, string symbol)
        {
            var portfolioModel = await _context.Portfolios.FirstOrDefaultAsync(x => x.AppUserId == appUser.Id && x.stock.Symbol.ToLower() == symbol.ToLower());

            if(portfolioModel == null) {
                return null;
            }

            _context.Portfolios.Remove(portfolioModel);
            await _context.SaveChangesAsync();
            return portfolioModel;
        }

        public async Task<List<Stock>> GetUserPortfolio(AppUser user) {
            return await _context.Portfolios.Where(u => u.AppUserId == user.Id) 
            .Select(stock => new Stock {
                Id = stock.StockId,
                Symbol = stock.stock.Symbol,
                CompanyName = stock.stock.CompanyName,
                Purchase = stock.stock.Purchase,
                LastDiv = stock.stock.LastDiv,
                Industry = stock.stock.Industry,
                MarketCap = stock.stock.MarketCap
            }).ToListAsync();
        }
    }
}