require 'test_helper'

class NovelsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get novels_new_url
    assert_response :success
  end

  test "should get create" do
    get novels_create_url
    assert_response :success
  end

  test "should get index" do
    get novels_index_url
    assert_response :success
  end

  test "should get show" do
    get novels_show_url
    assert_response :success
  end

  test "should get edit" do
    get novels_edit_url
    assert_response :success
  end

  test "should get update" do
    get novels_update_url
    assert_response :success
  end

  test "should get destroy" do
    get novels_destroy_url
    assert_response :success
  end

end
