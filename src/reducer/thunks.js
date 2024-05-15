// thunks.js

import axios from "axios";
import {
  fetchHeaderRequest,
  fetchHeaderSuccess,
  fetchHeaderFailure,
  fetchProductFailure,
  fetchProductRequest,
  fetchProductSuccess,
  fetchStoreFailure,
  fetchStoreRequest,
  fetchStoreSuccess,
  CreateStoreSuccess,
  CreateStoreRequest,
  CreateStoreFailure,
  LoginStoreRequest,
  LoginStoreSuccess,
  LoginStoreFailure,
  ProfileFailure,
  ProfileRequest,
  ProfileSuccess,
  OrderSuccess,
  OrderRequest,
  OrderFailure,
  ProductIdSuccess,
  ProductIdRequest,
  ProductIdFailure,
  AddCardIdRequest,
  AddCardIdSuccess,
  AddCardIdFailure,
  GetAddCardIdRequest,
  GetAddCardIdSuccess,
  GetAddCardIdFailure,
  DeleteAddCardIdRequest,
  DeleteAddCardIdSuccess,
  DeleteAddCardIdFailure,
  EditProductRequest,
  EditProductSuccess,
  EditProductFailure,
  AddProductRequest,
  AddProductSuccess,
  AddProductFailure,
  UserDataRequest,
  UserDataSuccess,
  UserDataFailure,
  BrandIdRequest,
  BrandIdSuccess,
  BrandIdFailure,
  RegistionStoreRequest,
  RegistionStoreSuccess,
  RegistionStoreFailure,
  AdminDataRequest,
  AdminDataSuccess,
  AdminDataFailure,
  DeleteProductRequest,
  DeleteProductSuccess,
  DeleteProductFailure,
  GetOurStaffRequest,
  GetOurStaffSuccess,
  GetOurStaffFailure,
  AddEmployeeRequest,
  AddEmployeeSuccess,
  AddEmployeeFailure,
  GetProfileRequest,
  GetProfileSuccess,
  GetProfileFailure,
  GetCouponsRequest,
  GetCouponsSuccess,
  GetCouponsFailure,
  GetEventsRequest,
  GetEventsSuccess,
  GetEventsFailure,
  GetBlogsRequest,
  GetBlogsSuccess,
  GetBlogsFailure,
  GetCouponRequest,
  GetCouponSuccess,
  GetCouponFailure,
  AddEventsRequest,
  AddEventsSuccess,
  AddEventsFailure,
  AddBlogsRequest,
  AddBlogsSuccess,
  AddBlogsFailure,
  SubBrandIdRequest,
  SubBrandIdSuccess,
  SubBrandIdFailure,
} from "./actions";
import constant from "../constant/constant";

const Dashboardlist = `${constant.baseUrl}api/order/Dashboardlist`;
const ProductList = `${constant.baseUrl}api/header/allbrandproduct?lang=1`;
const storeListcategories = `${constant.baseUrl}api/category/categories`;
const EditCategory = `${constant.baseUrl}api/category/categories`;
const DeleteCategory = `${constant.baseUrl}api/category/categories`;
const AddCategory = `${constant.baseUrl}api/header/addbanner`;
const Userlogin = `${constant.baseUrl}api/user/login`;
const Userprofile = `${constant.baseUrl}api/product/allProduct`;
const EditUserprofile = `${constant.baseUrl}api/product/Product`;
const DeleteUserprofile = `${constant.baseUrl}api/product/Product`;
const AllUserList = `${constant.baseUrl}api/user/list`;
const AddProduct = `${constant.baseUrl}api/product/addProduct`;
const Useraddress = `${constant.baseUrl}api/order/Orderlist`;
const UserBrandid = `${constant.baseUrl}api/brand/allbrand`;
const UserSubBrand = `${constant.baseUrl}api/sub-brand/allsubbrands`;
const AddBrandid = `${constant.baseUrl}api/brand/addbrand`;
const AddEmployessUser = `${constant.baseUrl}api/staff/createEmployee`;
const EditEmployessUser = `${constant.baseUrl}api/staff/updateEmployee`;
const DeleteEmployessUser = `${constant.baseUrl}api/staff/deleteEmployee`;
const EditBrandid = `${constant.baseUrl}api/brand/brand`;
const DeleteBrandid = `${constant.baseUrl}api/brand/brand`;
const CreateUser = `${constant.baseUrl}api/user/register`;
const EditUser = `${constant.baseUrl}api/user/User`;
const DeleteUser = `${constant.baseUrl}api/user/deleteUser`;
const AdminUserList = `${constant.baseUrl}api/user/adminUser`;
const AddCardProductid = `${constant.baseUrl}api/addcart/createCartItem`;
const GetAddCardProductcard = `${constant.baseUrl}api/addcart/addcartUser`;
const DelAddCardProductcard = `${constant.baseUrl}api/addcart/deleteCartItem`;
const GetStafflist = `${constant.baseUrl}api/staff/getAllEmployees`;
const Getprofilelist = `${constant.baseUrl}api/user/userGetById`;
const Getcouponslist = `${constant.baseUrl}api/coupon/GetCoupon`;
const GetEventslist = `${constant.baseUrl}api/event/allevents`;
const AddEventsId = `${constant.baseUrl}api/event/addevent`;
const GetBlogslist = `${constant.baseUrl}api/blog/allblogs`;
const AddCouponId = `${constant.baseUrl}api/coupon/createCoupon`;
const EditCouponId = `${constant.baseUrl}api/coupon/Coupons`;
const EditEventsId = `${constant.baseUrl}api/event/event`;
const AddBlogsId = `${constant.baseUrl}api/blog/addblog`;
const EditBlogsId = `${constant.baseUrl}api/blog/blog`;
const GetBannerlist = `${constant.baseUrl}api/header/allbanner?lang=1`;
const AddSubBrandlist = `${constant.baseUrl}api/sub-brand/addsubbrand`;
const EditSubBrandid = `${constant.baseUrl}api/sub-brand/subbrand`;
const DeleteSubBrandid = `${constant.baseUrl}api/sub-brand/subbrand`;









export const fetchDashboardlistData = () => async (dispatch) => {
  dispatch(fetchHeaderRequest());

  try {
    const response = await axios.get(Dashboardlist);
    dispatch(fetchHeaderSuccess(response.data));
  } catch (error) {
    dispatch(fetchHeaderFailure(error.message));
  }
};

export const fetchBannerlistData = () => async (dispatch) => {
  dispatch(fetchHeaderRequest());

  try {
    const response = await axios.get(GetBannerlist);
    dispatch(fetchHeaderSuccess(response.data));
  } catch (error) {
    dispatch(fetchHeaderFailure(error.message));
  }
};

export const fetchProductData = () => async (dispatch) => {
  dispatch(fetchProductRequest());

  try {
    const response = await axios.get(ProductList);
    dispatch(fetchProductSuccess(response.data));
  } catch (error) {
    dispatch(fetchProductFailure(error.message));
  }
};
export const fetchStoreCategory = () => async (dispatch) => {
  dispatch(fetchStoreRequest());

  try {
    const response = await axios.get(storeListcategories);
    dispatch(fetchStoreSuccess(response.data));
  } catch (error) {
    dispatch(fetchStoreFailure(error.message));
  }
};

export const EditCategoryData = (id, body) => async (dispatch) => {
  dispatch(CreateStoreRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.put(`${EditCategory}/${id}`, body);
    dispatch(CreateStoreSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(CreateStoreFailure(error.response.data.error));
  }
};

export const DeleteCategoryData = (id, body) => async (dispatch) => {
  dispatch(CreateStoreRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.delete(`${DeleteCategory}/${id}`);
    dispatch(CreateStoreSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(CreateStoreFailure(error.response.data.error));
  }
};
export const AddCategoryData = (id, body) => async (dispatch) => {
  dispatch(CreateStoreRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.post(`${AddCategory}`, body);
    dispatch(CreateStoreSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(CreateStoreFailure(error.response.data.error));
  }
};

export const LoginUserData = (body) => async (dispatch) => {
  dispatch(LoginStoreRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.post(Userlogin, body);
    dispatch(LoginStoreSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(LoginStoreFailure(error.response.data.message));
  }
};
export const CreateUserData = (body) => async (dispatch) => {
  dispatch(RegistionStoreRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.post(CreateUser, body);
    dispatch(RegistionStoreSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(RegistionStoreFailure(error.response.data.message));
  }
};

export const EditUserData = (id, body) => async (dispatch) => {
  dispatch(RegistionStoreRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.put(`${EditUser}/${id}`, body);
    dispatch(RegistionStoreSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(RegistionStoreFailure(error.response.data.message));
  }
};

export const DeleteUserData = (id, body) => async (dispatch) => {
  dispatch(RegistionStoreRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.delete(`${DeleteUser}/${id}`);
    dispatch(RegistionStoreSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(RegistionStoreFailure(error.response.data.message));
  }
};
export const ProductListUserData = (body) => async (dispatch) => {
  dispatch(ProfileRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.get(`${Userprofile}?lang=${body}`);
    dispatch(ProfileSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(ProfileFailure(error.response.data.message));
  }
};

export const EditProductUserData = (body, bodypass) => async (dispatch) => {
  dispatch(EditProductRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.put(`${EditUserprofile}/${body}`, bodypass);
    dispatch(EditProductSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(EditProductFailure(error.response.data.message));
  }
};

export const DeleteProductUserData = (body, bodypass) => async (dispatch) => {
  dispatch(DeleteProductRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.delete(`${DeleteUserprofile}/${body}`);
    dispatch(DeleteProductSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(DeleteProductFailure(error.response.data.message));
  }
};

export const AddProductData = (body, bodypass) => async (dispatch) => {
  dispatch(AddProductRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.post(`${AddProduct}`, bodypass);
    dispatch(AddProductSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(AddProductFailure(error.response.data.message));
  }
};

export const UserListData = (body) => async (dispatch) => {
  dispatch(UserDataRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.get(`${AllUserList}`);
    dispatch(UserDataSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(UserDataFailure(error.response.data.message));
  }
};
export const AdminUserLists = (body) => async (dispatch) => {
  dispatch(AdminDataRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.get(`${AdminUserList}`);
    dispatch(AdminDataSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(AdminDataFailure(error.response.data.message));
  }
};

export const OrderUserList = () => async (dispatch) => {
  dispatch(OrderRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.get(`${Useraddress}`);
    dispatch(OrderSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(OrderFailure(error.response.data.message));
  }
};
export const GetBrandUserById = (body) => async (dispatch) => {
  dispatch(ProductIdRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.get(`${UserBrandid}`);
    dispatch(ProductIdSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(ProductIdFailure(error.response.data.message));
  }
};

export const GetSubBrandUserById = (body) => async (dispatch) => {
  dispatch(SubBrandIdRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.get(`${UserSubBrand}`);
    dispatch(SubBrandIdSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(SubBrandIdFailure(error.response.data.message));
  }
};

export const AddBrandUserById = (body) => async (dispatch) => {
  dispatch(BrandIdRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.post(`${AddBrandid}`, body);
    dispatch(BrandIdSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(BrandIdFailure(error.response.data.message));
  }
};

export const AddSubBrandUserById = (body) => async (dispatch) => {
  dispatch(BrandIdRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.post(`${AddSubBrandlist}`, body);
    dispatch(BrandIdSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(BrandIdFailure(error.response.data.message));
  }
};
export const EditBrandUserById = (id, body) => async (dispatch) => {
  dispatch(BrandIdRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.put(`${EditBrandid}/${id}`, body);
    dispatch(BrandIdSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(BrandIdFailure(error.response.data.message));
  }
};
export const EditSubBrandUserById = (id, body) => async (dispatch) => {
  dispatch(BrandIdRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.put(`${EditSubBrandid}/${id}`, body);
    dispatch(BrandIdSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(BrandIdFailure(error.response.data.message));
  }
};
export const DeleteBrandUserById = (id, body) => async (dispatch) => {
  dispatch(BrandIdRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.delete(`${DeleteBrandid}/${id}`);
    dispatch(BrandIdSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(BrandIdFailure(error.response.data.message));
  }
};
export const DeleteSubBrandUserById = (id, body) => async (dispatch) => {
  dispatch(BrandIdRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.delete(`${DeleteSubBrandid}/${id}`);
    dispatch(BrandIdSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(BrandIdFailure(error.response.data.message));
  }
};
export const AddCardProductById = (body) => async (dispatch) => {
  dispatch(AddCardIdRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.post(AddCardProductid, body);
    dispatch(AddCardIdSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(AddCardIdFailure(error.response.data.message));
  }
};
export const GetAddCardProductById = (body) => async (dispatch) => {
  dispatch(GetAddCardIdRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.get(`${GetAddCardProductcard}/${body}`);
    dispatch(GetAddCardIdSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(GetAddCardIdFailure(error.response.data.message));
  }
};
export const DeleteAddCardProductById = (body) => async (dispatch) => {
  dispatch(DeleteAddCardIdRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.delete(`${DelAddCardProductcard}/${body}`);
    dispatch(DeleteAddCardIdSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(DeleteAddCardIdFailure(error.response.data.message));
  }
};
export const GetstaffListById = (body) => async (dispatch) => {
  dispatch(GetOurStaffRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.get(`${GetStafflist}`);
    dispatch(GetOurStaffSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(GetOurStaffFailure(error.response.data.message));
  }
};
export const GetprofileListById = (id) => async (dispatch) => {
  dispatch(GetProfileRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.get(`${Getprofilelist}/${id}`);
    dispatch(GetProfileSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(GetProfileFailure(error.response.data.message));
  }
};

export const AddEmployeesById = (body) => async (dispatch) => {
  dispatch(AddEmployeeRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.post(`${AddEmployessUser}`, body);
    dispatch(AddEmployeeSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(AddEmployeeFailure(error.response.data.message));
  }
};

export const EditEmployeesById = (id, body) => async (dispatch) => {
  dispatch(AddEmployeeRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.put(`${EditEmployessUser}/${id}`, body);
    dispatch(AddEmployeeSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(AddEmployeeFailure(error.response.data.message));
  }
};

export const DeleteEmployeesById = (id, body) => async (dispatch) => {
  dispatch(AddEmployeeRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.delete(`${DeleteEmployessUser}/${id}`, body);
    dispatch(AddEmployeeSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(AddEmployeeFailure(error.response.data.message));
  }
};

export const GetCouponListById = (id) => async (dispatch) => {
  dispatch(GetCouponsRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.get(`${Getcouponslist}`);
    dispatch(GetCouponsSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(GetCouponsFailure(error.response.data.message));
  }
};

export const GetEventListById = (id) => async (dispatch) => {
  dispatch(GetEventsRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.get(`${GetEventslist}`);
    dispatch(GetEventsSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(GetEventsFailure(error.response.data.message));
  }
};

export const GetBlogsListById = (id) => async (dispatch) => {
  dispatch(GetBlogsRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.get(`${GetBlogslist}`);
    dispatch(GetBlogsSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(GetBlogsFailure(error.response.data.message));
  }
};

export const AddCouponsUserById = (body) => async (dispatch) => {
  dispatch(GetCouponRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.post(`${AddCouponId}`, body);
    dispatch(GetCouponSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(GetCouponFailure(error.response.data.message));
  }
};

export const EditCouponsUserById = (id,body) => async (dispatch) => {
  dispatch(GetCouponRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.put(`${EditCouponId}/${id}`, body);
    dispatch(GetCouponSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(GetCouponFailure(error.response.data.message));
  }
};

export const DeleteCouponsUserById = (id) => async (dispatch) => {
  dispatch(GetCouponRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.delete(`${EditCouponId}/${id}`);
    dispatch(GetCouponSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(GetCouponFailure(error.response.data.message));
  }
};

export const AddEventById = (body) => async (dispatch) => {
  dispatch(AddEventsRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.post(`${AddEventsId}`, body);
    dispatch(AddEventsSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(AddEventsFailure(error.response.data.message));
  }
};
export const EditEventById = (id, body) => async (dispatch) => {
  dispatch(AddEventsRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.put(`${EditEventsId}/${id}`, body);
    dispatch(AddEventsSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(AddEventsFailure(error.response.data.message));
  }
};

export const DeleteEventById = (id) => async (dispatch) => {
  dispatch(AddEventsRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.delete(`${EditEventsId}/${id}`);
    dispatch(AddEventsSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(AddEventsFailure(error.response.data.message));
  }
};

export const AddBlogsById = (body) => async (dispatch) => {
  dispatch(AddBlogsRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.post(`${AddBlogsId}`, body);
    dispatch(AddBlogsSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(AddBlogsFailure(error.response.data.message));
  }
};

export const EditBlogsById = (id,body) => async (dispatch) => {
  dispatch(AddBlogsRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.put(`${EditBlogsId}/${id}`, body);
    dispatch(AddBlogsSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(AddBlogsFailure(error.response.data.message));
  }
};

export const DeleteBlogsById = (id,body) => async (dispatch) => {
  dispatch(AddBlogsRequest());

  try {
    // Send the POST request with the provided body data
    const response = await axios.delete(`${EditBlogsId}/${id}`);
    dispatch(AddBlogsSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(AddBlogsFailure(error.response.data.message));
  }
};