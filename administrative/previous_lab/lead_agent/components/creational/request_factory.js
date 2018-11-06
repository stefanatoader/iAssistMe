//Factory for request replication and adjustment

function RequestForkWrapper(request,apply_func){
    if (apply_func === undefined) {
        this.request = request;
    }else{
        this.request = apply_func(request)
    }
}

function create(request){
    return new RequestForkWrapper(request).request;
}

module.exports.create = create;