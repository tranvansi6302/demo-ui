import http from "../configs/http";

const categoryApi = {
  getAll: () => {
    return http.get("/categories");
  },
};

export default categoryApi;
