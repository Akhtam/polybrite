import {
	RECEIVE_WISHLISTS,
	DELETE_WISHLIST,
} from '../../actions/wishlist';

const wishlistReducer = (state = {}, action) => {
    Object.freeze(state);
	switch (action.type) {
		case RECEIVE_WISHLISTS:
			return Object.assign({}, state, action.wishlists);
		case DELETE_WISHLIST:
			const newState = Object.assign({}, state, action.wishlists);
			delete newState[action.wishlistId];
			return newState;
		default:
			return state;
	}
};

export default wishlistReducer;
