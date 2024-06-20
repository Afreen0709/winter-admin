// reducer.js

import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  FETCH_STORE_FAILURE,
  FETCH_STORE_REQUEST,
  FETCH_STORE_SUCCESS,
  CREATE_STORE_FAILURE,
  CREATE_STORE_REQUEST,
  CREATE_STORE_SUCCESS,
  LOGIN_STORE_REQUEST,
  LOGIN_STORE_SUCCESS,
  LOGIN_STORE_FAILURE,
  PROFILE_FAILURE,
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
  ORDER_LIST_FAILURE,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_REQUEST,
  PRODUCT_IB_BY_REQUEST,
  PRODUCT_IB_BY_SUCCESS,
  PRODUCT_IB_BY_FAILURE,
  ADDCARD_IB_BY_REQUEST,
  ADDCARD_IB_BY_SUCCESS,
  ADDCARD_IB_BY_FAILURE,
  GET_ADDCARD_IB_BY_REQUEST,
  GET_ADDCARD_IB_BY_SUCCESS,
  GET_ADDCARD_IB_BY_FAILURE,
  DELETE_ADDCARD_IB_BY_REQUEST,
  DELETE_ADDCARD_IB_BY_SUCCESS,
  DELETE_ADDCARD_IB_BY_FAILURE,
  USER_RESPONCE_REQUEST,
  USER_RESPONCE_SUCCESS,
  USER_RESPONCE_FAILURE,
  BRAND_IB_BY_FAILURE,
  REGISITION_STORE_REQUEST,
  REGISITION_STORE_SUCCESS,
  REGISITION_STORE_FAILURE,
  ADMIN_LIST_RESPONCE_REQUEST,
  ADMIN_LIST_RESPONCE_SUCCESS,
  ADMIN_LIST_RESPONCE_FAILURE,
  EDIT_PRODUCT_ID_REQUEST,
  EDIT_PRODUCT_ID_SUCCESS,
  EDIT_PRODUCT_ID_FAILURE,
  DELETE_PRODUCT_ID_REQUEST,
  DELETE_PRODUCT_ID_SUCCESS,
  DELETE_PRODUCT_ID_FAILURE,
  GET_STAFF_LIST_REQUEST,
  GET_STAFF_LIST_SUCCESS,
  GET_STAFF_LIST_FAILURE,
  ADD_EMPLOYEE_REQUEST,
  ADD_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEE_FAILURE,
  GET_PROFILE_LIST_REQUEST,
  GET_PROFILE_LIST_SUCCESS,
  GET_PROFILE_LIST_FAILURE,
  GET_COUPON_LIST_REQUEST,
  GET_COUPON_LIST_SUCCESS,
  GET_COUPON_LIST_FAILURE,
  GET_EVENTS_LIST_REQUEST,
  GET_EVENTS_LIST_SUCCESS,
  GET_EVENTS_LIST_FAILURE,
  GET_BLOGS_LIST_REQUEST,
  GET_BLOGS_LIST_SUCCESS,
  GET_BLOGS_LIST_FAILURE,
  GET_COUPON_IB_BY_REQUEST,
  GET_COUPON_IB_BY_SUCCESS,
  GET_COUPON_IB_BY_FAILURE,
  ADD_EVENTS_LIST_REQUEST,
  ADD_EVENTS_LIST_SUCCESS,
  ADD_EVENTS_LIST_FAILURE,
  ADD_BLOGS_LIST_REQUEST,
  ADD_BLOGS_LIST_SUCCESS,
  ADD_BLOGS_LIST_FAILURE,
  SUB_BRAND_IB_BY_REQUEST,
  SUB_BRAND_IB_BY_SUCCESS,
  SUB_BRAND_IB_BY_FAILURE,
} from "./actions";

const initialState = {
  data: null,
  productlist: null,
  storelist: null,
  loading: false,
  error: null,
  loginerror: null,
  createData: null,
  createerror: null,
  Editcategory: null, // This will store the response data
  loginData: null,
  getprofile: null,
  profileerror: null,
  Ordererror: null,
  getOrder: null,
  ProductIderror: null,
  GetProductId: null,
  ProductIdloading: null,
  addcardIdloading: null,
  GetAddcardRes: null,
  addloading: null,
  GetAddcardUserRes: null,
  Deleteloading: null,
  DeleteAddcardUserRes: null,
  GetBrandId: null,
  GetStorelist: null,
  EditproductbyId: null,
  GetStaffList: null,
  GetProfileList: null,
  addStaffList: null,
  GetEventList: null
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        productlist: action.payload,
      };
    case FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_STORE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_STORE_SUCCESS:
      return {
        ...state,
        loading: false,
        storelist: action.payload,
      };
    case FETCH_STORE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_STORE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        Editcategory: null,
      };
    case CREATE_STORE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        Editcategory: action.payload, // Update userData with the response data
      };
    case CREATE_STORE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload, // Update error with the error message
        userData: null,
      };
    case LOGIN_STORE_REQUEST:
      return {
        ...state,
        loading: true,
        loginerror: null,
        loginData: null,
      };
    case LOGIN_STORE_SUCCESS:
      return {
        ...state,
        loading: false,
        loginerror: null,
        loginData: action.payload, // Update userData with the response data
      };
    case LOGIN_STORE_FAILURE:
      return {
        ...state,
        loading: false,
        loginerror: action.payload, // Update error with the error message
        loginData: null,
      };
    case REGISITION_STORE_REQUEST:
      return {
        ...state,
        loading: true,
        createerror: null,
        createData: null,
      };
    case REGISITION_STORE_SUCCESS:
      return {
        ...state,
        loading: false,
        createerror: null,
        createData: action.payload, // Update userData with the response data
      };
    case REGISITION_STORE_FAILURE:
      return {
        ...state,
        loading: false,
        createerror: action.payload, // Update error with the error message
        createData: null,
      };
    case PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
        profileerror: null,
        getproductlist: null,
      };
    case PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        profileerror: null,
        getproductlist: action.payload, // Update userData with the response data
      };
    case PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        profileerror: action.payload, // Update error with the error message
        getprofile: null,
      };

    case USER_RESPONCE_REQUEST:
      return {
        ...state,
        loading: true,
        profileerror: null,
        getUserDatalist: null,
      };
    case USER_RESPONCE_SUCCESS:
      return {
        ...state,
        loading: false,
        profileerror: null,
        getUserDatalist: action.payload, // Update userData with the response data
      };
    case USER_RESPONCE_FAILURE:
      return {
        ...state,
        loading: false,
        getUserDatalist: action.payload, // Update error with the error message
        getprofile: null,
      };
    case ADMIN_LIST_RESPONCE_REQUEST:
      return {
        ...state,
        loading: true,
        GetStorelist: null,
      };
    case ADMIN_LIST_RESPONCE_SUCCESS:
      return {
        ...state,
        loading: false,
        GetStorelist: action.payload, // Update userData with the response data
      };
    case ADMIN_LIST_RESPONCE_FAILURE:
      return {
        ...state,
        loading: false,
        GetStorelist: action.payload, // Update error with the error message
      };

    case ORDER_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        Ordererror: null,
        getOrder: null,
      };
    case ORDER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        Ordererror: null,
        getOrder: action.payload, // Update userData with the response data
      };
    case ORDER_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        Ordererror: action.payload, // Update error with the error message
        getOrder: null,
      };
    case PRODUCT_IB_BY_REQUEST:
      return {
        ...state,
        ProductIdloading: true,
        ProductIderror: null,
        GetProductId: null,
      };
    case PRODUCT_IB_BY_SUCCESS:
      return {
        ...state,
        ProductIdloading: false,
        ProductIderror: null,
        GetProductId: action.payload, // Update userData with the response data
      };
    case PRODUCT_IB_BY_FAILURE:
      return {
        ...state,
        ProductIdloading: false,
        ProductIderror: action.payload, // Update error with the error message
        GetProductId: null,
      };
    case EDIT_PRODUCT_ID_REQUEST:
      return {
        ...state,
        // ProductIdloading: false,
        // ProductIderror: action.payload, // Update error with the error message
        // GetProductId: null,
      };
    case EDIT_PRODUCT_ID_SUCCESS:
      return {
        ...state,
        BrandIdloading: true,
        EditproductbyId: null,
      };
    case EDIT_PRODUCT_ID_FAILURE:
      return {
        ...state,
        BrandIdloading: false,
        EditproductbyId: action.payload, // Update userData with the response data
      };
    case DELETE_PRODUCT_ID_REQUEST:
      return {
        ...state,
        DeleteIdloading: false,
        ProductIderror: action.payload, // Update error with the error message
        DeleteProductId: null,
      };
    case DELETE_PRODUCT_ID_SUCCESS:
      return {
        ...state,
        DeleteIdloading: true,
        DeleteProductId: null,
      };
    case DELETE_PRODUCT_ID_FAILURE:
      return {
        ...state,
        DeleteIdloading: false,
        DeleteProductId: action.payload, // Update userData with the response data
      };
    case BRAND_IB_BY_FAILURE:
      return {
        ...state,
        BrandIdloading: false,
        EditproductbyId: null,
      };
    case ADDCARD_IB_BY_REQUEST:
      return {
        ...state,
        addcardIdloading: true,
        GetAddcardRes: null,
      };
    case ADDCARD_IB_BY_SUCCESS:
      return {
        ...state,
        addcardIdloading: false,
        GetAddcardRes: action.payload, // Update userData with the response data
      };
    case ADDCARD_IB_BY_FAILURE:
      return {
        ...state,
        addcardIdloading: false,
        GetAddcardRes: action.payload,
      };
    case GET_ADDCARD_IB_BY_REQUEST:
      return {
        ...state,
        addloading: true,
        GetAddcardUserRes: null,
      };
    case GET_ADDCARD_IB_BY_SUCCESS:
      return {
        ...state,
        addloading: false,
        GetAddcardUserRes: action.payload, // Update userData with the response data
      };
    case GET_ADDCARD_IB_BY_FAILURE:
      return {
        ...state,
        addloading: false,
        GetAddcardUserRes: action.payload,
      };
    case DELETE_ADDCARD_IB_BY_REQUEST:
      return {
        ...state,
        Deleteloading: true,
        DeleteAddcardUserRes: null,
      };
    case DELETE_ADDCARD_IB_BY_SUCCESS:
      return {
        ...state,
        Deleteloading: false,
        DeleteAddcardUserRes: action.payload, // Update userData with the response data
      };
    case DELETE_ADDCARD_IB_BY_FAILURE:
      return {
        ...state,
        Deleteloading: false,
        DeleteAddcardUserRes: action.payload,
      };

    case GET_STAFF_LIST_REQUEST:
      return {
        ...state,
        addloading: true,
        GetStaffList: null,
      };
    case GET_STAFF_LIST_SUCCESS:
      return {
        ...state,
        addloading: false,
        GetStaffList: action.payload, // Update userData with the response data
      };
    case GET_STAFF_LIST_FAILURE:
      return {
        ...state,
        addloading: false,
        GetStaffList: action.payload,
      };

    case ADD_EMPLOYEE_REQUEST:
      return {
        ...state,
        addloading: true,
        addStaffList: null,
      };
    case ADD_EMPLOYEE_SUCCESS:
      return {
        ...state,
        addloading: false,
        addStaffList: action.payload, // Update userData with the response data
      };
    case ADD_EMPLOYEE_FAILURE:
      return {
        ...state,
        addloading: false,
        addStaffList: action.payload,
      };

    case GET_PROFILE_LIST_REQUEST:
      return {
        ...state,
        addloading: true,
        GetProfileList: null,
      };
    case GET_PROFILE_LIST_SUCCESS:
      return {
        ...state,
        addloading: false,
        GetProfileList: action.payload, // Update userData with the response data
      };
    case GET_PROFILE_LIST_FAILURE:
      return {
        ...state,
        addloading: false,
        GetProfileList: action.payload,
      };
    case GET_COUPON_LIST_REQUEST:
      return {
        ...state,
        GetCoupunList: null,
      };
    case GET_COUPON_LIST_SUCCESS:
      return {
        ...state,
        GetCoupunList: action.payload, // Update userData with the response data
      };
    case GET_COUPON_LIST_FAILURE:
      return {
        ...state,
        GetCoupunList: action.payload,
      };
    case GET_EVENTS_LIST_REQUEST:
      return {
        ...state,
        // GetEventList: null,
      };
    case GET_EVENTS_LIST_SUCCESS:
      return {
        ...state,
        GetEventList: action.payload, // Update userData with the response data
      };
    case GET_EVENTS_LIST_FAILURE:
      return {
        ...state,
        GetEventList: action.payload,
      };
    case GET_BLOGS_LIST_REQUEST:
      return {
        ...state,
        GetBlogsList: null,
      };
    case GET_BLOGS_LIST_SUCCESS:
      return {
        ...state,
        GetBlogsList: action.payload, // Update userData with the response data
      };
    case GET_BLOGS_LIST_FAILURE:
      return {
        ...state,
        GetBlogsList: action.payload,
      };
    case GET_COUPON_IB_BY_REQUEST:
      return {
        ...state,
        // AddCouponList: null,
      };
    case GET_COUPON_IB_BY_SUCCESS:
      return {
        ...state,
        AddCouponList: action.payload, // Update userData with the response data
      };
    case GET_COUPON_IB_BY_FAILURE:
      return {
        ...state,
        AddCouponList: action.payload,
      };
    case ADD_EVENTS_LIST_REQUEST:
      return {
        ...state,
        // AddCouponList: null,
      };
    case ADD_EVENTS_LIST_SUCCESS:
      return {
        ...state,
        AddEventsList: action.payload, // Update userData with the response data
      };
    case ADD_EVENTS_LIST_FAILURE:
      return {
        ...state,
        AddEventsList: action.payload,
      };

    case ADD_BLOGS_LIST_REQUEST:
      return {
        ...state,
        // AddCouponList: null,
      };
    case ADD_BLOGS_LIST_SUCCESS:
      return {
        ...state,
        AddBlogsList: action.payload, // Update userData with the response data
      };
    case ADD_BLOGS_LIST_FAILURE:
      return {
        ...state,
        AddBlogsList: action.payload,
      };
      case SUB_BRAND_IB_BY_REQUEST:
        return {
          ...state,
          // subbrandres: null,
        };
      case SUB_BRAND_IB_BY_SUCCESS:
        return {
          ...state,
          subbrandres: action.payload, // Update userData with the response data
        };
      case SUB_BRAND_IB_BY_FAILURE:
        return {
          ...state,
          subbrandres: action.payload,
        };
    default:
      return state;
  }
};

export default dataReducer;
