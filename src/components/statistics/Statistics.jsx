import PropTypes from 'prop-types'
import { Box } from 'components/Box'
import getRandomHexColor from 'utils/getRandomHexColor'
import { Title, Label, Percentage} from 'components/statistics/Statistics.styled'

export const Statistics = ({ stats, title }) => {
    return (
      <Box
      width = '400px'
      as = 'section'
      textAlign = 'center'
      border = 'borderBold'
      mt = '50px'
      mx = 'auto'
      bg = 'mainBg'
      
      >
      
      {title &&  <Title>{title}</Title>}

      <Box 
      
      display = 'flex'
      alignItems = 'center'
      textAlign = 'center'
      justifyContent = 'space-around'
      width = '100%'
      height= '60px'
      bg = {getRandomHexColor()}
      p ='0'
      m = '0'
      mt = '20px'
      >
 

    {stats.map(({ id, label, percentage }) => {
    return  (
      <Box
      key ={id}
      width = '100%'
      height = '100%'
      display = 'flex'
      flexDirection = 'column'
      justifyContent = 'center'
      bg = {getRandomHexColor()}
      

      >
        
        <Label>{label}</Label>
        <Percentage>{percentage}%</Percentage>
      
      </Box>
    )})
      }
    
    
  
  </Box>

</Box>
    )
}

Statistics.propTypes = {

    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      }))
    }