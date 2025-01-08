
interface Props {
    companyName: string
    ticker: string
    price: number
}

const Card: React.FC<Props> = ({ companyName, ticker, price }: Props) : JSX.Element => {
  return (
    <div className="card">Card
    <div className="details">
        <h2>{companyName} ({ticker})</h2>
        <p>${price}</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, voluptas.</p>
    </div>
    </div>
  )
}

export default Card