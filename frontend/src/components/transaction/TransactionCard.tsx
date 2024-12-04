
type TransactionProps = {
    id: number,
    title: string,
    amount: number,
    extraInformation: string
}

function TransactionCard(props: TransactionProps) {

    return (

        <div className="flex flex-col p-4 w-1/5 !h-40 border-black border-solid border-2 rounded-2xl">
            <div>
                <h3>{props.title}</h3>
            </div>
            <span>${props.amount}</span>
            <span>{props.extraInformation}</span>
        </div>

    )
}

export default TransactionCard