
import { toast } from "react-toastify";

export const handleError = (error: any) => {
    var err = error.response;
    if(Array.isArray(err?.data.error)) {
        for(let val of err?.data.errors) {
            toast.warning(val.description);
        }
    } else if(typeof err?.data.errors === 'object') {
        for(let e in err?.data.errors) {
            toast.warning(err.data.errors[e]); 
        }
    } else if (err?.data) {
        toast.warning(err.data)
    } else if(err?.status === 401) {
        toast.warning("Please login")
        window.history.pushState({}, "LoginPage", "/login")
    } else if (err) {
        toast.warning(err?.data)
    }
}