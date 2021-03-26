import { connect } from "react-redux";
import MyList from "./my_list";

import { receiveList } from "../../actions/list_actions"

const mapStateToProps = ( { entities: { list } } ) => ({
    list: list
})

const mapDispatchToProps = ( ) => ({
    receiveList: listId => dispatch(receiveList(listId))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyList);