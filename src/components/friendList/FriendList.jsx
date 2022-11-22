import PropTypes from 'prop-types'

export const FriendList = ({ friends }) => {

    return (
        <ul class="friend-list">

   {friends.map(({ avatar, name, isOnline, id }) => {

    return (
        <li key={id} className="item">
  <span className="status"></span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
  <p className="name">{name}</p>
</li>
    )
   })
  
   }

</ul>

)
}


FriendList.propTypes = {

    avatar: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,


}