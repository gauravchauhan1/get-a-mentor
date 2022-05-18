const fn = () => {
  return function(req, res, next) {
    // the controller function which handles error through catch block
    fn(req, res, next).catch(err => next(err));
  };
};

export default fn;
