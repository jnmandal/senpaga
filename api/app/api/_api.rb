class API < Grape::API
  format :json

  get do
    {
      api: 'senpaga',
      author: '@jnmandal'
    }
  end
end
