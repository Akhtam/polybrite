import * as wishlistApiUtil from '../util/wishlistApiUtil';

export const RECEIVE_WISHLISTS = 'RECEIVE_WISHLISTS';
export const DELETE_WISHLIST = 'DELETE_WISHLIST';

const receiveWishlists = wishlists => {
	return { type: RECEIVE_WISHLISTS, wishlists };
};

const deleteWishlist = wishlistId => ({
	type: DELETE_WISHLIST,
	wishlistId,
});

export const fetchWishlists = () => dispatch => {
	return wishlistApiUtil.fetchWishlists().then(res => {
		return dispatch(receiveWishlists(res));
	});
};

export const createWishlist = formWishlist => dispatch => {
	return wishlistApiUtil.addToWishList(formWishlist).then(res => {
		return dispatch(receiveWishlists(res));
	});
};

export const removeWishlist = wishlistId => dispatch => {
	return wishlistApiUtil
		.deleteWishlist(wishlistId)
		.then(() => dispatch(deleteWishlist(wishlistId)));
};
