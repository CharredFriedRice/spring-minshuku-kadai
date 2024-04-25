const stripe = Stripe('pk_test_51P4KqRLp5ayyNDy01f5it9khWghBO5U0jI3EpdOkx5BBkcb6nUV9i7dN3eDiH6KhAAvHLteUgWdqmZDEkUxfERcF00rjUeqG6F');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
	stripe.redirectToCheckout({
		sessionId: sessionId
	})
});