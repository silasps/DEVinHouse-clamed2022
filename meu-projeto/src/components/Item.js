import PropTypes from 'prop-types'

export default function Item({marca, ano_lancamento}){
    return (
        <>
            <li>
                {marca} - {ano_lancamento}
            </li>
        </>
    )
}

// PropTypes - Definir a tipagem das props
Item.propTypes = {
    marca: PropTypes.string,
    ano_lancamento: PropTypes.number,
}

// Default Props - Definir um valor padrao para as props caso nenhum valor seja enviado
Item.defaultProps = {
    marca: 'Insira uma marca',
    ano_lancamento: 1999,
}