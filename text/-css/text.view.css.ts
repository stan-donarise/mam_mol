namespace $ { $mol_style_attach( "mol/text/text.view.css",
 "[mol_text] {\n\tline-height: 1.5em;\n\tbox-sizing: border-box;\n\tmax-width: 60rem;\n\tborder-radius: var(--mol_gap_round);\n\twhite-space: pre-line;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex: 0 0 auto;\n\ttab-size: 4;\n}\n\n[mol_text_paragraph] {\n\tpadding: var(--mol_gap_text);\n\toverflow: auto;\n\tmax-width: 100%;\n\tdisplay: block;\n}\n\n[mol_text_span] {\n\tdisplay: inline;\n}\n\n[mol_text_string] {\n\tdisplay: inline;\n\tflex: 0 1 auto;\n}\n\n[mol_text_quote] {\n\tbox-shadow: inset 1px 0 0px 0px var(--mol_theme_line);\n}\n\n[mol_text_header] {\n\tdisplay: block;\n\ttext-shadow: 0 0;\n\tfont-weight: normal;\n}\n\n* + [mol_text_header] {\n\tmargin-top: 0.75rem;\n}\n\nh1[mol_text_header] {\n\tfont-size: 1.5rem;\n}\n\nh2[mol_text_header] {\n\tfont-size: 1.5rem;\n\tfont-style: italic;\n}\n\nh3[mol_text_header] {\n\tfont-size: 1.25rem;\n}\n\nh4[mol_text_header] {\n\tfont-size: 1.25em;\n\tfont-style: italic;\n}\n\nh5[mol_text_header] {\n\tfont-size: 1rem;\n}\n\nh6[mol_text_header] {\n\tfont-size: 1rem;\n\tfont-style: italic;\n}\n\n[mol_text_list] {\n\tpadding-left: 1.5rem;\n}\n\n[mol_text_list_paragraph] {\n\tdisplay: list-item;\n}\n\n[mol_text_list_paragraph]::before {\n\tcontent: '•';\n\twidth: 1.5rem;\n\tdisplay: inline-block;\n\tposition: absolute;\n\tmargin-left: -1.5rem;\n}\n\n[mol_text_table_cell] {\n\twidth: auto;\n\tdisplay: table-cell;\n\tvertical-align: baseline;\n\tpadding: 0;\n\tborder-radius: 0;\n}\n\n[mol_text_link_http],\n[mol_text_link] {\n\tpadding: 0;\n}\n\n[mol_text_image] {\n\tobject-fit: contain;\n\tobject-position: center;\n\tdisplay: inline;\n\taspect-ratio: auto;\n\tmax-height: 100vh;\n}\n[mol_text_image]:not([mol_view_error]) {\n\tzoom: 4;\n\tborder-radius: .05rem;\n\tmax-height: 20vh;\n}\n[mol_text_image_fallback_link] {\n\tpadding: 0;\n\tfont-size: .25em;\n\tborder-radius: .05rem;\n}\n[mol_text_image_fallback_image] {\n\tobject-fit: contain;\n\tobject-position: center;\n\tmax-height: 20vh;\n\tborder-radius: .05rem;\n}\n\n[mol_text_code_line] {\n\tdisplay: inline-block;\n}\n\n[mol_text_type=\"strong\"] {\n\ttext-shadow: 0 0;\n}\n\n[mol_text_type=\"emphasis\"] {\n\tfont-style: italic;\n}\n\n[mol_text_type=\"strike\"] {\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_text_type=\"remark\"] {\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_text_type=\"quote\"] {\n\tfont-style: italic;\n}\n\n[mol_text_code_copy] {\n\talign-self: flex-start;\n\tjustify-self: flex-start;\n\tmargin-left: -1px;\n}\n\n[mol_text_code_copy_icon] {\n\tbackground-color: var(--mol_theme_card);\n}\n"
) }