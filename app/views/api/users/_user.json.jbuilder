json.extract! user, :id, :username
json.listId user.list ? user.list.id : ""