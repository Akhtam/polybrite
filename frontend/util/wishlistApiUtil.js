export const addToWishList = wishlist => {
	return $.ajax({
		method: 'POST',
		url: '/api/wishlists',
		data: { wishlist },
	});
};

export const fetchWishlists = () => {
	return $.ajax({
		method: 'GET',
		url: '/api/wishlists',
	});
};
//Add  Similar courses under

export const deleteWishlist = wishlistId => {
	return $.ajax({
		method: 'DELETE',
		url: `/api/wishlists/${wishlistId}`,
	});
};
