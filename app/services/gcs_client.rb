require 'google/cloud/storage'
require 'yaml' 

class GcsClient
  def initialize
    config = YAML.load_file('config.yml')
    @storage = Google::Cloud::Storage.new(
      project_id: config['development']['google_cloud']['project_id'],
      credentials: "gcs_credentials.json",
      retries: 5
    )
    @bucket = @storage.bucket(config['development']['google_cloud']['bucket_name'])
  end

  def upload_file(file_name, file_type)
    @bucket.create_file StringIO.new(""), file_name
    file = @bucket.file(file_name)

    return file.signed_url(method: 'PUT', content_type: file_type)
  end

  def get_read_url(file_name)
    file = @bucket.file(file_name)

    if (!file) 
      return file_name
    end

    return file.signed_url(method: 'GET')
  end
end