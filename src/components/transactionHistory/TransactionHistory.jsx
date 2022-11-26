import PropTypes from 'prop-types'
import {Box} from 'components/Box'
import { Title, Columns, Info } from 'components/transactionHistory/TransactionHistory.styled'

export const TransactionHistory = ({ items }) => {

    return (
      <Box
      as = 'table' 
      width = '700px'
      bg = 'secondaryBg'
      mx = 'auto'
      mt = '50px'
      borderRadius = 'normal'
      boxShadow = '0px 4px 4px rgba(0, 0, 0, 0.15)'
        >
        
  <thead>
    <tr>
      <Title>Type</Title>
      <Title>Amount</Title>
      <Title>Currency</Title>
    </tr>
  </thead>

  <tbody>

    {items.map(({ id, type, amount, currency }) => {

      return (
        <Columns key ={id}>
      <Info>{type}</Info>
      <Info>{amount}</Info>
      <Info>{currency}</Info>
    </Columns>

      )


    })}
    
    
  </tbody>

</Box>

    )
}

TransactionHistory.propTypes = {

  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
}