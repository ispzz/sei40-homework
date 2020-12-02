class ProbesController < ApplicationController
  #CREATE
  def new
    @probe = Probe.new
  end

  def create
    Probe.create(
      name: params[:probe][:name],
      year_launched: params[:probe][:year_launched],
      mission: params[:probe][:mission],
      mission_outcome: params[:probe][:mission_outcome],
      probe_status: params[:probe][:probe_status],
      country: params[:probe][:country],
      image: params[:probe][:image]
    )

    redirect_to probes_path
  end


  #READ
  def index
    @probes = Probe.all
  end

  def show
    @probe = Probe.find params[:id]
    @outcome = @probe.mission_outcome ? 'Success' : 'Failure'
    @status = @probe.probe_status ? 'Functioning' : 'No longer functioning'
  end

  #UPDATE
  def edit
    @probe = Probe.find params[:id]
  end

  def update
    probe = Probe.find params[:id]
    probe.update(
      name: params[:probe][:name],
      year_launched: params[:probe][:year_launched],
      mission: params[:probe][:mission],
      mission_outcome: params[:probe][:mission_outcome],
      probe_status: params[:probe][:probe_status],
      country: params[:probe][:country],
      image: params[:probe][:image]
    )

    redirect_to probe_path(probe.id)
  end

  #DELETE
  def delete
    Probe.destroy(params[:id])

    redirect_to probes_path
  end
end
