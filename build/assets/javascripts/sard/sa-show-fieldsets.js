$(document).ready(function(){$("#scheduled_true").show(),$('input:radio[name="type"]').click(function(){var i=$(this).attr("data-targets");$('div [id="scheduled_true"]').hide(),$("#"+i).show()})}),$(document).ready(function(){$("#repeatselector").change(function(){$(".repeats").hide(),$("#"+$(this).val()).show()})}),$(document).ready(function(){({init:function(){this.applyConditionalRequired(),this.bindUIActions()},bindUIActions:function(){$("input[type='radio'], input[type='checkbox']").on("change",this.applyConditionalRequired)},applyConditionalRequired:function(){$(".require-if-active").each(function(){var i=$(this);$(i.data("require-pair")).is(":checked")?i.prop("required",!0):i.prop("required",!1)})}}).init()});