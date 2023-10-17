/*Перехватывает и обрабатывает все ошибки*/

import axios from "axios";
import {ElNotification} from "element-plus";

let repeated = {}
axios.interceptors.response.use(resp => resp
    , err => {
        ElNotification({
            message: err.message,
            type: 'error'
        })
        return err
    }
)

