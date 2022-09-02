class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :price, :description, :image_url

  def image_url
    if object.image.attached?
      Rails.application.routes.url_helpers.rails_blob_path(object.image, host: "local")
    end
  end

end
