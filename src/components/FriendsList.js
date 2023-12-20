import React from "react";
import Friend from "./Friend";

function FriendsList({ friends, onSelection, selectedFriend }) {
  return (
    <div>
      {friends.map((friend) => (
        <Friend
          onSelection={onSelection}
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
        />
      ))}
    </div>
  );
}

export default FriendsList;
