import { toast } from 'react-toastify';

const toastSuccess = (message, config) => toast.success(message, config);
const toastError = (message, config) => toast.error(message, config);
const toastWarring = (message, config) => toast.warn(message, config);

export { toastError, toastSuccess, toastWarring };
