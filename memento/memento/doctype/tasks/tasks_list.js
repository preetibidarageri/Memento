// Copyright (c) 2026, Sagar Patil and contributors
// For license information, please see license.txt

frappe.listview_settings["Tasks"] = {
	refresh: function (listview) {
		// frm.trigger("onload_post_render");
		$("span.sidebar-toggle-btn").hide();
		$(".col-lg-2.layout-side-section").hide();
	},
};
