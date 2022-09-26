import Item from './Item'

export default function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca='Ford' ano_lancamento={1985}/>
                <Item marca='Fiat' ano_lancamento={1964}/>
                <Item marca='Renault'/>
                <Item />
            </ul>
        </>
    )
}