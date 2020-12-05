require 'test_helper'

class CreationsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get creations_new_url
    assert_response :success
  end

  test "should get create" do
    get creations_create_url
    assert_response :success
  end

  test "should get index" do
    get creations_index_url
    assert_response :success
  end

  test "should get show" do
    get creations_show_url
    assert_response :success
  end

  test "should get edit" do
    get creations_edit_url
    assert_response :success
  end

  test "should get update" do
    get creations_update_url
    assert_response :success
  end

  test "should get destroy" do
    get creations_destroy_url
    assert_response :success
  end

end
