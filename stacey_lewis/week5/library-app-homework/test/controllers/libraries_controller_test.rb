require 'test_helper'

class LibrariesControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get libraries_new_url
    assert_response :success
  end

  test "should get create" do
    get libraries_create_url
    assert_response :success
  end

  test "should get index" do
    get libraries_index_url
    assert_response :success
  end

  test "should get show" do
    get libraries_show_url
    assert_response :success
  end

  test "should get edit" do
    get libraries_edit_url
    assert_response :success
  end

  test "should get update" do
    get libraries_update_url
    assert_response :success
  end

  test "should get destroy" do
    get libraries_destroy_url
    assert_response :success
  end

end
