import React from 'react'

export default function ControlSidebar() {
    return (
      <aside className="control-sidebar control-sidebar-dark" style={{top: "0px", height: "324px", display: "block"}}>

      <div
        className="p-3 control-sidebar-content os-host os-theme-light os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition os-host-overflow os-host-overflow-y"
        style={{height:"324px"}}>
        <div className="os-resize-observer-host observed">
          <div className="os-resize-observer" style={{right:"aouto",left:"0px"}}></div>
        </div>
        <div className="os-size-auto-observer observed" style={{height: "calc(100% + 1px)",float: "left"}}>
          <div className="os-resize-observer"></div>
        </div>
        <div className="os-content-glue" style={{margin: "-16px", width: "249px", height: "323px"}}></div>
        <div className="os-padding">
          <div className="os-viewport os-viewport-native-scrollbars-invisible" style={{overflowY: "scroll"}}>
            <div className="os-content" style={{padding: "16px", height: "100%", width: "100%"}}>
              <h5>Customize AdminLTE</h5>
              <hr className="mb-2"/>
              <div className="mb-4"><input type="checkbox" value="1" className="mr-1"/><span>Dark Mode</span></div>
              <h6>Header Options</h6>
              <div className="mb-1"><input type="checkbox" value="1" className="mr-1"/><span>Fixed</span></div>
              <div className="mb-1"><input type="checkbox" value="1" className="mr-1"/><span>Dropdown Legacy Offset</span></div>
              <div className="mb-4"><input type="checkbox" value="1" className="mr-1"/><span>No border</span></div>
              <h6>Sidebar Options</h6>
              <div className="mb-1"><input type="checkbox" value="1" className="mr-1"/><span>Collapsed</span></div>
              <div className="mb-1"><input type="checkbox" value="1" checked="checked" className="mr-1"/><span>Fixed</span></div>
              <div className="mb-1"><input type="checkbox" value="1" checked="checked" className="mr-1"/><span>Sidebar Mini</span>
              </div>
              <div className="mb-1"><input type="checkbox" value="1" className="mr-1"/><span>Sidebar Mini MD</span></div>
              <div className="mb-1"><input type="checkbox" value="1" className="mr-1"/><span>Sidebar Mini XS</span></div>
              <div className="mb-1"><input type="checkbox" value="1" className="mr-1"/><span>Nav Flat Style</span></div>
              <div className="mb-1"><input type="checkbox" value="1" className="mr-1"/><span>Nav Legacy Style</span></div>
              <div className="mb-1"><input type="checkbox" value="1" className="mr-1"/><span>Nav Compact</span></div>
              <div className="mb-1"><input type="checkbox" value="1" className="mr-1"/><span>Nav Child Indent</span></div>
              <div className="mb-1"><input type="checkbox" value="1" className="mr-1"/><span>Nav Child Hide on Collapse</span></div>
              <div className="mb-4"><input type="checkbox" value="1" className="mr-1"/><span>Disable Hover/Focus Auto-Expand</span>
              </div>
              <h6>Footer Options</h6>
              <div className="mb-4"><input type="checkbox" value="1" className="mr-1"/><span>Fixed</span></div>
              <h6>Small Text Options</h6>
              <div className="mb-1"><input type="checkbox" value="1" className="mr-1"/><span>Body</span></div>
              <div className="mb-1"><input type="checkbox" value="1" className="mr-1"/><span>Navbar</span></div>
              <div className="mb-1"><input type="checkbox" value="1" className="mr-1"/><span>Brand</span></div>
              <div className="mb-1"><input type="checkbox" value="1" className="mr-1"/><span>Sidebar Nav</span></div>
              <div className="mb-4"><input type="checkbox" value="1" className="mr-1"/><span>Footer</span></div>
              <h6>Navbar Variants</h6>
              <div className="d-flex"><select className="custom-select mb-3 text-light border-0 bg-white">
                  <option className="bg-primary">Primary</option>
                  <option className="bg-secondary">Secondary</option>
                  <option className="bg-info">Info</option>
                  <option className="bg-success">Success</option>
                  <option className="bg-danger">Danger</option>
                  <option className="bg-indigo">Indigo</option>
                  <option className="bg-purple">Purple</option>
                  <option className="bg-pink">Pink</option>
                  <option className="bg-navy">Navy</option>
                  <option className="bg-lightblue">Lightblue</option>
                  <option className="bg-teal">Teal</option>
                  <option className="bg-cyan">Cyan</option>
                  <option className="bg-dark">Dark</option>
                  <option className="bg-gray-dark">Gray dark</option>
                  <option className="bg-gray">Gray</option>
                  <option className="bg-light">Light</option>
                  <option className="bg-warning">Warning</option>
                  <option className="bg-white">White</option>
                  <option className="bg-orange">Orange</option>
                </select></div>
              <h6>Accent Color Variants</h6>
              <div className="d-flex"></div><select className="custom-select mb-3 border-0">
                <option>None Selected</option>
                <option className="bg-primary">Primary</option>
                <option className="bg-warning">Warning</option>
                <option className="bg-info">Info</option>
                <option className="bg-danger">Danger</option>
                <option className="bg-success">Success</option>
                <option className="bg-indigo">Indigo</option>
                <option className="bg-lightblue">Lightblue</option>
                <option className="bg-navy">Navy</option>
                <option className="bg-purple">Purple</option>
                <option className="bg-fuchsia">Fuchsia</option>
                <option className="bg-pink">Pink</option>
                <option className="bg-maroon">Maroon</option>
                <option className="bg-orange">Orange</option>
                <option className="bg-lime">Lime</option>
                <option className="bg-teal">Teal</option>
                <option className="bg-olive">Olive</option>
              </select>
              <h6>Dark Sidebar Variants</h6>
              <div className="d-flex"></div><select className="custom-select mb-3 text-light border-0 bg-primary">
                <option>None Selected</option>
                <option className="bg-primary">Primary</option>
                <option className="bg-warning">Warning</option>
                <option className="bg-info">Info</option>
                <option className="bg-danger">Danger</option>
                <option className="bg-success">Success</option>
                <option className="bg-indigo">Indigo</option>
                <option className="bg-lightblue">Lightblue</option>
                <option className="bg-navy">Navy</option>
                <option className="bg-purple">Purple</option>
                <option className="bg-fuchsia">Fuchsia</option>
                <option className="bg-pink">Pink</option>
                <option className="bg-maroon">Maroon</option>
                <option className="bg-orange">Orange</option>
                <option className="bg-lime">Lime</option>
                <option className="bg-teal">Teal</option>
                <option className="bg-olive">Olive</option>
              </select>
              <h6>Light Sidebar Variants</h6>
              <div className="d-flex"></div><select className="custom-select mb-3 border-0">
                <option>None Selected</option>
                <option className="bg-primary">Primary</option>
                <option className="bg-warning">Warning</option>
                <option className="bg-info">Info</option>
                <option className="bg-danger">Danger</option>
                <option className="bg-success">Success</option>
                <option className="bg-indigo">Indigo</option>
                <option className="bg-lightblue">Lightblue</option>
                <option className="bg-navy">Navy</option>
                <option className="bg-purple">Purple</option>
                <option className="bg-fuchsia">Fuchsia</option>
                <option className="bg-pink">Pink</option>
                <option className="bg-maroon">Maroon</option>
                <option className="bg-orange">Orange</option>
                <option className="bg-lime">Lime</option>
                <option className="bg-teal">Teal</option>
                <option className="bg-olive">Olive</option>
              </select>
              <h6>Brand Logo Variants</h6>
              <div className="d-flex"></div><select className="custom-select mb-3 border-0">
                <option>None Selected</option>
                <option className="bg-primary">Primary</option>
                <option className="bg-secondary">Secondary</option>
                <option className="bg-info">Info</option>
                <option className="bg-success">Success</option>
                <option className="bg-danger">Danger</option>
                <option className="bg-indigo">Indigo</option>
                <option className="bg-purple">Purple</option>
                <option className="bg-pink">Pink</option>
                <option className="bg-navy">Navy</option>
                <option className="bg-lightblue">Lightblue</option>
                <option className="bg-teal">Teal</option>
                <option className="bg-cyan">Cyan</option>
                <option className="bg-dark">Dark</option>
                <option className="bg-gray-dark">Gray dark</option>
                <option className="bg-gray">Gray</option>
                <option className="bg-light">Light</option>
                <option className="bg-warning">Warning</option>
                <option className="bg-white">White</option>
                <option className="bg-orange">Orange</option><a href="/#">clear</a>
              </select>
            </div>
          </div>
        </div>
        <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden">
          <div className="os-scrollbar-track">
            <div className="os-scrollbar-handle" style={{transform: "translate(0px, 0px)", width: "100%"}}></div>
          </div>
        </div>
        <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden">
          <div className="os-scrollbar-track">
            <div className="os-scrollbar-handle" style={{transform: "translate(0px, 0px)", height: "25.1163%"}}></div>
          </div>
        </div>
        <div className="os-scrollbar-corner"></div>
      </div>
    </aside>
    )
}
