module.exports = [
    {
        type: 'input',
        name: 'AppID',
        validate: function (val) {
            return /^[a-zA-Z]+$/.test(val)
                ? true
                : 'Cannot contain numbers or Chinese';
        },
        message: 'Please Enter Your App ID',
        default: ''
    }
]