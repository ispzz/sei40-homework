require 'test_helper'

class FrontendsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get frontends_new_url
    assert_response :success
  end

  test "should get create" do
    get frontends_create_url
    assert_response :success
  end

  test "should get index" do
    get frontends_index_url
    assert_response :success
  end

  test "should get show" do
    get frontends_show_url
    assert_response :success
  end

  test "should get edit" do
    get frontends_edit_url
    assert_response :success
  end

  test "should get update" do
    get frontends_update_url
    assert_response :success
  end

  test "should get destroy" do
    get frontends_destroy_url
    assert_response :success
  end

end
