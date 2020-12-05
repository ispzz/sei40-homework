require 'test_helper'

class BackendsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get backends_new_url
    assert_response :success
  end

  test "should get create" do
    get backends_create_url
    assert_response :success
  end

  test "should get index" do
    get backends_index_url
    assert_response :success
  end

  test "should get show" do
    get backends_show_url
    assert_response :success
  end

  test "should get edit" do
    get backends_edit_url
    assert_response :success
  end

  test "should get update" do
    get backends_update_url
    assert_response :success
  end

  test "should get destroy" do
    get backends_destroy_url
    assert_response :success
  end

end
