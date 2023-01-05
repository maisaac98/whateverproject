export const selectSignupPopup = (state) => state.loginPopup.isSignupOpen;
export const selectSigninPopup = (state) => state.loginPopup.isSigninOpen;
export const selectEmailSignUpPopup = (state) => state.loginPopup.isEmailSignupOpen;
export const selectEmailSignInPopup = (state) => state.loginPopup.isEmailSigninOpen;
export const selectPopupOpen = (state) => state.loginPopup.isPopupOpen;

