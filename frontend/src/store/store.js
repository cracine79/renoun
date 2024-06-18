import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from './session';
import instrumentsReducer from './instrument';
import cartsReducer from './cart';
import ordersReducer from './order';
import { favoritesReducer } from './favorite';
import { reviewsReducer } from './sellerReview';
import { buyerSellerReviewsReducer } from './buyerSellerReviews.js';




const rootReducer = combineReducers({
  session: sessionReducer,
  instruments: instrumentsReducer,
  carts: cartsReducer,
  orders: ordersReducer,
  favorites: favoritesReducer,
  reviews: reviewsReducer,
  buyerSellerReviews: buyerSellerReviewsReducer
});

let enhancer;
if (import.meta.env.MODE === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = (await import("redux-logger")).default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
