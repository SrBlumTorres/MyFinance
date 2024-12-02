
type TransactionProps = {
    id: number,
    title: string,
    amount: number,
    extraInformation: string
}

function TransactionCard(props: TransactionProps) {

    return (

        <div className="flex flex-col w-1/6 border-black border-solid ">
            <div>
                <h3>{props.title}</h3>
            </div>
            <span>${props.amount}</span>
            <span>{props.extraInformation}</span>
        </div>

    )
}

export default TransactionCard