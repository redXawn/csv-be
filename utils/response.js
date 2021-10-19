exports.success = (res, response, message) => {
  return res.status(200).send(
    {
      status: 200,
      message: message || 'Success',
      data: response
    }
  )
}

exports.noAuthorization = (res, message) => {
  return res.status(401).send({
    status: 401,
    message: message || 'No Authorization',
  });
};

exports.notFound = (res, error) => {
  return res.status(404).send(
    {
      status: 404,
      message: `${error} Not Found`
    }
  )
}

exports.badRequest = (res, messageIndo, messageEng) => {
  return res.status(400).send(
    {
      status: 400,
      message: {
        id: messageIndo,
        en: messageEng
      }
    }
  )
}

exports.failed = (res, error) => {
  console.log('log error', error)
  return res.status(500).send(
    {
      status: 500,
      message: 'Failed',
      error: error
    }
  )
}
