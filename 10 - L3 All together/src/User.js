import propTypes from "prop-types";

const User = ({user, showGamesPlayed})=>{
    return(
        <li className="user">
            <p>Name: {user.username}</p>
            <p>
                Games played: {showGamesPlayed ? user.numGamesPlayed : "*"}
            </p>
        </li>
    );
};

User.protoTypes = {
    showGamesPlayed : propTypes.bool.isRequired,
    user : propTypes.object.isRequired
};

export default User;