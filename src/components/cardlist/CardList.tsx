import Card from "../card/Card"

interface Props {

}

const CardList : React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <div>
        <Card companyName="Apple" ticker="APPL" price={100}/>
        <Card companyName="Tesla" ticker="TES" price={300}/>
        <Card companyName="Microsoft" ticker="MSFT" price={200}/>
    </div>
  )
}

export default CardList