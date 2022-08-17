module.exports = [
    {
        type: 'input',
        name: 'AppID',
        required: true,
        validate: function (val) {
            return /^[a-z]{4,8}$/.test(val)
                ? true
                : 'Cannot contain numbers or Chinese';
        },
        message: 'Please Enter Your App ID',
        default: ''
    }
]