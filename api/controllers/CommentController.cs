using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Comment;
using api.Interfaces;
using api.Mappers;
using Microsoft.AspNetCore.Mvc;

namespace api.controllers
{
    [Route("api/comment")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly ICommentRepo _commentRepo;
        private readonly IStockRepo _stockRepo;

        public CommentController(ICommentRepo commentRepo, IStockRepo stockRepo) {
            _commentRepo = commentRepo;
            _stockRepo = stockRepo;
        }

        [HttpGet]

        public async Task<IActionResult> GetAll() {
            
            if(!ModelState.IsValid) {
                return BadRequest(ModelState);
            }

            var comments = await _commentRepo.GetAllAsync();

            var CommentDto = comments.Select(s => s.ToCommentDto());

            return Ok(CommentDto);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById([FromRoute] int id) {
            var comment = await _commentRepo.GetByIdAsync(id);

            if(!ModelState.IsValid) {
                return BadRequest(ModelState);
            }

            if(comment == null) {
                return NotFound();
            }

            return Ok(comment.ToCommentDto());
        }

        [HttpPost]
        [Route("{stockId:int}")]

        public async Task<IActionResult> Create([FromRoute] int stockId, CreateCommentDto commentDto) {

            if(!ModelState.IsValid) {
                return BadRequest(ModelState);
            }

            if(!await _stockRepo.StockExists(stockId)) {
                return BadRequest("Stock does not exist");
            }

            var commentModel = commentDto.ToCommentFromCreate(stockId);
            await _commentRepo.CreateAsync(commentModel);

            return CreatedAtAction(nameof(GetById), new { id = commentModel.Id }, commentModel.ToCommentDto());
        }

        [HttpDelete]
        [Route("{id:int}")]

        public async Task<IActionResult> Delete([FromRoute] int id) {

            if(!ModelState.IsValid) {
                return BadRequest(ModelState);
            }

            var commentModel = await _commentRepo.DeleteAsync(id);

            if(commentModel == null) {
                return NotFound("Comment does not exist");
            }

            return Ok(commentModel);
        }

        [HttpPut]
        [Route("{id:int}")]

        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateCommentRequestDto updateDto) {

            if(!ModelState.IsValid) {
                return BadRequest(ModelState);
            }

            var commentModel = await _commentRepo.UpdateAsync(id, updateDto);

            if(commentModel == null) {
                return NotFound();
            }

            return Ok(commentModel.ToCommentDto());
        }
    }
}