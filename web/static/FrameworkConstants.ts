import path = require("path")
export default class FrameworkConstants {
    static LOGIN_SUCCESS_MSG = "You logged into a secure area!"
    static LOGIN_FAILED_PassMSG = "Your password is invalid!"
    static LOGIN_FAILED_UserMSG = "Your username is invalid!"
    static FORM_SUBMITTED_MSG = "Message Submitted!"
    static DOWNLOAD_FOLDER_PATH = path.join(process.cwd(), 'downloads')
    static RESOURCE_FOLDER_PATH = "web/resources/";
}


