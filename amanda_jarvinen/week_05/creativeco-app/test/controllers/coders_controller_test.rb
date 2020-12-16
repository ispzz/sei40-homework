require 'test_helper'

class CodersControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get coders_new_url
    assert_response :success
  end

  test "should get create" do
    get coders_create_url
    assert_response :success
  end

  test "should get index" do
    get coders_index_url
    assert_response :success
  end

  test "should get show" do
    get coders_show_url
    assert_response :success
  end

  test "should get edit" do
    get coders_edit_url
    assert_response :success
  end

  test "should get update" do
    get coders_update_url
    assert_response :success
  end

  test "should get destroy" do
    get coders_destroy_url
    assert_response :success
  end

end
