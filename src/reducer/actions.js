// actions.js

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const FETCH_PRODUCT_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCT_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const FETCH_STORE_REQUEST = 'FETCH_STORE_REQUEST';
export const FETCH_STORE_SUCCESS = 'FETCH_STORE_SUCCESS';
export const FETCH_STORE_FAILURE = 'FETCH_STORE_FAILURE';
export const CREATE_STORE_REQUEST = 'CREATE_STORE_REQUEST';
export const CREATE_STORE_SUCCESS = 'CREATE_STORE_SUCCESS';
export const CREATE_STORE_FAILURE = 'CREATE_STORE_FAILURE';
export const LOGIN_STORE_REQUEST = 'LOGIN_STORE_REQUEST';
export const LOGIN_STORE_SUCCESS = 'LOGIN_STORE_SUCCESS';
export const LOGIN_STORE_FAILURE = 'LOGIN_STORE_FAILURE';
export const REGISITION_STORE_REQUEST = 'REGISITION_STORE_REQUEST';
export const REGISITION_STORE_SUCCESS = 'REGISITION_STORE_SUCCESS';
export const REGISITION_STORE_FAILURE = 'REGISITION_STORE_FAILURE';
export const PROFILE_REQUEST = 'PROFILE_REQUEST';
export const PROFILE_SUCCESS = 'PROFILE_SUCCESS';
export const PROFILE_FAILURE = 'PROFILE_FAILURE';
export const ORDER_LIST_REQUEST = 'ORDER_LIST_REQUEST';
export const ORDER_LIST_SUCCESS = 'ORDER_LIST_SUCCESS';
export const ORDER_LIST_FAILURE = 'ORDER_LIST_FAILURE';
export const PRODUCT_IB_BY_REQUEST = 'PRODUCT_IB_BY_REQUEST';
export const PRODUCT_IB_BY_SUCCESS = 'PRODUCT_IB_BY_SUCCESS';
export const PRODUCT_IB_BY_FAILURE = 'PRODUCT_IB_BY_FAILURE';
export const BRAND_IB_BY_REQUEST = 'BRAND_IB_BY_REQUEST';
export const BRAND_IB_BY_SUCCESS = 'BRAND_IB_BY_SUCCESS';
export const BRAND_IB_BY_FAILURE = 'BRAND_IB_BY_FAILURE';
export const ADDCARD_IB_BY_REQUEST = 'ADDCARD_IB_BY_REQUEST';
export const ADDCARD_IB_BY_SUCCESS = 'ADDCARD_IB_BY_SUCCESS';
export const ADDCARD_IB_BY_FAILURE = 'ADDCARD_IB_BY_FAILURE';
export const GET_ADDCARD_IB_BY_REQUEST = 'GET_ADDCARD_IB_BY_REQUEST';
export const GET_ADDCARD_IB_BY_SUCCESS = 'GET_ADDCARD_IB_BY_SUCCESS';
export const GET_ADDCARD_IB_BY_FAILURE = 'GET_ADDCARD_IB_BY_FAILURE';
export const DELETE_ADDCARD_IB_BY_REQUEST = 'DELETE_ADDCARD_IB_BY_REQUEST';
export const DELETE_ADDCARD_IB_BY_SUCCESS = 'DELETE_ADDCARD_IB_BY_SUCCESS';
export const DELETE_ADDCARD_IB_BY_FAILURE = 'DELETE_ADDCARD_IB_BY_FAILURE';
export const EDIT_PRODUCT_ID_REQUEST = 'EDIT_PRODUCT_ID_REQUEST';
export const EDIT_PRODUCT_ID_SUCCESS = 'EDIT_PRODUCT_ID_SUCCESS';
export const EDIT_PRODUCT_ID_FAILURE = 'EDIT_PRODUCT_ID_FAILURE';
export const DELETE_PRODUCT_ID_REQUEST = 'DELETE_PRODUCT_ID_REQUEST';
export const DELETE_PRODUCT_ID_SUCCESS = 'DELETE_PRODUCT_ID_SUCCESS';
export const DELETE_PRODUCT_ID_FAILURE = 'DELETE_PRODUCT_ID_FAILURE';
export const ADD_PRODUCT_ID_REQUEST = 'ADD_PRODUCT_ID_REQUEST';
export const ADD_PRODUCT_ID_SUCCESS = 'ADD_PRODUCT_ID_SUCCESS';
export const ADD_PRODUCT_ID_FAILURE = 'ADD_PRODUCT_ID_FAILURE';
export const USER_RESPONCE_REQUEST = 'USER_RESPONCE_REQUEST';
export const USER_RESPONCE_SUCCESS = 'USER_RESPONCE_SUCCESS';
export const USER_RESPONCE_FAILURE = 'USER_RESPONCE_FAILURE';
export const ADMIN_LIST_RESPONCE_REQUEST = 'ADMIN_LIST_RESPONCE_REQUEST';
export const ADMIN_LIST_RESPONCE_SUCCESS = 'ADMIN_LIST_RESPONCE_SUCCESS';
export const ADMIN_LIST_RESPONCE_FAILURE = 'ADMIN_LIST_RESPONCE_FAILURE';
export const GET_STAFF_LIST_REQUEST = 'GET_STAFF_LIST_REQUEST';
export const GET_STAFF_LIST_SUCCESS = 'GET_STAFF_LIST_SUCCESS';
export const GET_STAFF_LIST_FAILURE = 'GET_STAFF_LIST_FAILURE';
export const GET_PROFILE_LIST_REQUEST = 'GET_PROFILE_LIST_REQUEST';
export const GET_PROFILE_LIST_SUCCESS = 'GET_PROFILE_LIST_SUCCESS';
export const GET_PROFILE_LIST_FAILURE = 'GET_PROFILE_LIST_FAILURE';
export const ADD_EMPLOYEE_REQUEST = 'ADD_EMPLOYEE_REQUEST';
export const ADD_EMPLOYEE_SUCCESS = 'ADD_EMPLOYEE_SUCCESS';
export const ADD_EMPLOYEE_FAILURE = 'ADD_EMPLOYEE_FAILURE';
export const GET_COUPON_LIST_REQUEST = 'GET_COUPON_LIST_REQUEST';
export const GET_COUPON_LIST_SUCCESS = 'GET_COUPON_LIST_SUCCESS';
export const GET_COUPON_LIST_FAILURE = 'GET_COUPON_LIST_FAILURE';
export const GET_EVENTS_LIST_REQUEST = 'GET_EVENTS_LIST_REQUEST';
export const GET_EVENTS_LIST_SUCCESS = 'GET_EVENTS_LIST_SUCCESS';
export const GET_EVENTS_LIST_FAILURE = 'GET_EVENTS_LIST_FAILURE';
export const GET_BLOGS_LIST_REQUEST = 'GET_BLOGS_LIST_REQUEST';
export const GET_BLOGS_LIST_SUCCESS = 'GET_BLOGS_LIST_SUCCESS';
export const GET_BLOGS_LIST_FAILURE = 'GET_BLOGS_LIST_FAILURE';
export const GET_COUPON_IB_BY_REQUEST = 'GET_COUPON_IB_BY_REQUEST';
export const GET_COUPON_IB_BY_SUCCESS = 'GET_COUPON_IB_BY_SUCCESS';
export const GET_COUPON_IB_BY_FAILURE = 'GET_COUPON_IB_BY_FAILURE';
export const ADD_EVENTS_LIST_REQUEST = 'ADD_EVENTS_LIST_REQUEST';
export const ADD_EVENTS_LIST_SUCCESS = 'ADD_EVENTS_LIST_SUCCESS';
export const ADD_EVENTS_LIST_FAILURE = 'ADD_EVENTS_LIST_FAILURE';
export const ADD_BLOGS_LIST_REQUEST = 'ADD_BLOGS_LIST_REQUEST';
export const ADD_BLOGS_LIST_SUCCESS = 'ADD_BLOGS_LIST_SUCCESS';
export const ADD_BLOGS_LIST_FAILURE = 'ADD_BLOGS_LIST_FAILURE';
export const SUB_BRAND_IB_BY_REQUEST = 'SUB_BRAND_IB_BY_REQUEST';
export const SUB_BRAND_IB_BY_SUCCESS = 'SUB_BRAND_IB_BY_SUCCESS';
export const SUB_BRAND_IB_BY_FAILURE = 'SUB_BRAND_IB_BY_FAILURE';

export const fetchHeaderRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchHeaderSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchHeaderFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});
export const fetchProductRequest = () => ({
  type: FETCH_PRODUCT_REQUEST,
});

export const fetchProductSuccess = (data) => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload: data,
});

export const fetchProductFailure = (error) => ({
  type: FETCH_PRODUCT_FAILURE,
  payload: error,
});

export const fetchStoreRequest = () => ({
  type: FETCH_STORE_REQUEST,
});

export const fetchStoreSuccess = (data) => ({
  type: FETCH_STORE_SUCCESS,
  payload: data,
});

export const fetchStoreFailure = (error) => ({
  type: FETCH_STORE_FAILURE,
  payload: error,
});


export const CreateStoreRequest = () => ({
  type: CREATE_STORE_REQUEST,
});

export const CreateStoreSuccess = (data) => ({
  type: CREATE_STORE_SUCCESS,
  payload: data,
});

export const CreateStoreFailure = (error) => ({
  type: CREATE_STORE_FAILURE,
  payload: error,
});
export const LoginStoreRequest = () => ({
  type: LOGIN_STORE_REQUEST,
});

export const LoginStoreSuccess = (data) => ({
  type: LOGIN_STORE_SUCCESS,
  payload: data,
});

export const LoginStoreFailure = (error) => ({
  type: LOGIN_STORE_FAILURE,
  payload: error,
});

export const RegistionStoreRequest = () => ({
  type: REGISITION_STORE_REQUEST,
});

export const RegistionStoreSuccess = (data) => ({
  type: REGISITION_STORE_SUCCESS,
  payload: data,
});

export const RegistionStoreFailure = (error) => ({
  type: REGISITION_STORE_FAILURE,
  payload: error,
});

export const ProfileRequest = () => ({
  type: PROFILE_REQUEST,
});

export const ProfileSuccess = (data) => ({
  type: PROFILE_SUCCESS,
  payload: data,
});

export const ProfileFailure = (error) => ({
  type: PROFILE_FAILURE,
  payload: error,
});
export const UserDataRequest = () => ({
  type: USER_RESPONCE_REQUEST,
});

export const UserDataSuccess = (data) => ({
  type: USER_RESPONCE_SUCCESS,
  payload: data,
});

export const UserDataFailure = (error) => ({
  type: USER_RESPONCE_FAILURE,
  payload: error,
});

export const AdminDataRequest = () => ({
  type: ADMIN_LIST_RESPONCE_REQUEST,
});

export const AdminDataSuccess = (data) => ({
  type: ADMIN_LIST_RESPONCE_SUCCESS,
  payload: data,
});

export const AdminDataFailure = (error) => ({
  type: ADMIN_LIST_RESPONCE_FAILURE,
  payload: error,
});

export const EditProductRequest = () => ({
  type: EDIT_PRODUCT_ID_REQUEST,
});

export const EditProductSuccess = (data) => ({
  type: EDIT_PRODUCT_ID_SUCCESS,
  payload: data,
});

export const EditProductFailure = (error) => ({
  type: EDIT_PRODUCT_ID_FAILURE,
  payload: error,
});

export const DeleteProductRequest = () => ({
  type: DELETE_PRODUCT_ID_REQUEST,
});

export const DeleteProductSuccess = (data) => ({
  type: DELETE_PRODUCT_ID_SUCCESS,
  payload: data,
});

export const DeleteProductFailure = (error) => ({
  type: DELETE_PRODUCT_ID_FAILURE,
  payload: error,
});

export const AddProductRequest = () => ({
  type: ADD_PRODUCT_ID_REQUEST,
});

export const AddProductSuccess = (data) => ({
  type: ADD_PRODUCT_ID_SUCCESS,
  payload: data,
});

export const AddProductFailure = (error) => ({
  type: ADD_PRODUCT_ID_FAILURE,
  payload: error,
});
export const OrderRequest = () => ({
  type: ORDER_LIST_REQUEST,
});

export const OrderSuccess = (data) => ({
  type: ORDER_LIST_SUCCESS,
  payload: data,
});

export const OrderFailure = (error) => ({
  type: ORDER_LIST_FAILURE,
  payload: error,
});
export const ProductIdRequest = () => ({
  type: PRODUCT_IB_BY_REQUEST,
});

export const ProductIdSuccess = (data) => ({
  type: PRODUCT_IB_BY_SUCCESS,
  payload: data,
});

export const ProductIdFailure = (error) => ({
  type: PRODUCT_IB_BY_FAILURE,
  payload: error,
});

export const BrandIdRequest = () => ({
  type: BRAND_IB_BY_REQUEST,
});

export const BrandIdSuccess = (data) => ({
  type: BRAND_IB_BY_SUCCESS,
  payload: data,
});

export const BrandIdFailure = (error) => ({
  type: BRAND_IB_BY_FAILURE,
  payload: error,
});
export const AddCardIdRequest = () => ({
  type: ADDCARD_IB_BY_REQUEST,
});

export const AddCardIdSuccess = (data) => ({
  type: ADDCARD_IB_BY_SUCCESS,
  payload: data,
});

export const AddCardIdFailure = (error) => ({
  type: ADDCARD_IB_BY_FAILURE,
  payload: error,
});
export const GetAddCardIdRequest = () => ({
  type: GET_ADDCARD_IB_BY_REQUEST,
});

export const GetAddCardIdSuccess = (data) => ({
  type: GET_ADDCARD_IB_BY_SUCCESS,
  payload: data,
});

export const GetAddCardIdFailure = (error) => ({
  type: GET_ADDCARD_IB_BY_FAILURE,
  payload: error,
});
export const DeleteAddCardIdRequest = () => ({
  type: DELETE_ADDCARD_IB_BY_REQUEST,
});

export const DeleteAddCardIdSuccess = (data) => ({
  type: DELETE_ADDCARD_IB_BY_SUCCESS,
  payload: data,
});

export const DeleteAddCardIdFailure = (error) => ({
  type: DELETE_ADDCARD_IB_BY_FAILURE,
  payload: error,
});

export const GetOurStaffRequest = () => ({
  type: GET_STAFF_LIST_REQUEST,
});

export const GetOurStaffSuccess = (data) => ({
  type: GET_STAFF_LIST_SUCCESS,
  payload: data,
});

export const GetOurStaffFailure = (error) => ({
  type: GET_STAFF_LIST_FAILURE,
  payload: error,
});

export const AddEmployeeRequest = () => ({
  type: ADD_EMPLOYEE_REQUEST,
});

export const AddEmployeeSuccess = (data) => ({
  type: ADD_EMPLOYEE_SUCCESS,
  payload: data,
});

export const AddEmployeeFailure = (error) => ({
  type: ADD_EMPLOYEE_FAILURE,
  payload: error,
});

export const GetProfileRequest = () => ({
  type: GET_PROFILE_LIST_REQUEST,
});

export const GetProfileSuccess = (data) => ({
  type: GET_PROFILE_LIST_SUCCESS,
  payload: data,
});

export const GetProfileFailure = (error) => ({
  type: GET_PROFILE_LIST_FAILURE,
  payload: error,
});

export const GetCouponsRequest = () => ({
  type: GET_COUPON_LIST_REQUEST,
});

export const GetCouponsSuccess = (data) => ({
  type: GET_COUPON_LIST_SUCCESS,
  payload: data,
});

export const GetCouponsFailure = (error) => ({
  type: GET_COUPON_LIST_FAILURE,
  payload: error,
});

export const GetEventsRequest = () => ({
  type: GET_EVENTS_LIST_REQUEST,
});

export const GetEventsSuccess = (data) => ({
  type: GET_EVENTS_LIST_SUCCESS,
  payload: data,
});

export const GetEventsFailure = (error) => ({
  type: GET_EVENTS_LIST_FAILURE,
  payload: error,
});
export const GetBlogsRequest = () => ({
  type: GET_BLOGS_LIST_REQUEST,
});

export const GetBlogsSuccess = (data) => ({
  type: GET_BLOGS_LIST_SUCCESS,
  payload: data,
});

export const GetBlogsFailure = (error) => ({
  type: GET_BLOGS_LIST_FAILURE,
  payload: error,
});

export const GetCouponRequest = () => ({
  type: GET_COUPON_IB_BY_REQUEST,
});

export const GetCouponSuccess = (data) => ({
  type: GET_COUPON_IB_BY_SUCCESS,
  payload: data,
});

export const GetCouponFailure = (error) => ({
  type: GET_COUPON_IB_BY_FAILURE,
  payload: error,
});

export const AddEventsRequest = () => ({
  type: ADD_EVENTS_LIST_REQUEST,
});

export const AddEventsSuccess = (data) => ({
  type: ADD_EVENTS_LIST_SUCCESS,
  payload: data,
});

export const AddEventsFailure = (error) => ({
  type: ADD_EVENTS_LIST_FAILURE,
  payload: error,
});

export const AddBlogsRequest = () => ({
  type: ADD_BLOGS_LIST_REQUEST,
});

export const AddBlogsSuccess = (data) => ({
  type: ADD_BLOGS_LIST_SUCCESS,
  payload: data,
});

export const AddBlogsFailure = (error) => ({
  type: ADD_BLOGS_LIST_FAILURE,
  payload: error,
});

export const SubBrandIdRequest = () => ({
  type: SUB_BRAND_IB_BY_REQUEST,
});

export const SubBrandIdSuccess = (data) => ({
  type: SUB_BRAND_IB_BY_SUCCESS,
  payload: data,
});

export const SubBrandIdFailure = (error) => ({
  type: SUB_BRAND_IB_BY_FAILURE,
  payload: error,
});