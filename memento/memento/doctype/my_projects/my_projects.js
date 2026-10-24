// Copyright (c) 2026, Sagar Patil and contributors
// For license information, please see license.txt

frappe.ui.form.on("My Projects", {
	setup(frm) {
		$("span.sidebar-toggle-btn").hide();
		$(".col-lg-2.layout-side-section").hide();
		frm.trigger("update_primary_action");
	},

	refresh(frm) {
		const description_field = frm.get_field("description");
		$(description_field.wrapper).find(".ql-editor").css({
			height: "1000px", // change as needed
			"min-height": "600px",
		});
		description_field.field.editor && field.editor.resize(); // let Ace recalculate

		// const about_field = frm.get_field("about");
		// $(about_field.wrapper).find(".ql-editor").css({
		// 	height: "1000px", // change as needed
		// 	"min-height": "600px",
		// });
		// field.editor && field.editor.resize(); // let Ace recalculate

		const about_field = frm.get_field("about");

		$(about_field.wrapper).find("textarea").css({
			height: "200px",
			"min-height": "400px",
		});

		about_field.editor && field.editor.resize();
	},
});
