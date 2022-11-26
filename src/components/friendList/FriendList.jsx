import PropTypes from 'prop-types'
import { Box } from 'components/Box'
import { FriendOnline, Avatar, Name } from 'components/friendList/FriendList.styled'


export const FriendList = ({ friends }) => {

    return (
        <Box 
        display = 'flex'
        flexDirection = 'column'
        width = '300px'
        mt = '50px'
        mx = 'auto'
        >
       

   {friends.map(({ avatar, name, isOnline, id }) => {

    return (
        <Box 
        key = {id}
        display = 'flex'
        alignItems = 'center'
        width = '100%'
        height = '100px'
        border = 'borderNorm'
        borderRadius = 'normal'
        mb = '10px'
        bg = 'mainBg'
        boxShadow = 'normal'
               
        >        
        
  <FriendOnline isOnline={isOnline}>{isOnline}</FriendOnline>
  <Avatar src={avatar} alt="User avatar"  />
  <Name>{name}</Name>
 </Box>
    )
   })
  
   }

</Box>

)
}


FriendList.propTypes = {

    friends: PropTypes.arrayOf(
        PropTypes.shape({
          avatar: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          isOnline: PropTypes.bool.isRequired,
          id: PropTypes.number.isRequired,
        }),
      ),

}