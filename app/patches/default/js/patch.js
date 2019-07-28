var CABLES=CABLES||{};CABLES.exportedPatch={"settings":{"opExample":[],"isPublic":false},"ops":[{"opId":"b0472a1d-db16-4ba6-8787-f300fbdc77bb","objName":"Ops.Gl.MainLoop","id":"b0554b84-b0b8-47db-a617-837fa376ad1b","uiAttribs":{"translate":{"x":156,"y":-200},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"FPS Limit","value":0},{"name":"Reduce FPS loading","value":false},{"name":"Clear","value":true},{"name":"ClearAlpha","value":true},{"name":"Fullscreen Button","value":false},{"name":"Active","value":true},{"name":"Hires Displays","value":false}],"portsOut":[{"name":"trigger"},{"name":"width","value":685},{"name":"height","value":437}]},{"opId":"85ae5cfa-5eca-4dd8-8b30-850ac34f7cd5","objName":"Ops.Gl.Shader.BasicMaterial","id":"2967b2d4-8d3a-41e9-8e4b-72d41289dab8","uiAttribs":{"translate":{"x":-288,"y":680},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"render","links":[{"portIn":"render","portOut":"trigger 0","objIn":"2967b2d4-8d3a-41e9-8e4b-72d41289dab8","objOut":"12cb3df4-d426-4d47-8f3d-7e140b27ab38"}]},{"name":"r","value":1},{"name":"g","value":1},{"name":"b","value":1},{"name":"a","value":1},{"name":"texture","value":0},{"name":"textureOpacity","value":0},{"name":"colorizeTexture","value":false},{"name":"billboard","value":false},{"name":"Opacity TexCoords Transform","value":false},{"name":"preMultiplied alpha","value":false},{"name":"diffuseRepeatX","value":1},{"name":"diffuseRepeatY","value":1},{"name":"Tex Offset X","value":0},{"name":"Tex Offset Y","value":0}],"portsOut":[{"name":"trigger"},{"name":"shader"}]},{"opId":"50e7f565-0cdb-47ca-912b-87c04e2f00e3","objName":"Ops.Gl.Matrix.Scale","id":"06a764e9-3580-4fad-88fe-3c2d730d250f","uiAttribs":{"translate":{"x":156,"y":-80},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"render","links":[{"portIn":"render","portOut":"trigger","objIn":"06a764e9-3580-4fad-88fe-3c2d730d250f","objOut":"5858f38e-6306-4730-aaf9-81d7d06bd9b1"}]},{"name":"scale","value":1.8}],"portsOut":[{"name":"trigger"}]},{"opId":"f86a4a07-00ee-4f68-8839-e02d51d1cd2f","objName":"Ops.Gl.Shader.PointMaterial","id":"a8571c9e-f34e-41c9-849a-97e580210de6","uiAttribs":{"translate":{"x":36,"y":680},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"render","links":[{"portIn":"render","portOut":"trigger 1","objIn":"a8571c9e-f34e-41c9-849a-97e580210de6","objOut":"12cb3df4-d426-4d47-8f3d-7e140b27ab38"}]},{"name":"PointSize","value":9.36},{"name":"Random Size","value":3},{"name":"Round","value":true},{"name":"Scale by Distance","value":false},{"name":"r","value":1},{"name":"g","value":1},{"name":"b","value":1},{"name":"a","value":1},{"name":"preMultiplied alpha","value":false},{"name":"Vertex Colors","value":false},{"name":"texture","value":0},{"name":"Texture Mask","value":0},{"name":"colorizeTexture","value":false},{"name":"texture Lookup","value":false}],"portsOut":[{"name":"trigger"},{"name":"shader"}]},{"opId":"85ae5cfa-5eca-4dd8-8b30-850ac34f7cd5","objName":"Ops.Gl.Shader.BasicMaterial","id":"5858f38e-6306-4730-aaf9-81d7d06bd9b1","uiAttribs":{"translate":{"x":156,"y":-140},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"render","links":[{"portIn":"render","portOut":"trigger","objIn":"5858f38e-6306-4730-aaf9-81d7d06bd9b1","objOut":"b0554b84-b0b8-47db-a617-837fa376ad1b"}]},{"name":"r","value":1},{"name":"g","value":1},{"name":"b","value":1},{"name":"a","value":1},{"name":"texture","value":0},{"name":"textureOpacity","value":0},{"name":"colorizeTexture","value":false},{"name":"billboard","value":false},{"name":"Opacity TexCoords Transform","value":false},{"name":"preMultiplied alpha","value":false},{"name":"diffuseRepeatX","value":1},{"name":"diffuseRepeatY","value":1},{"name":"Tex Offset X","value":0},{"name":"Tex Offset Y","value":0}],"portsOut":[{"name":"trigger"},{"name":"shader"}]},{"opId":"e5d64a7d-b161-4f85-907e-e10a34691733","objName":"Ops.Gl.Shader.WireframeMaterial","id":"fc247d5a-750c-4c20-af56-3ac810ea2102","uiAttribs":{"error":null,"translate":{"x":336,"y":680},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"render","links":[{"portIn":"render","portOut":"trigger 2","objIn":"fc247d5a-750c-4c20-af56-3ac810ea2102","objOut":"12cb3df4-d426-4d47-8f3d-7e140b27ab38"}]},{"name":"enable depth testing","value":true},{"name":"fill","value":true},{"name":"width","value":0.368},{"name":"opacity","value":1},{"name":"diffuse r","value":1},{"name":"diffuse g","value":1},{"name":"diffuse b","value":1},{"name":"Fill R","value":0},{"name":"Fill G","value":0},{"name":"Fill B","value":0}],"portsOut":[{"name":"trigger"}]},{"opId":"b6d933cf-1ef8-41d6-95c1-593be0b4be90","objName":"Ops.Gl.ShaderEffects.ExplodeDividedMesh","id":"5ffbbbce-838e-43bc-80e5-b238bacb47c0","uiAttribs":{"translate":{"x":600,"y":840},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"render","links":[{"portIn":"render","portOut":"trigger","objIn":"5ffbbbce-838e-43bc-80e5-b238bacb47c0","objOut":"0c5e3973-9b86-426d-ae21-5aa3654cec11"}]},{"name":"Distance","value":67.41},{"name":"Absolute","value":true},{"name":"add x","value":0},{"name":"add y","value":0},{"name":"add z","value":0.01},{"name":"mul x","value":1},{"name":"mul y","value":1},{"name":"mul z","value":1},{"name":"x","links":[{"portIn":"x","portOut":"X","objIn":"5ffbbbce-838e-43bc-80e5-b238bacb47c0","objOut":"c6f6243a-5f85-4b60-9401-f063109a242d"}]},{"name":"y","value":0},{"name":"z","value":0},{"name":"Size","value":0.64}],"portsOut":[{"name":"trigger"}]},{"opId":"40fa6f13-ee0e-4386-a86b-711e1fbcf1bc","objName":"Ops.Gl.RenderGeometry","id":"882e2209-5092-48e7-b70b-25db18dbcfe3","uiAttribs":{"translate":{"x":600,"y":880},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"render","links":[{"portIn":"render","portOut":"trigger","objIn":"882e2209-5092-48e7-b70b-25db18dbcfe3","objOut":"5ffbbbce-838e-43bc-80e5-b238bacb47c0"}]},{"name":"Geometry","links":[{"portIn":"Geometry","portOut":"Result","objIn":"882e2209-5092-48e7-b70b-25db18dbcfe3","objOut":"eefc4a4e-f9c7-40bf-b28a-98c1c23902ec"}]},{"name":"Update All","value":true},{"name":"Update Face Indices","value":false},{"name":"Update Vertices","value":false},{"name":"Update Texcoords","value":false},{"name":"Vertex Numbers","value":true}],"portsOut":[{"name":"trigger","value":0}]},{"opId":"b0b2430c-5206-4d1f-a0a6-bc5d79a29027","objName":"Ops.Gl.Geometry.GeometryUnIndex","id":"eefc4a4e-f9c7-40bf-b28a-98c1c23902ec","uiAttribs":{"translate":{"x":900,"y":740},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"Geometry","links":[{"portIn":"Geometry","portOut":"Geometry","objIn":"eefc4a4e-f9c7-40bf-b28a-98c1c23902ec","objOut":"10c199bf-419d-4dbf-bbb5-fbdf8df21e19"}]}],"portsOut":[{"name":"Result"}]},{"opId":"d53b5d7b-99b5-420e-b5a1-2d7c2c1f1ebb","objName":"Ops.Gl.Meshes.CablesLogo","id":"26d273e7-10c6-49cf-af2d-848c1140baa7","uiAttribs":{"translate":{"x":-288,"y":740},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"render","links":[{"portIn":"render","portOut":"trigger","objIn":"26d273e7-10c6-49cf-af2d-848c1140baa7","objOut":"2967b2d4-8d3a-41e9-8e4b-72d41289dab8"}]},{"name":"Scale","value":1},{"name":"Draw","value":true}],"portsOut":[{"name":"trigger","value":0},{"name":"Geometry"}]},{"opId":"d53b5d7b-99b5-420e-b5a1-2d7c2c1f1ebb","objName":"Ops.Gl.Meshes.CablesLogo","id":"6910fe43-5666-4735-bc2a-6b7075d1de7d","uiAttribs":{"translate":{"x":36,"y":720},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"render","links":[{"portIn":"render","portOut":"trigger","objIn":"6910fe43-5666-4735-bc2a-6b7075d1de7d","objOut":"a8571c9e-f34e-41c9-849a-97e580210de6"}]},{"name":"Scale","value":1},{"name":"Draw","value":true}],"portsOut":[{"name":"trigger","value":0},{"name":"Geometry"}]},{"opId":"d53b5d7b-99b5-420e-b5a1-2d7c2c1f1ebb","objName":"Ops.Gl.Meshes.CablesLogo","id":"d936dd79-7e6c-420f-8d7d-07c1b68b165e","uiAttribs":{"translate":{"x":336,"y":720},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"render","links":[{"portIn":"render","portOut":"trigger","objIn":"d936dd79-7e6c-420f-8d7d-07c1b68b165e","objOut":"fc247d5a-750c-4c20-af56-3ac810ea2102"}]},{"name":"Scale","value":1},{"name":"Draw","value":true}],"portsOut":[{"name":"trigger","value":0},{"name":"Geometry"}]},{"opId":"d53b5d7b-99b5-420e-b5a1-2d7c2c1f1ebb","objName":"Ops.Gl.Meshes.CablesLogo","id":"10c199bf-419d-4dbf-bbb5-fbdf8df21e19","uiAttribs":{"translate":{"x":888,"y":700},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"render","links":[{"portIn":"render","portOut":"trigger","objIn":"10c199bf-419d-4dbf-bbb5-fbdf8df21e19","objOut":"0c5e3973-9b86-426d-ae21-5aa3654cec11"}]},{"name":"Scale","value":1},{"name":"Draw","value":false}],"portsOut":[{"name":"trigger","value":0},{"name":"Geometry"}]},{"opId":"7857ee9e-6d60-4c30-9bc0-dfdddf2b47ad","objName":"Ops.Gl.Shader.MatCapMaterialNew","id":"0c5e3973-9b86-426d-ae21-5aa3654cec11","uiAttribs":{"translate":{"x":600,"y":700},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"render","links":[{"portIn":"render","portOut":"trigger 3","objIn":"0c5e3973-9b86-426d-ae21-5aa3654cec11","objOut":"12cb3df4-d426-4d47-8f3d-7e140b27ab38"}]},{"name":"MatCap","links":[{"portIn":"MatCap","portOut":"texture_out","objIn":"0c5e3973-9b86-426d-ae21-5aa3654cec11","objOut":"946ffe49-dd08-4b45-9108-fb1af4ee2b74"}]},{"name":"Diffuse","value":0},{"name":"Normal","value":0},{"name":"Specular","value":0},{"name":"Specular MatCap","value":0},{"name":"AO Texture","value":0},{"name":"r","value":1},{"name":"g","value":1},{"name":"b","value":1},{"name":"Opacity","value":1},{"name":"AO Intensity","value":1},{"name":"Repeat X","value":1},{"name":"Repeat Y","value":1},{"name":"calc normal tangents","value":true},{"name":"projectCoords","value":"no"},{"name":"Screen Space Normals","value":false}],"portsOut":[{"name":"trigger"},{"name":"Shader"}]},{"opId":"59b94270-0364-4c0f-a9fc-ba2561696a23","objName":"Ops.Gl.Textures.ColorTexture","id":"946ffe49-dd08-4b45-9108-fb1af4ee2b74","uiAttribs":{"translate":{"x":612,"y":660},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"r","value":1},{"name":"g","value":1},{"name":"b","value":1},{"name":"a","value":1}],"portsOut":[{"name":"texture_out"}]},{"opId":"73c892c9-3e81-4ddc-952a-fbe6bf00ef2c","objName":"Ops.Trigger.TimedSequence","id":"12cb3df4-d426-4d47-8f3d-7e140b27ab38","uiAttribs":{"translate":{"x":156,"y":120},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"exe","links":[{"portIn":"exe","portOut":"trigger","objIn":"12cb3df4-d426-4d47-8f3d-7e140b27ab38","objOut":"06a764e9-3580-4fad-88fe-3c2d730d250f"}]},{"name":"current","links":[{"portIn":"current","portOut":"result","objIn":"12cb3df4-d426-4d47-8f3d-7e140b27ab38","objOut":"7a1d1e01-8272-4fa2-8a1c-42a6ec7a85b9"}]},{"name":"overwriteTime","value":false},{"name":"ignoreInSubPatch","value":false}],"portsOut":[{"name":"triggerAlways"},{"name":"Names"},{"name":"currentKeyTime","value":0},{"name":"Current","value":4},{"name":"trigger 0"},{"name":"trigger 1"},{"name":"trigger 2"},{"name":"trigger 3"},{"name":"trigger 4"},{"name":"trigger 5"},{"name":"trigger 6"},{"name":"trigger 7"},{"name":"trigger 8","value":0},{"name":"trigger 9","value":0},{"name":"trigger 10","value":0},{"name":"trigger 11","value":0},{"name":"trigger 12","value":0},{"name":"trigger 13","value":0},{"name":"trigger 14","value":0},{"name":"trigger 15","value":0},{"name":"trigger 16","value":0},{"name":"trigger 17","value":0},{"name":"trigger 18","value":0},{"name":"trigger 19","value":0},{"name":"trigger 20","value":0},{"name":"trigger 21","value":0},{"name":"trigger 22","value":0},{"name":"trigger 23","value":0},{"name":"trigger 24","value":0},{"name":"trigger 25","value":0},{"name":"trigger 26","value":0},{"name":"trigger 27","value":0},{"name":"trigger 28","value":0},{"name":"trigger 29","value":0},{"name":"trigger 30","value":0},{"name":"trigger 31","value":0}]},{"opId":"e640619f-235c-4543-bbf8-b358e0283180","objName":"Ops.Trigger.TriggerCounter","id":"884a4fd4-6753-49db-a6a9-95766bf1503c","uiAttribs":{"translate":{"x":444,"y":-80},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"exe","links":[{"portIn":"exe","portOut":"trigger","objIn":"884a4fd4-6753-49db-a6a9-95766bf1503c","objOut":"5f802e61-8267-473d-b971-e8e43be6ab16"}]},{"name":"reset","value":0}],"portsOut":[{"name":"trigger","value":0},{"name":"timesTriggered"}]},{"opId":"3e9bae10-38af-4e36-9fcc-35faeeaf57f8","objName":"Ops.Trigger.Interval","id":"5f802e61-8267-473d-b971-e8e43be6ab16","uiAttribs":{"translate":{"x":444,"y":-180},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"interval","value":222},{"name":"Active","value":true}],"portsOut":[{"name":"trigger"}]},{"opId":"ebc13b25-3705-4265-8f06-5f985b6a7bb1","objName":"Ops.Math.Modulo","id":"7a1d1e01-8272-4fa2-8a1c-42a6ec7a85b9","uiAttribs":{"translate":{"x":240,"y":40},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"number1","links":[{"portIn":"number1","portOut":"timesTriggered","objIn":"7a1d1e01-8272-4fa2-8a1c-42a6ec7a85b9","objOut":"884a4fd4-6753-49db-a6a9-95766bf1503c"}]},{"name":"number2","value":8},{"name":"pingpong","value":false}],"portsOut":[{"name":"result"}]},{"opId":"d01fa820-396c-4cb5-9d78-6b14762852af","objName":"Ops.Gl.Render2Texture","id":"fb112f99-a94f-4867-949a-6d66db26ac16","uiAttribs":{"translate":{"x":1512,"y":800},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"render","links":[{"portIn":"render","portOut":"trigger 2","objIn":"fb112f99-a94f-4867-949a-6d66db26ac16","objOut":"0b355a1d-d15b-414c-8139-5e36a83c4e86"}]},{"name":"use viewport size","value":true},{"name":"texture width","value":685},{"name":"texture height","value":437},{"name":"filter","value":"linear"},{"name":"MSAA","value":"none"},{"name":"HDR","value":false},{"name":"Depth","value":true},{"name":"Clear","value":true}],"portsOut":[{"name":"trigger"},{"name":"texture"},{"name":"textureDepth"}]},{"opId":"85ae5cfa-5eca-4dd8-8b30-850ac34f7cd5","objName":"Ops.Gl.Shader.BasicMaterial","id":"b7374c72-7f94-4988-903d-ae847ea59dc3","uiAttribs":{"translate":{"x":1512,"y":920},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"render","links":[{"portIn":"render","portOut":"trigger","objIn":"b7374c72-7f94-4988-903d-ae847ea59dc3","objOut":"fb112f99-a94f-4867-949a-6d66db26ac16"}]},{"name":"r","value":1},{"name":"g","value":1},{"name":"b","value":1},{"name":"a","value":1},{"name":"texture","value":0},{"name":"textureOpacity","value":0},{"name":"colorizeTexture","value":false},{"name":"billboard","value":false},{"name":"Opacity TexCoords Transform","value":false},{"name":"preMultiplied alpha","value":false},{"name":"diffuseRepeatX","value":1},{"name":"diffuseRepeatY","value":1},{"name":"Tex Offset X","value":0},{"name":"Tex Offset Y","value":0}],"portsOut":[{"name":"trigger"},{"name":"shader"}]},{"opId":"d53b5d7b-99b5-420e-b5a1-2d7c2c1f1ebb","objName":"Ops.Gl.Meshes.CablesLogo","id":"0ac3294d-056e-4319-b01f-9f295f7ae80b","uiAttribs":{"translate":{"x":1512,"y":980},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"render","links":[{"portIn":"render","portOut":"trigger","objIn":"0ac3294d-056e-4319-b01f-9f295f7ae80b","objOut":"b7374c72-7f94-4988-903d-ae847ea59dc3"}]},{"name":"Scale","value":1},{"name":"Draw","value":true}],"portsOut":[{"name":"trigger","value":0},{"name":"Geometry"}]},{"opId":"a466bc1f-06e9-4595-8849-bffb9fe22f99","objName":"Ops.Sequence","id":"0b355a1d-d15b-414c-8139-5e36a83c4e86","uiAttribs":{"translate":{"x":1536,"y":680},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"exe","links":[{"portIn":"exe","portOut":"triggerAlways","objIn":"0b355a1d-d15b-414c-8139-5e36a83c4e86","objOut":"12cb3df4-d426-4d47-8f3d-7e140b27ab38"}]},{"name":"exe 0","value":0},{"name":"exe 1","value":null},{"name":"exe 2","value":0},{"name":"exe 3","value":0},{"name":"exe 4","value":0},{"name":"exe 5","value":0},{"name":"exe 6","value":0},{"name":"exe 7","value":0},{"name":"exe 8","value":0},{"name":"exe 9","value":0},{"name":"exe 10","value":0},{"name":"exe 11","value":0},{"name":"exe 12","value":0},{"name":"exe 13","value":0},{"name":"exe 14","value":0}],"portsOut":[{"name":"trigger 0","value":0},{"name":"trigger 1","value":0},{"name":"trigger 2"},{"name":"trigger 3","value":0},{"name":"trigger 4","value":0},{"name":"trigger 5","value":0},{"name":"trigger 6","value":0},{"name":"trigger 7","value":0},{"name":"trigger 8","value":0},{"name":"trigger 9","value":0},{"name":"trigger 10","value":0},{"name":"trigger 11","value":0},{"name":"trigger 12","value":0},{"name":"trigger 13","value":0},{"name":"trigger 14","value":0},{"name":"trigger 15","value":0}]},{"opId":"5c04608d-1e42-4e36-be00-1be4a81fc309","objName":"Ops.Gl.TextureEffects.ImageCompose","id":"6eb76731-1372-4c76-ac71-ca72543d4cd3","uiAttribs":{"hint":"texture dimensions not power of two! - texture filtering will not work.","warning":null,"translate":{"x":1920,"y":660},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"render","links":[{"portIn":"render","portOut":"trigger 0","objIn":"6eb76731-1372-4c76-ac71-ca72543d4cd3","objOut":"bf879a09-3f38-401f-bf6f-c0f56e0b2e16"}]},{"name":"use viewport size","value":true},{"name":"width","value":685},{"name":"height","value":437},{"name":"filter","value":"linear"},{"name":"wrap","value":"repeat"},{"name":"HDR","value":false},{"name":"Background Alpha","value":1}],"portsOut":[{"name":"trigger"},{"name":"texture_out"},{"name":"Aspect Ratio","value":1.5675057208237986}]},{"opId":"8248b866-9492-48c8-897d-3097c6fe6fe8","objName":"Ops.Gl.TextureEffects.DrawImage","id":"6166cb9a-20a2-42ec-b06e-f0b1ec8f94e6","uiAttribs":{"translate":{"x":1920,"y":740},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"render","links":[{"portIn":"render","portOut":"trigger","objIn":"6166cb9a-20a2-42ec-b06e-f0b1ec8f94e6","objOut":"6eb76731-1372-4c76-ac71-ca72543d4cd3"}]},{"name":"amount","value":1},{"name":"blendMode","value":"normal"},{"name":"image","links":[{"portIn":"image","portOut":"texture","objIn":"6166cb9a-20a2-42ec-b06e-f0b1ec8f94e6","objOut":"fb112f99-a94f-4867-949a-6d66db26ac16"}]},{"name":"imageAlpha","value":0},{"name":"alphaSrc","value":"alpha channel"},{"name":"removeAlphaSrc","value":true},{"name":"invert alpha channel","value":false},{"name":"flip x","value":false},{"name":"flip y","value":false},{"name":"scale","value":1},{"name":"pos x","value":0},{"name":"pos y","value":0},{"name":"rotate","value":0}],"portsOut":[{"name":"trigger"}]},{"opId":"c76d3d21-e6d8-4b6c-af3d-0f0a5ecbdaa8","objName":"Ops.Gl.TextureEffects.Pixelate","id":"2a97edd2-a0c6-458e-9604-a0d9b86f69db","uiAttribs":{"translate":{"x":1920,"y":940},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"render","links":[{"portIn":"render","portOut":"trigger","objIn":"2a97edd2-a0c6-458e-9604-a0d9b86f69db","objOut":"75d100fc-9908-42bc-9588-31849c6d3027"}]},{"name":"Multiplier","value":0},{"name":"Blend Mode","value":"normal"},{"name":"Amount","value":1},{"name":"width","value":50},{"name":"height","value":30}],"portsOut":[{"name":"trigger","value":0}]},{"opId":"a466bc1f-06e9-4595-8849-bffb9fe22f99","objName":"Ops.Sequence","id":"bf879a09-3f38-401f-bf6f-c0f56e0b2e16","uiAttribs":{"translate":{"x":1956,"y":540},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"exe","links":[{"portIn":"exe","portOut":"trigger 4","objIn":"bf879a09-3f38-401f-bf6f-c0f56e0b2e16","objOut":"12cb3df4-d426-4d47-8f3d-7e140b27ab38"}]},{"name":"exe 0","value":0},{"name":"exe 1","value":0},{"name":"exe 2","value":0},{"name":"exe 3","value":0},{"name":"exe 4","value":0},{"name":"exe 5","value":0},{"name":"exe 6","value":null},{"name":"exe 7","value":0},{"name":"exe 8","value":0},{"name":"exe 9","value":0},{"name":"exe 10","value":0},{"name":"exe 11","value":0},{"name":"exe 12","value":0},{"name":"exe 13","value":0},{"name":"exe 14","value":0}],"portsOut":[{"name":"trigger 0"},{"name":"trigger 1","value":0},{"name":"trigger 2","value":0},{"name":"trigger 3","value":0},{"name":"trigger 4","value":0},{"name":"trigger 5","value":0},{"name":"trigger 6","value":0},{"name":"trigger 7","value":0},{"name":"trigger 8","value":0},{"name":"trigger 9","value":0},{"name":"trigger 10"},{"name":"trigger 11","value":0},{"name":"trigger 12","value":0},{"name":"trigger 13","value":0},{"name":"trigger 14","value":0},{"name":"trigger 15","value":0}]},{"opId":"255bd15b-cc91-4a12-9b4e-53c710cbb282","objName":"Ops.Gl.Meshes.FullscreenRectangle","id":"e7e796ba-e841-44c5-aa60-60bf1a0436df","uiAttribs":{"translate":{"x":2136,"y":700},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"render","links":[{"portIn":"render","portOut":"trigger 10","objIn":"e7e796ba-e841-44c5-aa60-60bf1a0436df","objOut":"bf879a09-3f38-401f-bf6f-c0f56e0b2e16"}]},{"name":"Center in Canvas","value":false},{"name":"Flip Y","value":false},{"name":"Texture","links":[{"portIn":"Texture","portOut":"texture_out","objIn":"e7e796ba-e841-44c5-aa60-60bf1a0436df","objOut":"6eb76731-1372-4c76-ac71-ca72543d4cd3"}]}],"portsOut":[{"name":"trigger","value":0}]},{"opId":"54f26f53-f637-44c1-9bfb-a2f2b722e998","objName":"Ops.Gl.TextureEffects.Blur","id":"0db0bff2-68db-47be-b930-4019a4c5e35d","uiAttribs":{"translate":{"x":1920,"y":840},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"render","links":[{"portIn":"render","portOut":"trigger","objIn":"0db0bff2-68db-47be-b930-4019a4c5e35d","objOut":"6166cb9a-20a2-42ec-b06e-f0b1ec8f94e6"}]},{"name":"amount","value":4},{"name":"direction","value":"both"},{"name":"Fast","value":true},{"name":"mask","value":0}],"portsOut":[{"name":"trigger"}]},{"opId":"9b151d99-7888-4948-81c7-cd23b334e8d4","objName":"Ops.Gl.TextureEffects.Scroll","id":"75d100fc-9908-42bc-9588-31849c6d3027","uiAttribs":{"translate":{"x":1920,"y":900},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"render","links":[{"portIn":"render","portOut":"trigger","objIn":"75d100fc-9908-42bc-9588-31849c6d3027","objOut":"0db0bff2-68db-47be-b930-4019a4c5e35d"}]},{"name":"amountX","value":0.01},{"name":"amountY","value":0.02},{"name":"Repeat","value":true}],"portsOut":[{"name":"trigger"}]},{"opId":"855880fa-6a85-4ba0-aac8-50440ccae948","objName":"Ops.Math.RandomNumbers","id":"c6f6243a-5f85-4b60-9401-f063109a242d","uiAttribs":{"translate":{"x":708,"y":800},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"index","links":[{"portIn":"index","portOut":"timesTriggered","objIn":"c6f6243a-5f85-4b60-9401-f063109a242d","objOut":"884a4fd4-6753-49db-a6a9-95766bf1503c"}]},{"name":"random seed","value":17710},{"name":"Min","value":0.4},{"name":"Max","value":0.7}],"portsOut":[{"name":"X"},{"name":"Y","value":0.5744135802469136},{"name":"Z","value":0.5841062242798354}]},{"opId":"59b94270-0364-4c0f-a9fc-ba2561696a23","objName":"Ops.Gl.Textures.ColorTexture","id":"b65e0505-008e-4077-a41f-ac2dfb8804a7","uiAttribs":{"translate":{"x":1056,"y":1080},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"r","value":1},{"name":"g","value":1},{"name":"b","value":1},{"name":"a","value":1}],"portsOut":[{"name":"texture_out"}]},{"opId":"b6d933cf-1ef8-41d6-95c1-593be0b4be90","objName":"Ops.Gl.ShaderEffects.ExplodeDividedMesh","id":"ad69b273-2559-4bed-a0b7-2679c6038c2b","uiAttribs":{"translate":{"x":1044,"y":1300},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"render","links":[{"portIn":"render","portOut":"trigger","objIn":"ad69b273-2559-4bed-a0b7-2679c6038c2b","objOut":"518d4ca4-c3fc-4362-bbd4-3a8ff80c4b98"}]},{"name":"Distance","value":67.41},{"name":"Absolute","value":true},{"name":"add x","value":0},{"name":"add y","value":0},{"name":"add z","value":0.01},{"name":"mul x","value":1},{"name":"mul y","value":1},{"name":"mul z","value":1},{"name":"x","links":[{"portIn":"x","portOut":"X","objIn":"ad69b273-2559-4bed-a0b7-2679c6038c2b","objOut":"5f42e84f-9bc0-4475-8abb-46d62489f936"}]},{"name":"y","value":0},{"name":"z","value":0},{"name":"Size","value":0.64}],"portsOut":[{"name":"trigger"}]},{"opId":"40fa6f13-ee0e-4386-a86b-711e1fbcf1bc","objName":"Ops.Gl.RenderGeometry","id":"e3dfa9a1-4908-4fa3-a646-119f13422141","uiAttribs":{"translate":{"x":1044,"y":1340},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"render","links":[{"portIn":"render","portOut":"trigger","objIn":"e3dfa9a1-4908-4fa3-a646-119f13422141","objOut":"ad69b273-2559-4bed-a0b7-2679c6038c2b"}]},{"name":"Geometry","links":[{"portIn":"Geometry","portOut":"Result","objIn":"e3dfa9a1-4908-4fa3-a646-119f13422141","objOut":"277d2bf2-7210-4551-b906-1983097a7d0f"}]},{"name":"Update All","value":true},{"name":"Update Face Indices","value":false},{"name":"Update Vertices","value":false},{"name":"Update Texcoords","value":false},{"name":"Vertex Numbers","value":true}],"portsOut":[{"name":"trigger","value":0}]},{"opId":"b0b2430c-5206-4d1f-a0a6-bc5d79a29027","objName":"Ops.Gl.Geometry.GeometryUnIndex","id":"277d2bf2-7210-4551-b906-1983097a7d0f","uiAttribs":{"translate":{"x":1344,"y":1180},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"Geometry","links":[{"portIn":"Geometry","portOut":"Geometry","objIn":"277d2bf2-7210-4551-b906-1983097a7d0f","objOut":"0dfda708-50af-47fb-8069-f209f2d9e71d"}]}],"portsOut":[{"name":"Result"}]},{"opId":"d53b5d7b-99b5-420e-b5a1-2d7c2c1f1ebb","objName":"Ops.Gl.Meshes.CablesLogo","id":"0dfda708-50af-47fb-8069-f209f2d9e71d","uiAttribs":{"translate":{"x":1332,"y":1140},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"render","links":[{"portIn":"render","portOut":"trigger","objIn":"0dfda708-50af-47fb-8069-f209f2d9e71d","objOut":"518d4ca4-c3fc-4362-bbd4-3a8ff80c4b98"}]},{"name":"Scale","value":1},{"name":"Draw","value":false}],"portsOut":[{"name":"trigger","value":0},{"name":"Geometry"}]},{"opId":"7857ee9e-6d60-4c30-9bc0-dfdddf2b47ad","objName":"Ops.Gl.Shader.MatCapMaterialNew","id":"518d4ca4-c3fc-4362-bbd4-3a8ff80c4b98","uiAttribs":{"translate":{"x":1044,"y":1140},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"render","links":[{"portIn":"render","portOut":"trigger 5","objIn":"518d4ca4-c3fc-4362-bbd4-3a8ff80c4b98","objOut":"12cb3df4-d426-4d47-8f3d-7e140b27ab38"}]},{"name":"MatCap","links":[{"portIn":"MatCap","portOut":"texture_out","objIn":"518d4ca4-c3fc-4362-bbd4-3a8ff80c4b98","objOut":"b65e0505-008e-4077-a41f-ac2dfb8804a7"}]},{"name":"Diffuse","value":0},{"name":"Normal","value":0},{"name":"Specular","value":0},{"name":"Specular MatCap","value":0},{"name":"AO Texture","value":0},{"name":"r","value":1},{"name":"g","value":1},{"name":"b","value":1},{"name":"Opacity","value":1},{"name":"AO Intensity","value":1},{"name":"Repeat X","value":1},{"name":"Repeat Y","value":1},{"name":"calc normal tangents","value":true},{"name":"projectCoords","value":"no"},{"name":"Screen Space Normals","value":false}],"portsOut":[{"name":"trigger"},{"name":"Shader"}]},{"opId":"855880fa-6a85-4ba0-aac8-50440ccae948","objName":"Ops.Math.RandomNumbers","id":"5f42e84f-9bc0-4475-8abb-46d62489f936","uiAttribs":{"translate":{"x":1152,"y":1240},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"index","links":[{"portIn":"index","portOut":"timesTriggered","objIn":"5f42e84f-9bc0-4475-8abb-46d62489f936","objOut":"884a4fd4-6753-49db-a6a9-95766bf1503c"}]},{"name":"random seed","value":17710},{"name":"Min","value":-0.5},{"name":"Max","value":-0.7}],"portsOut":[{"name":"X"},{"name":"Y","value":-0.6162757201646091},{"name":"Z","value":-0.6227374828532235}]},{"opId":"a466bc1f-06e9-4595-8849-bffb9fe22f99","objName":"Ops.Sequence","id":"af2fa3fa-345d-4c08-9076-ae6995f11856","uiAttribs":{"translate":{"x":2532,"y":540},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"exe","value":null},{"name":"exe 0","value":0},{"name":"exe 1","value":0},{"name":"exe 2","links":[{"portIn":"exe 2","portOut":"trigger 6","objIn":"af2fa3fa-345d-4c08-9076-ae6995f11856","objOut":"12cb3df4-d426-4d47-8f3d-7e140b27ab38"}]},{"name":"exe 3","value":0},{"name":"exe 4","value":0},{"name":"exe 5","value":0},{"name":"exe 6","value":null},{"name":"exe 7","value":0},{"name":"exe 8","value":0},{"name":"exe 9","value":0},{"name":"exe 10","value":0},{"name":"exe 11","value":0},{"name":"exe 12","value":0},{"name":"exe 13","value":0},{"name":"exe 14","value":0}],"portsOut":[{"name":"trigger 0"},{"name":"trigger 1","value":0},{"name":"trigger 2","value":0},{"name":"trigger 3","value":0},{"name":"trigger 4","value":0},{"name":"trigger 5","value":0},{"name":"trigger 6","value":0},{"name":"trigger 7","value":0},{"name":"trigger 8","value":0},{"name":"trigger 9","value":0},{"name":"trigger 10"},{"name":"trigger 11","value":0},{"name":"trigger 12","value":0},{"name":"trigger 13"},{"name":"trigger 14","value":0},{"name":"trigger 15","value":0}]},{"opId":"5c04608d-1e42-4e36-be00-1be4a81fc309","objName":"Ops.Gl.TextureEffects.ImageCompose","id":"725f8e01-9b6c-4012-a06a-a86f24e21847","uiAttribs":{"hint":"texture dimensions not power of two! - texture filtering will not work.","warning":null,"translate":{"x":2496,"y":660},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"render","links":[{"portIn":"render","portOut":"trigger 0","objIn":"725f8e01-9b6c-4012-a06a-a86f24e21847","objOut":"af2fa3fa-345d-4c08-9076-ae6995f11856"}]},{"name":"use viewport size","value":true},{"name":"width","value":685},{"name":"height","value":437},{"name":"filter","value":"linear"},{"name":"wrap","value":"repeat"},{"name":"HDR","value":false},{"name":"Background Alpha","value":1}],"portsOut":[{"name":"trigger"},{"name":"texture_out"},{"name":"Aspect Ratio","value":1.5675057208237986}]},{"opId":"8248b866-9492-48c8-897d-3097c6fe6fe8","objName":"Ops.Gl.TextureEffects.DrawImage","id":"94b9cfe6-3dcf-4a27-955f-64cc59de6638","uiAttribs":{"translate":{"x":2496,"y":740},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"render","links":[{"portIn":"render","portOut":"trigger","objIn":"94b9cfe6-3dcf-4a27-955f-64cc59de6638","objOut":"725f8e01-9b6c-4012-a06a-a86f24e21847"}]},{"name":"amount","value":1},{"name":"blendMode","value":"normal"},{"name":"image","links":[{"portIn":"image","portOut":"texture","objIn":"94b9cfe6-3dcf-4a27-955f-64cc59de6638","objOut":"fb112f99-a94f-4867-949a-6d66db26ac16"}]},{"name":"imageAlpha","value":0},{"name":"alphaSrc","value":"alpha channel"},{"name":"removeAlphaSrc","value":true},{"name":"invert alpha channel","value":false},{"name":"flip x","value":false},{"name":"flip y","value":false},{"name":"scale","value":1},{"name":"pos x","value":0},{"name":"pos y","value":0},{"name":"rotate","value":0}],"portsOut":[{"name":"trigger"}]},{"opId":"255bd15b-cc91-4a12-9b4e-53c710cbb282","objName":"Ops.Gl.Meshes.FullscreenRectangle","id":"83a4a319-b8e3-459e-83c8-356e36460a1e","uiAttribs":{"translate":{"x":2712,"y":700},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"render","links":[{"portIn":"render","portOut":"trigger 10","objIn":"83a4a319-b8e3-459e-83c8-356e36460a1e","objOut":"af2fa3fa-345d-4c08-9076-ae6995f11856"}]},{"name":"Center in Canvas","value":false},{"name":"Flip Y","value":false},{"name":"Texture","links":[{"portIn":"Texture","portOut":"texture_out","objIn":"83a4a319-b8e3-459e-83c8-356e36460a1e","objOut":"725f8e01-9b6c-4012-a06a-a86f24e21847"}]}],"portsOut":[{"name":"trigger","value":0}]},{"opId":"a55eea17-efb8-4418-bcf9-7fefeecf40e5","objName":"Ops.Gl.TextureEffects.Noise.GlitchNoise","id":"1601a398-b2f3-4545-a85b-a6ce600080f6","uiAttribs":{"translate":{"x":2892,"y":740},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"render","links":[{"portIn":"render","portOut":"trigger","objIn":"1601a398-b2f3-4545-a85b-a6ce600080f6","objOut":"99756b7e-26a2-43fd-892b-a2cb4563bcc9"}]},{"name":"Amount","value":1},{"name":"Blend Mode","value":"normal"},{"name":"Seed","links":[{"portIn":"Seed","portOut":"result","objIn":"1601a398-b2f3-4545-a85b-a6ce600080f6","objOut":"8ba7108f-85dc-4616-a03a-0da6e400a810"}]},{"name":"frequency","value":1},{"name":"strength","value":8},{"name":"Block size small x","value":39},{"name":"Block size small y","value":39},{"name":"Block size large x","value":20},{"name":"Block size large y","value":4},{"name":"Scroll X","value":0},{"name":"Scroll Y","value":0}],"portsOut":[{"name":"trigger","value":0}]},{"opId":"c089646e-9324-48b2-8b32-81240408222e","objName":"Ops.Gl.TextureEffects.PixelDisplacement_v3","id":"42ebe8b1-2866-49a9-af2f-a7c2c2f5e52d","uiAttribs":{"translate":{"x":2472,"y":920},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"render","links":[{"portIn":"render","portOut":"trigger","objIn":"42ebe8b1-2866-49a9-af2f-a7c2c2f5e52d","objOut":"e9f23e8d-d54f-4d6e-9e9b-2b5c24defb67"}]},{"name":"displaceTex","links":[{"portIn":"displaceTex","portOut":"texture_out","objIn":"42ebe8b1-2866-49a9-af2f-a7c2c2f5e52d","objOut":"99756b7e-26a2-43fd-892b-a2cb4563bcc9"}]},{"name":"Blend Mode","value":"normal"},{"name":"Amount","value":1},{"name":"amount X","value":0.251},{"name":"amount Y","value":0.03},{"name":"Wrap","value":"Mirror"},{"name":"Input","value":"Luminance"},{"name":"Zero Displace","value":"Black"}],"portsOut":[{"name":"trigger"}]},{"opId":"5c04608d-1e42-4e36-be00-1be4a81fc309","objName":"Ops.Gl.TextureEffects.ImageCompose","id":"99756b7e-26a2-43fd-892b-a2cb4563bcc9","uiAttribs":{"hint":"texture dimensions not power of two! - texture filtering will not work.","warning":null,"translate":{"x":2868,"y":640},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"render","links":[{"portIn":"render","portOut":"trigger 13","objIn":"99756b7e-26a2-43fd-892b-a2cb4563bcc9","objOut":"af2fa3fa-345d-4c08-9076-ae6995f11856"}]},{"name":"use viewport size","value":true},{"name":"width","value":685},{"name":"height","value":437},{"name":"filter","value":"linear"},{"name":"wrap","value":"mirrored repeat"},{"name":"HDR","value":false},{"name":"Background Alpha","value":1}],"portsOut":[{"name":"trigger"},{"name":"texture_out"},{"name":"Aspect Ratio","value":1.5675057208237986}]},{"opId":"9b151d99-7888-4948-81c7-cd23b334e8d4","objName":"Ops.Gl.TextureEffects.Scroll","id":"e59a6ec2-ad48-4f2a-b521-0f6d5ab05614","uiAttribs":{"translate":{"x":2484,"y":1000},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"render","links":[{"portIn":"render","portOut":"trigger","objIn":"e59a6ec2-ad48-4f2a-b521-0f6d5ab05614","objOut":"42ebe8b1-2866-49a9-af2f-a7c2c2f5e52d"}]},{"name":"amountX","value":-0.07},{"name":"amountY","value":0},{"name":"Repeat","value":true}],"portsOut":[{"name":"trigger"}]},{"opId":"6b5af21d-065f-44d2-9442-8b7a254753f6","objName":"Ops.Math.Abs","id":"8ba7108f-85dc-4616-a03a-0da6e400a810","uiAttribs":{"translate":{"x":2952,"y":680},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"number","links":[{"portIn":"number","portOut":"X","objIn":"8ba7108f-85dc-4616-a03a-0da6e400a810","objOut":"5f42e84f-9bc0-4475-8abb-46d62489f936"}]}],"portsOut":[{"name":"result"}]},{"opId":"c089646e-9324-48b2-8b32-81240408222e","objName":"Ops.Gl.TextureEffects.PixelDisplacement_v3","id":"e9f23e8d-d54f-4d6e-9e9b-2b5c24defb67","uiAttribs":{"translate":{"x":2472,"y":800},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"render","links":[{"portIn":"render","portOut":"trigger","objIn":"e9f23e8d-d54f-4d6e-9e9b-2b5c24defb67","objOut":"94b9cfe6-3dcf-4a27-955f-64cc59de6638"}]},{"name":"displaceTex","links":[{"portIn":"displaceTex","portOut":"texture_out","objIn":"e9f23e8d-d54f-4d6e-9e9b-2b5c24defb67","objOut":"6eb76731-1372-4c76-ac71-ca72543d4cd3"}]},{"name":"Blend Mode","value":"normal"},{"name":"Amount","value":1},{"name":"amount X","value":0.048},{"name":"amount Y","value":0},{"name":"Wrap","value":"Mirror"},{"name":"Input","value":"RedGreen"},{"name":"Zero Displace","value":"Black"}],"portsOut":[{"name":"trigger"}]},{"opId":"38ac43a1-1757-48f4-9450-29f07ac0d376","objName":"Ops.Gl.TextureEffects.ChromaticAberration","id":"5ac31074-0043-4cb3-a5f8-d8c3eb4187a0","uiAttribs":{"translate":{"x":2484,"y":1120},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"render","links":[{"portIn":"render","portOut":"trigger","objIn":"5ac31074-0043-4cb3-a5f8-d8c3eb4187a0","objOut":"e59a6ec2-ad48-4f2a-b521-0f6d5ab05614"}]},{"name":"Blend Mode","value":"normal"},{"name":"Amount","value":1},{"name":"Pixel","value":5},{"name":"Lens Distort","value":0},{"name":"Smooth","value":false},{"name":"Mask","value":0}],"portsOut":[{"name":"trigger","value":0}]},{"opId":"4db917cc-2cef-43f4-83d5-38c4572fe943","objName":"Ops.Gl.Meshes.Circle","id":"ea15e576-4abe-4a2c-b366-d766fc877bb7","uiAttribs":{"translate":{"x":-312,"y":320},"subPatch":0,"notWorkingMsg":null},"portsIn":[{"name":"render","links":[{"portIn":"render","portOut":"trigger 7","objIn":"ea15e576-4abe-4a2c-b366-d766fc877bb7","objOut":"12cb3df4-d426-4d47-8f3d-7e140b27ab38"}]},{"name":"radius","value":0.3},{"name":"innerRadius","value":0.682},{"name":"segments","value":40},{"name":"percent","value":1},{"name":"steps","value":5},{"name":"invertSteps","value":false},{"name":"mapping","value":"flat"},{"name":"Spline","value":false},{"name":"Draw","value":true}],"portsOut":[{"name":"trigger","value":0},{"name":"geometry"}]}],"users":[],"userOps":[],"tags":[],"_id":"5d385b9c20668302619c246a","name":"new project","userId":"55d744634cdc152216eb9aad","created":"2019-07-24T13:22:36.277Z","updated":"2019-07-25T09:38:01.642Z","__v":52,"shortId":"aQt9AM","opsHash":"3cf6b85df4f27a98963edd5e11753f0e44c2ed4d","ui":{"viewBox":{"x":-604.7636636946618,"y":-240.88965823122902,"w":1512.2839522784905,"h":1276.3247540506409},"timeLineLength":20,"bookmarks":[],"subPatchViewBoxes":[],"renderer":{"w":685,"h":437,"s":1}},"updatedByUser":"pandur","cachedUsername":"pandur","views":2,"cachedNumComments":0,"cachedNumFavs":0,"statsAdmin":{"filenameScreenshots":["_screenshots/screenshot.png","_screenshots/screenshot_1563974591813.png","_screenshots/screenshot_1563974656308.png","_screenshots/screenshot_1563974663733.png","_screenshots/screenshot_1563974722103.png","_screenshots/screenshot_1563974741106.png","_screenshots/screenshot_1563974762575.png","_screenshots/screenshot_1563974793847.png","_screenshots/screenshot_1563974828080.png","_screenshots/screenshot_1563974850063.png","_screenshots/screenshot_1563974852852.png","_screenshots/screenshot_1563974925976.png","_screenshots/screenshot_1563974941917.png","_screenshots/screenshot_1563974950703.png","_screenshots/screenshot_1563974968206.png","_screenshots/screenshot_1563974972541.png","_screenshots/screenshot_1563974974318.png","_screenshots/screenshot_1563975003859.png","_screenshots/screenshot_1563975019824.png","_screenshots/screenshot_1563975033135.png","_screenshots/screenshot_1563975055455.png","_screenshots/screenshot_1563975176216.png","_screenshots/screenshot_1563975179411.png","_screenshots/screenshot_1563975204231.png","_screenshots/screenshot_1563975232012.png","_screenshots/screenshot_1563975246891.png","_screenshots/screenshot_1563975251356.png","_screenshots/screenshot_1563975258733.png","_screenshots/screenshot_1563975271580.png","_screenshots/screenshot_1563975330530.png","_screenshots/screenshot_1563975337125.png","_screenshots/screenshot_1563975390176.png","_screenshots/screenshot_1563975482288.png","_screenshots/screenshot_1563975483380.png","_screenshots/screenshot_1563975498396.png","_screenshots/screenshot_1563975544641.png","_screenshots/screenshot_1563975618519.png","_screenshots/screenshot_1563975631295.png","_screenshots/screenshot_1563975652386.png","_screenshots/screenshot_1563975808667.png","_screenshots/screenshot_1563975833605.png","_screenshots/screenshot_1563975848897.png","_screenshots/screenshot_1563975863274.png","_screenshots/screenshot_1563975901364.png","_screenshots/screenshot_1563975957430.png","_screenshots/screenshot_1563976000744.png","_screenshots/screenshot_1563976018619.png","_screenshots/screenshot_1563976022874.png","_screenshots/screenshot_1563976032370.png","_screenshots/screenshot_1563976047772.png","_screenshots/screenshot_1563976069113.png","_screenshots/screenshot_1563976107576.png","_screenshots/screenshot_1563976112873.png","_screenshots/screenshot_1564047337264.png","_screenshots/screenshot_1564047431717.png","_screenshots/screenshot_1564047470897.png","_screenshots/screenshot_1564047482139.png"],"filenameExports":[],"filenameAssets":[],"hasOldScreenshots":false,"hasOldExports":false,"sizeScreenshots":275.6259765625,"sizeExports":0,"sizeAssets":0},"exports":1}
!function(t,a){if("object"==typeof exports&&"object"==typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var n=a();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(this,function(){return function(t){function a(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,a),o.loaded=!0,o.exports}var n={};return a.m=t,a.c=n,a.p="",a(0)}([function(t,a,n){a.glMatrix=n(1),a.mat2=n(2),a.mat2d=n(3),a.mat3=n(4),a.mat4=n(5),a.quat=n(6),a.vec2=n(9),a.vec3=n(7),a.vec4=n(8)},function(t,a){var n={};n.EPSILON=1e-6,n.ARRAY_TYPE="undefined"!=typeof Float32Array?Float32Array:Array,n.RANDOM=Math.random,n.ENABLE_SIMD=!1,n.SIMD_AVAILABLE=n.ARRAY_TYPE===this.Float32Array&&"SIMD"in this,n.USE_SIMD=n.ENABLE_SIMD&&n.SIMD_AVAILABLE,n.setMatrixArrayType=function(t){n.ARRAY_TYPE=t};var r=Math.PI/180;n.toRadian=function(t){return t*r},n.equals=function(t,a){return Math.abs(t-a)<=n.EPSILON*Math.max(1,Math.abs(t),Math.abs(a))},t.exports=n},function(t,a,n){var r=n(1),o={};o.create=function(){var t=new r.ARRAY_TYPE(4);return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t},o.clone=function(t){var a=new r.ARRAY_TYPE(4);return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a},o.copy=function(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t},o.identity=function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t},o.fromValues=function(t,a,n,o){var u=new r.ARRAY_TYPE(4);return u[0]=t,u[1]=a,u[2]=n,u[3]=o,u},o.set=function(t,a,n,r,o){return t[0]=a,t[1]=n,t[2]=r,t[3]=o,t},o.transpose=function(t,a){if(t===a){var n=a[1];t[1]=a[2],t[2]=n}else t[0]=a[0],t[1]=a[2],t[2]=a[1],t[3]=a[3];return t},o.invert=function(t,a){var n=a[0],r=a[1],o=a[2],u=a[3],l=n*u-o*r;return l?(l=1/l,t[0]=u*l,t[1]=-r*l,t[2]=-o*l,t[3]=n*l,t):null},o.adjoint=function(t,a){var n=a[0];return t[0]=a[3],t[1]=-a[1],t[2]=-a[2],t[3]=n,t},o.determinant=function(t){return t[0]*t[3]-t[2]*t[1]},o.multiply=function(t,a,n){var r=a[0],o=a[1],u=a[2],l=a[3],e=n[0],M=n[1],s=n[2],i=n[3];return t[0]=r*e+u*M,t[1]=o*e+l*M,t[2]=r*s+u*i,t[3]=o*s+l*i,t},o.mul=o.multiply,o.rotate=function(t,a,n){var r=a[0],o=a[1],u=a[2],l=a[3],e=Math.sin(n),M=Math.cos(n);return t[0]=r*M+u*e,t[1]=o*M+l*e,t[2]=r*-e+u*M,t[3]=o*-e+l*M,t},o.scale=function(t,a,n){var r=a[0],o=a[1],u=a[2],l=a[3],e=n[0],M=n[1];return t[0]=r*e,t[1]=o*e,t[2]=u*M,t[3]=l*M,t},o.fromRotation=function(t,a){var n=Math.sin(a),r=Math.cos(a);return t[0]=r,t[1]=n,t[2]=-n,t[3]=r,t},o.fromScaling=function(t,a){return t[0]=a[0],t[1]=0,t[2]=0,t[3]=a[1],t},o.str=function(t){return"mat2("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},o.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2))},o.LDU=function(t,a,n,r){return t[2]=r[2]/r[0],n[0]=r[0],n[1]=r[1],n[3]=r[3]-t[2]*n[1],[t,a,n]},o.add=function(t,a,n){return t[0]=a[0]+n[0],t[1]=a[1]+n[1],t[2]=a[2]+n[2],t[3]=a[3]+n[3],t},o.subtract=function(t,a,n){return t[0]=a[0]-n[0],t[1]=a[1]-n[1],t[2]=a[2]-n[2],t[3]=a[3]-n[3],t},o.sub=o.subtract,o.exactEquals=function(t,a){return t[0]===a[0]&&t[1]===a[1]&&t[2]===a[2]&&t[3]===a[3]},o.equals=function(t,a){var n=t[0],o=t[1],u=t[2],l=t[3],e=a[0],M=a[1],s=a[2],i=a[3];return Math.abs(n-e)<=r.EPSILON*Math.max(1,Math.abs(n),Math.abs(e))&&Math.abs(o-M)<=r.EPSILON*Math.max(1,Math.abs(o),Math.abs(M))&&Math.abs(u-s)<=r.EPSILON*Math.max(1,Math.abs(u),Math.abs(s))&&Math.abs(l-i)<=r.EPSILON*Math.max(1,Math.abs(l),Math.abs(i))},o.multiplyScalar=function(t,a,n){return t[0]=a[0]*n,t[1]=a[1]*n,t[2]=a[2]*n,t[3]=a[3]*n,t},o.multiplyScalarAndAdd=function(t,a,n,r){return t[0]=a[0]+n[0]*r,t[1]=a[1]+n[1]*r,t[2]=a[2]+n[2]*r,t[3]=a[3]+n[3]*r,t},t.exports=o},function(t,a,n){var r=n(1),o={};o.create=function(){var t=new r.ARRAY_TYPE(6);return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t},o.clone=function(t){var a=new r.ARRAY_TYPE(6);return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a[4]=t[4],a[5]=t[5],a},o.copy=function(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t},o.identity=function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t},o.fromValues=function(t,a,n,o,u,l){var e=new r.ARRAY_TYPE(6);return e[0]=t,e[1]=a,e[2]=n,e[3]=o,e[4]=u,e[5]=l,e},o.set=function(t,a,n,r,o,u,l){return t[0]=a,t[1]=n,t[2]=r,t[3]=o,t[4]=u,t[5]=l,t},o.invert=function(t,a){var n=a[0],r=a[1],o=a[2],u=a[3],l=a[4],e=a[5],M=n*u-r*o;return M?(M=1/M,t[0]=u*M,t[1]=-r*M,t[2]=-o*M,t[3]=n*M,t[4]=(o*e-u*l)*M,t[5]=(r*l-n*e)*M,t):null},o.determinant=function(t){return t[0]*t[3]-t[1]*t[2]},o.multiply=function(t,a,n){var r=a[0],o=a[1],u=a[2],l=a[3],e=a[4],M=a[5],s=n[0],i=n[1],c=n[2],h=n[3],f=n[4],S=n[5];return t[0]=r*s+u*i,t[1]=o*s+l*i,t[2]=r*c+u*h,t[3]=o*c+l*h,t[4]=r*f+u*S+e,t[5]=o*f+l*S+M,t},o.mul=o.multiply,o.rotate=function(t,a,n){var r=a[0],o=a[1],u=a[2],l=a[3],e=a[4],M=a[5],s=Math.sin(n),i=Math.cos(n);return t[0]=r*i+u*s,t[1]=o*i+l*s,t[2]=r*-s+u*i,t[3]=o*-s+l*i,t[4]=e,t[5]=M,t},o.scale=function(t,a,n){var r=a[0],o=a[1],u=a[2],l=a[3],e=a[4],M=a[5],s=n[0],i=n[1];return t[0]=r*s,t[1]=o*s,t[2]=u*i,t[3]=l*i,t[4]=e,t[5]=M,t},o.translate=function(t,a,n){var r=a[0],o=a[1],u=a[2],l=a[3],e=a[4],M=a[5],s=n[0],i=n[1];return t[0]=r,t[1]=o,t[2]=u,t[3]=l,t[4]=r*s+u*i+e,t[5]=o*s+l*i+M,t},o.fromRotation=function(t,a){var n=Math.sin(a),r=Math.cos(a);return t[0]=r,t[1]=n,t[2]=-n,t[3]=r,t[4]=0,t[5]=0,t},o.fromScaling=function(t,a){return t[0]=a[0],t[1]=0,t[2]=0,t[3]=a[1],t[4]=0,t[5]=0,t},o.fromTranslation=function(t,a){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=a[0],t[5]=a[1],t},o.str=function(t){return"mat2d("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+")"},o.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+1)},o.add=function(t,a,n){return t[0]=a[0]+n[0],t[1]=a[1]+n[1],t[2]=a[2]+n[2],t[3]=a[3]+n[3],t[4]=a[4]+n[4],t[5]=a[5]+n[5],t},o.subtract=function(t,a,n){return t[0]=a[0]-n[0],t[1]=a[1]-n[1],t[2]=a[2]-n[2],t[3]=a[3]-n[3],t[4]=a[4]-n[4],t[5]=a[5]-n[5],t},o.sub=o.subtract,o.multiplyScalar=function(t,a,n){return t[0]=a[0]*n,t[1]=a[1]*n,t[2]=a[2]*n,t[3]=a[3]*n,t[4]=a[4]*n,t[5]=a[5]*n,t},o.multiplyScalarAndAdd=function(t,a,n,r){return t[0]=a[0]+n[0]*r,t[1]=a[1]+n[1]*r,t[2]=a[2]+n[2]*r,t[3]=a[3]+n[3]*r,t[4]=a[4]+n[4]*r,t[5]=a[5]+n[5]*r,t},o.exactEquals=function(t,a){return t[0]===a[0]&&t[1]===a[1]&&t[2]===a[2]&&t[3]===a[3]&&t[4]===a[4]&&t[5]===a[5]},o.equals=function(t,a){var n=t[0],o=t[1],u=t[2],l=t[3],e=t[4],M=t[5],s=a[0],i=a[1],c=a[2],h=a[3],f=a[4],S=a[5];return Math.abs(n-s)<=r.EPSILON*Math.max(1,Math.abs(n),Math.abs(s))&&Math.abs(o-i)<=r.EPSILON*Math.max(1,Math.abs(o),Math.abs(i))&&Math.abs(u-c)<=r.EPSILON*Math.max(1,Math.abs(u),Math.abs(c))&&Math.abs(l-h)<=r.EPSILON*Math.max(1,Math.abs(l),Math.abs(h))&&Math.abs(e-f)<=r.EPSILON*Math.max(1,Math.abs(e),Math.abs(f))&&Math.abs(M-S)<=r.EPSILON*Math.max(1,Math.abs(M),Math.abs(S))},t.exports=o},function(t,a,n){var r=n(1),o={};o.create=function(){var t=new r.ARRAY_TYPE(9);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},o.fromMat4=function(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[4],t[4]=a[5],t[5]=a[6],t[6]=a[8],t[7]=a[9],t[8]=a[10],t},o.clone=function(t){var a=new r.ARRAY_TYPE(9);return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a[4]=t[4],a[5]=t[5],a[6]=t[6],a[7]=t[7],a[8]=t[8],a},o.copy=function(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t},o.fromValues=function(t,a,n,o,u,l,e,M,s){var i=new r.ARRAY_TYPE(9);return i[0]=t,i[1]=a,i[2]=n,i[3]=o,i[4]=u,i[5]=l,i[6]=e,i[7]=M,i[8]=s,i},o.set=function(t,a,n,r,o,u,l,e,M,s){return t[0]=a,t[1]=n,t[2]=r,t[3]=o,t[4]=u,t[5]=l,t[6]=e,t[7]=M,t[8]=s,t},o.identity=function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},o.transpose=function(t,a){if(t===a){var n=a[1],r=a[2],o=a[5];t[1]=a[3],t[2]=a[6],t[3]=n,t[5]=a[7],t[6]=r,t[7]=o}else t[0]=a[0],t[1]=a[3],t[2]=a[6],t[3]=a[1],t[4]=a[4],t[5]=a[7],t[6]=a[2],t[7]=a[5],t[8]=a[8];return t},o.invert=function(t,a){var n=a[0],r=a[1],o=a[2],u=a[3],l=a[4],e=a[5],M=a[6],s=a[7],i=a[8],c=i*l-e*s,h=-i*u+e*M,f=s*u-l*M,S=n*c+r*h+o*f;return S?(S=1/S,t[0]=c*S,t[1]=(-i*r+o*s)*S,t[2]=(e*r-o*l)*S,t[3]=h*S,t[4]=(i*n-o*M)*S,t[5]=(-e*n+o*u)*S,t[6]=f*S,t[7]=(-s*n+r*M)*S,t[8]=(l*n-r*u)*S,t):null},o.adjoint=function(t,a){var n=a[0],r=a[1],o=a[2],u=a[3],l=a[4],e=a[5],M=a[6],s=a[7],i=a[8];return t[0]=l*i-e*s,t[1]=o*s-r*i,t[2]=r*e-o*l,t[3]=e*M-u*i,t[4]=n*i-o*M,t[5]=o*u-n*e,t[6]=u*s-l*M,t[7]=r*M-n*s,t[8]=n*l-r*u,t},o.determinant=function(t){var a=t[0],n=t[1],r=t[2],o=t[3],u=t[4],l=t[5],e=t[6],M=t[7],s=t[8];return a*(s*u-l*M)+n*(-s*o+l*e)+r*(M*o-u*e)},o.multiply=function(t,a,n){var r=a[0],o=a[1],u=a[2],l=a[3],e=a[4],M=a[5],s=a[6],i=a[7],c=a[8],h=n[0],f=n[1],S=n[2],I=n[3],x=n[4],D=n[5],F=n[6],m=n[7],d=n[8];return t[0]=h*r+f*l+S*s,t[1]=h*o+f*e+S*i,t[2]=h*u+f*M+S*c,t[3]=I*r+x*l+D*s,t[4]=I*o+x*e+D*i,t[5]=I*u+x*M+D*c,t[6]=F*r+m*l+d*s,t[7]=F*o+m*e+d*i,t[8]=F*u+m*M+d*c,t},o.mul=o.multiply,o.translate=function(t,a,n){var r=a[0],o=a[1],u=a[2],l=a[3],e=a[4],M=a[5],s=a[6],i=a[7],c=a[8],h=n[0],f=n[1];return t[0]=r,t[1]=o,t[2]=u,t[3]=l,t[4]=e,t[5]=M,t[6]=h*r+f*l+s,t[7]=h*o+f*e+i,t[8]=h*u+f*M+c,t},o.rotate=function(t,a,n){var r=a[0],o=a[1],u=a[2],l=a[3],e=a[4],M=a[5],s=a[6],i=a[7],c=a[8],h=Math.sin(n),f=Math.cos(n);return t[0]=f*r+h*l,t[1]=f*o+h*e,t[2]=f*u+h*M,t[3]=f*l-h*r,t[4]=f*e-h*o,t[5]=f*M-h*u,t[6]=s,t[7]=i,t[8]=c,t},o.scale=function(t,a,n){var r=n[0],o=n[1];return t[0]=r*a[0],t[1]=r*a[1],t[2]=r*a[2],t[3]=o*a[3],t[4]=o*a[4],t[5]=o*a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t},o.fromTranslation=function(t,a){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=a[0],t[7]=a[1],t[8]=1,t},o.fromRotation=function(t,a){var n=Math.sin(a),r=Math.cos(a);return t[0]=r,t[1]=n,t[2]=0,t[3]=-n,t[4]=r,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},o.fromScaling=function(t,a){return t[0]=a[0],t[1]=0,t[2]=0,t[3]=0,t[4]=a[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},o.fromMat2d=function(t,a){return t[0]=a[0],t[1]=a[1],t[2]=0,t[3]=a[2],t[4]=a[3],t[5]=0,t[6]=a[4],t[7]=a[5],t[8]=1,t},o.fromQuat=function(t,a){var n=a[0],r=a[1],o=a[2],u=a[3],l=n+n,e=r+r,M=o+o,s=n*l,i=r*l,c=r*e,h=o*l,f=o*e,S=o*M,I=u*l,x=u*e,D=u*M;return t[0]=1-c-S,t[3]=i-D,t[6]=h+x,t[1]=i+D,t[4]=1-s-S,t[7]=f-I,t[2]=h-x,t[5]=f+I,t[8]=1-s-c,t},o.normalFromMat4=function(t,a){var n=a[0],r=a[1],o=a[2],u=a[3],l=a[4],e=a[5],M=a[6],s=a[7],i=a[8],c=a[9],h=a[10],f=a[11],S=a[12],I=a[13],x=a[14],D=a[15],F=n*e-r*l,m=n*M-o*l,d=n*s-u*l,v=r*M-o*e,b=r*s-u*e,p=o*s-u*M,z=i*I-c*S,w=i*x-h*S,E=i*D-f*S,A=c*x-h*I,P=c*D-f*I,L=h*D-f*x,q=F*L-m*P+d*A+v*E-b*w+p*z;return q?(q=1/q,t[0]=(e*L-M*P+s*A)*q,t[1]=(M*E-l*L-s*w)*q,t[2]=(l*P-e*E+s*z)*q,t[3]=(o*P-r*L-u*A)*q,t[4]=(n*L-o*E+u*w)*q,t[5]=(r*E-n*P-u*z)*q,t[6]=(I*p-x*b+D*v)*q,t[7]=(x*d-S*p-D*m)*q,t[8]=(S*b-I*d+D*F)*q,t):null},o.str=function(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"},o.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+Math.pow(t[6],2)+Math.pow(t[7],2)+Math.pow(t[8],2))},o.add=function(t,a,n){return t[0]=a[0]+n[0],t[1]=a[1]+n[1],t[2]=a[2]+n[2],t[3]=a[3]+n[3],t[4]=a[4]+n[4],t[5]=a[5]+n[5],t[6]=a[6]+n[6],t[7]=a[7]+n[7],t[8]=a[8]+n[8],t},o.subtract=function(t,a,n){return t[0]=a[0]-n[0],t[1]=a[1]-n[1],t[2]=a[2]-n[2],t[3]=a[3]-n[3],t[4]=a[4]-n[4],t[5]=a[5]-n[5],t[6]=a[6]-n[6],t[7]=a[7]-n[7],t[8]=a[8]-n[8],t},o.sub=o.subtract,o.multiplyScalar=function(t,a,n){return t[0]=a[0]*n,t[1]=a[1]*n,t[2]=a[2]*n,t[3]=a[3]*n,t[4]=a[4]*n,t[5]=a[5]*n,t[6]=a[6]*n,t[7]=a[7]*n,t[8]=a[8]*n,t},o.multiplyScalarAndAdd=function(t,a,n,r){return t[0]=a[0]+n[0]*r,t[1]=a[1]+n[1]*r,t[2]=a[2]+n[2]*r,t[3]=a[3]+n[3]*r,t[4]=a[4]+n[4]*r,t[5]=a[5]+n[5]*r,t[6]=a[6]+n[6]*r,t[7]=a[7]+n[7]*r,t[8]=a[8]+n[8]*r,t},o.exactEquals=function(t,a){return t[0]===a[0]&&t[1]===a[1]&&t[2]===a[2]&&t[3]===a[3]&&t[4]===a[4]&&t[5]===a[5]&&t[6]===a[6]&&t[7]===a[7]&&t[8]===a[8]},o.equals=function(t,a){var n=t[0],o=t[1],u=t[2],l=t[3],e=t[4],M=t[5],s=t[6],i=t[7],c=t[8],h=a[0],f=a[1],S=a[2],I=a[3],x=a[4],D=a[5],F=t[6],m=a[7],d=a[8];return Math.abs(n-h)<=r.EPSILON*Math.max(1,Math.abs(n),Math.abs(h))&&Math.abs(o-f)<=r.EPSILON*Math.max(1,Math.abs(o),Math.abs(f))&&Math.abs(u-S)<=r.EPSILON*Math.max(1,Math.abs(u),Math.abs(S))&&Math.abs(l-I)<=r.EPSILON*Math.max(1,Math.abs(l),Math.abs(I))&&Math.abs(e-x)<=r.EPSILON*Math.max(1,Math.abs(e),Math.abs(x))&&Math.abs(M-D)<=r.EPSILON*Math.max(1,Math.abs(M),Math.abs(D))&&Math.abs(s-F)<=r.EPSILON*Math.max(1,Math.abs(s),Math.abs(F))&&Math.abs(i-m)<=r.EPSILON*Math.max(1,Math.abs(i),Math.abs(m))&&Math.abs(c-d)<=r.EPSILON*Math.max(1,Math.abs(c),Math.abs(d))},t.exports=o},function(t,a,n){var r=n(1),o={scalar:{},SIMD:{}};o.create=function(){var t=new r.ARRAY_TYPE(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},o.clone=function(t){var a=new r.ARRAY_TYPE(16);return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a[4]=t[4],a[5]=t[5],a[6]=t[6],a[7]=t[7],a[8]=t[8],a[9]=t[9],a[10]=t[10],a[11]=t[11],a[12]=t[12],a[13]=t[13],a[14]=t[14],a[15]=t[15],a},o.copy=function(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t},o.fromValues=function(t,a,n,o,u,l,e,M,s,i,c,h,f,S,I,x){var D=new r.ARRAY_TYPE(16);return D[0]=t,D[1]=a,D[2]=n,D[3]=o,D[4]=u,D[5]=l,D[6]=e,D[7]=M,D[8]=s,D[9]=i,D[10]=c,D[11]=h,D[12]=f,D[13]=S,D[14]=I,D[15]=x,D},o.set=function(t,a,n,r,o,u,l,e,M,s,i,c,h,f,S,I,x){return t[0]=a,t[1]=n,t[2]=r,t[3]=o,t[4]=u,t[5]=l,t[6]=e,t[7]=M,t[8]=s,t[9]=i,t[10]=c,t[11]=h,t[12]=f,t[13]=S,t[14]=I,t[15]=x,t},o.identity=function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},o.scalar.transpose=function(t,a){if(t===a){var n=a[1],r=a[2],o=a[3],u=a[6],l=a[7],e=a[11];t[1]=a[4],t[2]=a[8],t[3]=a[12],t[4]=n,t[6]=a[9],t[7]=a[13],t[8]=r,t[9]=u,t[11]=a[14],t[12]=o,t[13]=l,t[14]=e}else t[0]=a[0],t[1]=a[4],t[2]=a[8],t[3]=a[12],t[4]=a[1],t[5]=a[5],t[6]=a[9],t[7]=a[13],t[8]=a[2],t[9]=a[6],t[10]=a[10],t[11]=a[14],t[12]=a[3],t[13]=a[7],t[14]=a[11],t[15]=a[15];return t},o.SIMD.transpose=function(t,a){var n,r,o,u,l,e,M,s,i,c;return n=SIMD.Float32x4.load(a,0),r=SIMD.Float32x4.load(a,4),o=SIMD.Float32x4.load(a,8),u=SIMD.Float32x4.load(a,12),l=SIMD.Float32x4.shuffle(n,r,0,1,4,5),e=SIMD.Float32x4.shuffle(o,u,0,1,4,5),M=SIMD.Float32x4.shuffle(l,e,0,2,4,6),s=SIMD.Float32x4.shuffle(l,e,1,3,5,7),SIMD.Float32x4.store(t,0,M),SIMD.Float32x4.store(t,4,s),l=SIMD.Float32x4.shuffle(n,r,2,3,6,7),e=SIMD.Float32x4.shuffle(o,u,2,3,6,7),i=SIMD.Float32x4.shuffle(l,e,0,2,4,6),c=SIMD.Float32x4.shuffle(l,e,1,3,5,7),SIMD.Float32x4.store(t,8,i),SIMD.Float32x4.store(t,12,c),t},o.transpose=r.USE_SIMD?o.SIMD.transpose:o.scalar.transpose,o.scalar.invert=function(t,a){var n=a[0],r=a[1],o=a[2],u=a[3],l=a[4],e=a[5],M=a[6],s=a[7],i=a[8],c=a[9],h=a[10],f=a[11],S=a[12],I=a[13],x=a[14],D=a[15],F=n*e-r*l,m=n*M-o*l,d=n*s-u*l,v=r*M-o*e,b=r*s-u*e,p=o*s-u*M,z=i*I-c*S,w=i*x-h*S,E=i*D-f*S,A=c*x-h*I,P=c*D-f*I,L=h*D-f*x,q=F*L-m*P+d*A+v*E-b*w+p*z;return q?(q=1/q,t[0]=(e*L-M*P+s*A)*q,t[1]=(o*P-r*L-u*A)*q,t[2]=(I*p-x*b+D*v)*q,t[3]=(h*b-c*p-f*v)*q,t[4]=(M*E-l*L-s*w)*q,t[5]=(n*L-o*E+u*w)*q,t[6]=(x*d-S*p-D*m)*q,t[7]=(i*p-h*d+f*m)*q,t[8]=(l*P-e*E+s*z)*q,t[9]=(r*E-n*P-u*z)*q,t[10]=(S*b-I*d+D*F)*q,t[11]=(c*d-i*b-f*F)*q,t[12]=(e*w-l*A-M*z)*q,t[13]=(n*A-r*w+o*z)*q,t[14]=(I*m-S*v-x*F)*q,t[15]=(i*v-c*m+h*F)*q,t):null},o.SIMD.invert=function(t,a){var n,r,o,u,l,e,M,s,i,c,h=SIMD.Float32x4.load(a,0),f=SIMD.Float32x4.load(a,4),S=SIMD.Float32x4.load(a,8),I=SIMD.Float32x4.load(a,12);return l=SIMD.Float32x4.shuffle(h,f,0,1,4,5),r=SIMD.Float32x4.shuffle(S,I,0,1,4,5),n=SIMD.Float32x4.shuffle(l,r,0,2,4,6),r=SIMD.Float32x4.shuffle(r,l,1,3,5,7),l=SIMD.Float32x4.shuffle(h,f,2,3,6,7),u=SIMD.Float32x4.shuffle(S,I,2,3,6,7),o=SIMD.Float32x4.shuffle(l,u,0,2,4,6),u=SIMD.Float32x4.shuffle(u,l,1,3,5,7),l=SIMD.Float32x4.mul(o,u),l=SIMD.Float32x4.swizzle(l,1,0,3,2),e=SIMD.Float32x4.mul(r,l),M=SIMD.Float32x4.mul(n,l),l=SIMD.Float32x4.swizzle(l,2,3,0,1),e=SIMD.Float32x4.sub(SIMD.Float32x4.mul(r,l),e),M=SIMD.Float32x4.sub(SIMD.Float32x4.mul(n,l),M),M=SIMD.Float32x4.swizzle(M,2,3,0,1),l=SIMD.Float32x4.mul(r,o),l=SIMD.Float32x4.swizzle(l,1,0,3,2),e=SIMD.Float32x4.add(SIMD.Float32x4.mul(u,l),e),i=SIMD.Float32x4.mul(n,l),l=SIMD.Float32x4.swizzle(l,2,3,0,1),e=SIMD.Float32x4.sub(e,SIMD.Float32x4.mul(u,l)),i=SIMD.Float32x4.sub(SIMD.Float32x4.mul(n,l),i),i=SIMD.Float32x4.swizzle(i,2,3,0,1),l=SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(r,2,3,0,1),u),l=SIMD.Float32x4.swizzle(l,1,0,3,2),o=SIMD.Float32x4.swizzle(o,2,3,0,1),e=SIMD.Float32x4.add(SIMD.Float32x4.mul(o,l),e),s=SIMD.Float32x4.mul(n,l),l=SIMD.Float32x4.swizzle(l,2,3,0,1),e=SIMD.Float32x4.sub(e,SIMD.Float32x4.mul(o,l)),s=SIMD.Float32x4.sub(SIMD.Float32x4.mul(n,l),s),s=SIMD.Float32x4.swizzle(s,2,3,0,1),l=SIMD.Float32x4.mul(n,r),l=SIMD.Float32x4.swizzle(l,1,0,3,2),s=SIMD.Float32x4.add(SIMD.Float32x4.mul(u,l),s),i=SIMD.Float32x4.sub(SIMD.Float32x4.mul(o,l),i),l=SIMD.Float32x4.swizzle(l,2,3,0,1),s=SIMD.Float32x4.sub(SIMD.Float32x4.mul(u,l),s),i=SIMD.Float32x4.sub(i,SIMD.Float32x4.mul(o,l)),l=SIMD.Float32x4.mul(n,u),l=SIMD.Float32x4.swizzle(l,1,0,3,2),M=SIMD.Float32x4.sub(M,SIMD.Float32x4.mul(o,l)),s=SIMD.Float32x4.add(SIMD.Float32x4.mul(r,l),s),l=SIMD.Float32x4.swizzle(l,2,3,0,1),M=SIMD.Float32x4.add(SIMD.Float32x4.mul(o,l),M),s=SIMD.Float32x4.sub(s,SIMD.Float32x4.mul(r,l)),l=SIMD.Float32x4.mul(n,o),l=SIMD.Float32x4.swizzle(l,1,0,3,2),M=SIMD.Float32x4.add(SIMD.Float32x4.mul(u,l),M),i=SIMD.Float32x4.sub(i,SIMD.Float32x4.mul(r,l)),l=SIMD.Float32x4.swizzle(l,2,3,0,1),M=SIMD.Float32x4.sub(M,SIMD.Float32x4.mul(u,l)),i=SIMD.Float32x4.add(SIMD.Float32x4.mul(r,l),i),c=SIMD.Float32x4.mul(n,e),c=SIMD.Float32x4.add(SIMD.Float32x4.swizzle(c,2,3,0,1),c),c=SIMD.Float32x4.add(SIMD.Float32x4.swizzle(c,1,0,3,2),c),l=SIMD.Float32x4.reciprocalApproximation(c),c=SIMD.Float32x4.sub(SIMD.Float32x4.add(l,l),SIMD.Float32x4.mul(c,SIMD.Float32x4.mul(l,l))),(c=SIMD.Float32x4.swizzle(c,0,0,0,0))?(SIMD.Float32x4.store(t,0,SIMD.Float32x4.mul(c,e)),SIMD.Float32x4.store(t,4,SIMD.Float32x4.mul(c,M)),SIMD.Float32x4.store(t,8,SIMD.Float32x4.mul(c,s)),SIMD.Float32x4.store(t,12,SIMD.Float32x4.mul(c,i)),t):null},o.invert=r.USE_SIMD?o.SIMD.invert:o.scalar.invert,o.scalar.adjoint=function(t,a){var n=a[0],r=a[1],o=a[2],u=a[3],l=a[4],e=a[5],M=a[6],s=a[7],i=a[8],c=a[9],h=a[10],f=a[11],S=a[12],I=a[13],x=a[14],D=a[15];return t[0]=e*(h*D-f*x)-c*(M*D-s*x)+I*(M*f-s*h),t[1]=-(r*(h*D-f*x)-c*(o*D-u*x)+I*(o*f-u*h)),t[2]=r*(M*D-s*x)-e*(o*D-u*x)+I*(o*s-u*M),t[3]=-(r*(M*f-s*h)-e*(o*f-u*h)+c*(o*s-u*M)),t[4]=-(l*(h*D-f*x)-i*(M*D-s*x)+S*(M*f-s*h)),t[5]=n*(h*D-f*x)-i*(o*D-u*x)+S*(o*f-u*h),t[6]=-(n*(M*D-s*x)-l*(o*D-u*x)+S*(o*s-u*M)),t[7]=n*(M*f-s*h)-l*(o*f-u*h)+i*(o*s-u*M),t[8]=l*(c*D-f*I)-i*(e*D-s*I)+S*(e*f-s*c),t[9]=-(n*(c*D-f*I)-i*(r*D-u*I)+S*(r*f-u*c)),t[10]=n*(e*D-s*I)-l*(r*D-u*I)+S*(r*s-u*e),t[11]=-(n*(e*f-s*c)-l*(r*f-u*c)+i*(r*s-u*e)),t[12]=-(l*(c*x-h*I)-i*(e*x-M*I)+S*(e*h-M*c)),t[13]=n*(c*x-h*I)-i*(r*x-o*I)+S*(r*h-o*c),t[14]=-(n*(e*x-M*I)-l*(r*x-o*I)+S*(r*M-o*e)),t[15]=n*(e*h-M*c)-l*(r*h-o*c)+i*(r*M-o*e),t},o.SIMD.adjoint=function(t,a){var n,r,o,u,l,e,M,s,i,c,h,f,S;return n=SIMD.Float32x4.load(a,0),r=SIMD.Float32x4.load(a,4),o=SIMD.Float32x4.load(a,8),u=SIMD.Float32x4.load(a,12),i=SIMD.Float32x4.shuffle(n,r,0,1,4,5),e=SIMD.Float32x4.shuffle(o,u,0,1,4,5),l=SIMD.Float32x4.shuffle(i,e,0,2,4,6),e=SIMD.Float32x4.shuffle(e,i,1,3,5,7),i=SIMD.Float32x4.shuffle(n,r,2,3,6,7),s=SIMD.Float32x4.shuffle(o,u,2,3,6,7),M=SIMD.Float32x4.shuffle(i,s,0,2,4,6),s=SIMD.Float32x4.shuffle(s,i,1,3,5,7),i=SIMD.Float32x4.mul(M,s),i=SIMD.Float32x4.swizzle(i,1,0,3,2),c=SIMD.Float32x4.mul(e,i),h=SIMD.Float32x4.mul(l,i),i=SIMD.Float32x4.swizzle(i,2,3,0,1),c=SIMD.Float32x4.sub(SIMD.Float32x4.mul(e,i),c),h=SIMD.Float32x4.sub(SIMD.Float32x4.mul(l,i),h),h=SIMD.Float32x4.swizzle(h,2,3,0,1),i=SIMD.Float32x4.mul(e,M),i=SIMD.Float32x4.swizzle(i,1,0,3,2),c=SIMD.Float32x4.add(SIMD.Float32x4.mul(s,i),c),S=SIMD.Float32x4.mul(l,i),i=SIMD.Float32x4.swizzle(i,2,3,0,1),c=SIMD.Float32x4.sub(c,SIMD.Float32x4.mul(s,i)),S=SIMD.Float32x4.sub(SIMD.Float32x4.mul(l,i),S),S=SIMD.Float32x4.swizzle(S,2,3,0,1),i=SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(e,2,3,0,1),s),i=SIMD.Float32x4.swizzle(i,1,0,3,2),M=SIMD.Float32x4.swizzle(M,2,3,0,1),c=SIMD.Float32x4.add(SIMD.Float32x4.mul(M,i),c),f=SIMD.Float32x4.mul(l,i),i=SIMD.Float32x4.swizzle(i,2,3,0,1),c=SIMD.Float32x4.sub(c,SIMD.Float32x4.mul(M,i)),f=SIMD.Float32x4.sub(SIMD.Float32x4.mul(l,i),f),f=SIMD.Float32x4.swizzle(f,2,3,0,1),i=SIMD.Float32x4.mul(l,e),i=SIMD.Float32x4.swizzle(i,1,0,3,2),f=SIMD.Float32x4.add(SIMD.Float32x4.mul(s,i),f),S=SIMD.Float32x4.sub(SIMD.Float32x4.mul(M,i),S),i=SIMD.Float32x4.swizzle(i,2,3,0,1),f=SIMD.Float32x4.sub(SIMD.Float32x4.mul(s,i),f),S=SIMD.Float32x4.sub(S,SIMD.Float32x4.mul(M,i)),i=SIMD.Float32x4.mul(l,s),i=SIMD.Float32x4.swizzle(i,1,0,3,2),h=SIMD.Float32x4.sub(h,SIMD.Float32x4.mul(M,i)),f=SIMD.Float32x4.add(SIMD.Float32x4.mul(e,i),f),i=SIMD.Float32x4.swizzle(i,2,3,0,1),h=SIMD.Float32x4.add(SIMD.Float32x4.mul(M,i),h),f=SIMD.Float32x4.sub(f,SIMD.Float32x4.mul(e,i)),i=SIMD.Float32x4.mul(l,M),i=SIMD.Float32x4.swizzle(i,1,0,3,2),h=SIMD.Float32x4.add(SIMD.Float32x4.mul(s,i),h),S=SIMD.Float32x4.sub(S,SIMD.Float32x4.mul(e,i)),i=SIMD.Float32x4.swizzle(i,2,3,0,1),h=SIMD.Float32x4.sub(h,SIMD.Float32x4.mul(s,i)),S=SIMD.Float32x4.add(SIMD.Float32x4.mul(e,i),S),SIMD.Float32x4.store(t,0,c),SIMD.Float32x4.store(t,4,h),SIMD.Float32x4.store(t,8,f),SIMD.Float32x4.store(t,12,S),t},o.adjoint=r.USE_SIMD?o.SIMD.adjoint:o.scalar.adjoint,o.determinant=function(t){var a=t[0],n=t[1],r=t[2],o=t[3],u=t[4],l=t[5],e=t[6],M=t[7],s=t[8],i=t[9],c=t[10],h=t[11],f=t[12],S=t[13],I=t[14],x=t[15],D=a*l-n*u,F=a*e-r*u,m=a*M-o*u,d=n*e-r*l,v=n*M-o*l,b=r*M-o*e,p=s*S-i*f,z=s*I-c*f,w=s*x-h*f,E=i*I-c*S,A=i*x-h*S,P=c*x-h*I;return D*P-F*A+m*E+d*w-v*z+b*p},o.SIMD.multiply=function(t,a,n){var r=SIMD.Float32x4.load(a,0),o=SIMD.Float32x4.load(a,4),u=SIMD.Float32x4.load(a,8),l=SIMD.Float32x4.load(a,12),e=SIMD.Float32x4.load(n,0),M=SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(e,0,0,0,0),r),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(e,1,1,1,1),o),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(e,2,2,2,2),u),SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(e,3,3,3,3),l))));SIMD.Float32x4.store(t,0,M);var s=SIMD.Float32x4.load(n,4),i=SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s,0,0,0,0),r),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s,1,1,1,1),o),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s,2,2,2,2),u),SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s,3,3,3,3),l))));SIMD.Float32x4.store(t,4,i);var c=SIMD.Float32x4.load(n,8),h=SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c,0,0,0,0),r),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c,1,1,1,1),o),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c,2,2,2,2),u),SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c,3,3,3,3),l))));SIMD.Float32x4.store(t,8,h);var f=SIMD.Float32x4.load(n,12),S=SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(f,0,0,0,0),r),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(f,1,1,1,1),o),SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(f,2,2,2,2),u),SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(f,3,3,3,3),l))));return SIMD.Float32x4.store(t,12,S),t},o.scalar.multiply=function(t,a,n){var r=a[0],o=a[1],u=a[2],l=a[3],e=a[4],M=a[5],s=a[6],i=a[7],c=a[8],h=a[9],f=a[10],S=a[11],I=a[12],x=a[13],D=a[14],F=a[15],m=n[0],d=n[1],v=n[2],b=n[3];return t[0]=m*r+d*e+v*c+b*I,t[1]=m*o+d*M+v*h+b*x,t[2]=m*u+d*s+v*f+b*D,t[3]=m*l+d*i+v*S+b*F,m=n[4],d=n[5],v=n[6],b=n[7],t[4]=m*r+d*e+v*c+b*I,t[5]=m*o+d*M+v*h+b*x,t[6]=m*u+d*s+v*f+b*D,t[7]=m*l+d*i+v*S+b*F,m=n[8],d=n[9],v=n[10],b=n[11],t[8]=m*r+d*e+v*c+b*I,t[9]=m*o+d*M+v*h+b*x,t[10]=m*u+d*s+v*f+b*D,t[11]=m*l+d*i+v*S+b*F,m=n[12],d=n[13],v=n[14],b=n[15],t[12]=m*r+d*e+v*c+b*I,t[13]=m*o+d*M+v*h+b*x,t[14]=m*u+d*s+v*f+b*D,t[15]=m*l+d*i+v*S+b*F,t},o.multiply=r.USE_SIMD?o.SIMD.multiply:o.scalar.multiply,o.mul=o.multiply,o.scalar.translate=function(t,a,n){var r,o,u,l,e,M,s,i,c,h,f,S,I=n[0],x=n[1],D=n[2];return a===t?(t[12]=a[0]*I+a[4]*x+a[8]*D+a[12],t[13]=a[1]*I+a[5]*x+a[9]*D+a[13],t[14]=a[2]*I+a[6]*x+a[10]*D+a[14],t[15]=a[3]*I+a[7]*x+a[11]*D+a[15]):(r=a[0],o=a[1],u=a[2],l=a[3],e=a[4],M=a[5],s=a[6],i=a[7],c=a[8],h=a[9],f=a[10],S=a[11],t[0]=r,t[1]=o,t[2]=u,t[3]=l,t[4]=e,t[5]=M,t[6]=s,t[7]=i,t[8]=c,t[9]=h,t[10]=f,t[11]=S,t[12]=r*I+e*x+c*D+a[12],t[13]=o*I+M*x+h*D+a[13],t[14]=u*I+s*x+f*D+a[14],t[15]=l*I+i*x+S*D+a[15]),t},o.SIMD.translate=function(t,a,n){var r=SIMD.Float32x4.load(a,0),o=SIMD.Float32x4.load(a,4),u=SIMD.Float32x4.load(a,8),l=SIMD.Float32x4.load(a,12),e=SIMD.Float32x4(n[0],n[1],n[2],0);a!==t&&(t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11]),r=SIMD.Float32x4.mul(r,SIMD.Float32x4.swizzle(e,0,0,0,0)),o=SIMD.Float32x4.mul(o,SIMD.Float32x4.swizzle(e,1,1,1,1)),u=SIMD.Float32x4.mul(u,SIMD.Float32x4.swizzle(e,2,2,2,2));var M=SIMD.Float32x4.add(r,SIMD.Float32x4.add(o,SIMD.Float32x4.add(u,l)));return SIMD.Float32x4.store(t,12,M),t},o.translate=r.USE_SIMD?o.SIMD.translate:o.scalar.translate,o.scalar.scale=function(t,a,n){var r=n[0],o=n[1],u=n[2];return t[0]=a[0]*r,t[1]=a[1]*r,t[2]=a[2]*r,t[3]=a[3]*r,t[4]=a[4]*o,t[5]=a[5]*o,t[6]=a[6]*o,t[7]=a[7]*o,t[8]=a[8]*u,t[9]=a[9]*u,t[10]=a[10]*u,t[11]=a[11]*u,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t},o.SIMD.scale=function(t,a,n){var r,o,u,l=SIMD.Float32x4(n[0],n[1],n[2],0);return r=SIMD.Float32x4.load(a,0),SIMD.Float32x4.store(t,0,SIMD.Float32x4.mul(r,SIMD.Float32x4.swizzle(l,0,0,0,0))),o=SIMD.Float32x4.load(a,4),SIMD.Float32x4.store(t,4,SIMD.Float32x4.mul(o,SIMD.Float32x4.swizzle(l,1,1,1,1))),u=SIMD.Float32x4.load(a,8),SIMD.Float32x4.store(t,8,SIMD.Float32x4.mul(u,SIMD.Float32x4.swizzle(l,2,2,2,2))),t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t},o.scale=r.USE_SIMD?o.SIMD.scale:o.scalar.scale,o.rotate=function(t,a,n,o){var u,l,e,M,s,i,c,h,f,S,I,x,D,F,m,d,v,b,p,z,w,E,A,P,L=o[0],q=o[1],R=o[2],N=Math.sqrt(L*L+q*q+R*R);return Math.abs(N)<r.EPSILON?null:(N=1/N,L*=N,q*=N,R*=N,u=Math.sin(n),l=Math.cos(n),e=1-l,M=a[0],s=a[1],i=a[2],c=a[3],h=a[4],f=a[5],S=a[6],I=a[7],x=a[8],D=a[9],F=a[10],m=a[11],d=L*L*e+l,v=q*L*e+R*u,b=R*L*e-q*u,p=L*q*e-R*u,z=q*q*e+l,w=R*q*e+L*u,E=L*R*e+q*u,A=q*R*e-L*u,P=R*R*e+l,t[0]=M*d+h*v+x*b,t[1]=s*d+f*v+D*b,t[2]=i*d+S*v+F*b,t[3]=c*d+I*v+m*b,t[4]=M*p+h*z+x*w,t[5]=s*p+f*z+D*w,t[6]=i*p+S*z+F*w,t[7]=c*p+I*z+m*w,t[8]=M*E+h*A+x*P,t[9]=s*E+f*A+D*P,t[10]=i*E+S*A+F*P,t[11]=c*E+I*A+m*P,a!==t&&(t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15]),t)},o.scalar.rotateX=function(t,a,n){var r=Math.sin(n),o=Math.cos(n),u=a[4],l=a[5],e=a[6],M=a[7],s=a[8],i=a[9],c=a[10],h=a[11];return a!==t&&(t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15]),t[4]=u*o+s*r,t[5]=l*o+i*r,t[6]=e*o+c*r,t[7]=M*o+h*r,t[8]=s*o-u*r,t[9]=i*o-l*r,t[10]=c*o-e*r,t[11]=h*o-M*r,t},o.SIMD.rotateX=function(t,a,n){var r=SIMD.Float32x4.splat(Math.sin(n)),o=SIMD.Float32x4.splat(Math.cos(n));a!==t&&(t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15]);var u=SIMD.Float32x4.load(a,4),l=SIMD.Float32x4.load(a,8);return SIMD.Float32x4.store(t,4,SIMD.Float32x4.add(SIMD.Float32x4.mul(u,o),SIMD.Float32x4.mul(l,r))),SIMD.Float32x4.store(t,8,SIMD.Float32x4.sub(SIMD.Float32x4.mul(l,o),SIMD.Float32x4.mul(u,r))),t},o.rotateX=r.USE_SIMD?o.SIMD.rotateX:o.scalar.rotateX,o.scalar.rotateY=function(t,a,n){var r=Math.sin(n),o=Math.cos(n),u=a[0],l=a[1],e=a[2],M=a[3],s=a[8],i=a[9],c=a[10],h=a[11];return a!==t&&(t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15]),t[0]=u*o-s*r,t[1]=l*o-i*r,t[2]=e*o-c*r,t[3]=M*o-h*r,t[8]=u*r+s*o,t[9]=l*r+i*o,t[10]=e*r+c*o,t[11]=M*r+h*o,t},o.SIMD.rotateY=function(t,a,n){var r=SIMD.Float32x4.splat(Math.sin(n)),o=SIMD.Float32x4.splat(Math.cos(n));a!==t&&(t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15]);var u=SIMD.Float32x4.load(a,0),l=SIMD.Float32x4.load(a,8);return SIMD.Float32x4.store(t,0,SIMD.Float32x4.sub(SIMD.Float32x4.mul(u,o),SIMD.Float32x4.mul(l,r))),SIMD.Float32x4.store(t,8,SIMD.Float32x4.add(SIMD.Float32x4.mul(u,r),SIMD.Float32x4.mul(l,o))),t},o.rotateY=r.USE_SIMD?o.SIMD.rotateY:o.scalar.rotateY,o.scalar.rotateZ=function(t,a,n){var r=Math.sin(n),o=Math.cos(n),u=a[0],l=a[1],e=a[2],M=a[3],s=a[4],i=a[5],c=a[6],h=a[7];return a!==t&&(t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15]),t[0]=u*o+s*r,t[1]=l*o+i*r,t[2]=e*o+c*r,t[3]=M*o+h*r,t[4]=s*o-u*r,t[5]=i*o-l*r,t[6]=c*o-e*r,t[7]=h*o-M*r,t},o.SIMD.rotateZ=function(t,a,n){var r=SIMD.Float32x4.splat(Math.sin(n)),o=SIMD.Float32x4.splat(Math.cos(n));a!==t&&(t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15]);var u=SIMD.Float32x4.load(a,0),l=SIMD.Float32x4.load(a,4);return SIMD.Float32x4.store(t,0,SIMD.Float32x4.add(SIMD.Float32x4.mul(u,o),SIMD.Float32x4.mul(l,r))),SIMD.Float32x4.store(t,4,SIMD.Float32x4.sub(SIMD.Float32x4.mul(l,o),SIMD.Float32x4.mul(u,r))),t},o.rotateZ=r.USE_SIMD?o.SIMD.rotateZ:o.scalar.rotateZ,o.fromTranslation=function(t,a){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=a[0],t[13]=a[1],t[14]=a[2],t[15]=1,t},o.fromScaling=function(t,a){return t[0]=a[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=a[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},o.fromRotation=function(t,a,n){var o,u,l,e=n[0],M=n[1],s=n[2],i=Math.sqrt(e*e+M*M+s*s);return Math.abs(i)<r.EPSILON?null:(i=1/i,e*=i,M*=i,s*=i,o=Math.sin(a),u=Math.cos(a),l=1-u,t[0]=e*e*l+u,t[1]=M*e*l+s*o,t[2]=s*e*l-M*o,t[3]=0,t[4]=e*M*l-s*o,t[5]=M*M*l+u,t[6]=s*M*l+e*o,t[7]=0,t[8]=e*s*l+M*o,t[9]=M*s*l-e*o,t[10]=s*s*l+u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)},o.fromXRotation=function(t,a){var n=Math.sin(a),r=Math.cos(a);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=n,t[7]=0,t[8]=0,t[9]=-n,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},o.fromYRotation=function(t,a){var n=Math.sin(a),r=Math.cos(a);return t[0]=r,t[1]=0,t[2]=-n,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=n,t[9]=0,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},o.fromZRotation=function(t,a){var n=Math.sin(a),r=Math.cos(a);return t[0]=r,t[1]=n,t[2]=0,t[3]=0,t[4]=-n,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},o.fromRotationTranslation=function(t,a,n){var r=a[0],o=a[1],u=a[2],l=a[3],e=r+r,M=o+o,s=u+u,i=r*e,c=r*M,h=r*s,f=o*M,S=o*s,I=u*s,x=l*e,D=l*M,F=l*s;return t[0]=1-(f+I),t[1]=c+F,t[2]=h-D,t[3]=0,t[4]=c-F,t[5]=1-(i+I),t[6]=S+x,t[7]=0,t[8]=h+D,t[9]=S-x,t[10]=1-(i+f),t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t},o.getTranslation=function(t,a){return t[0]=a[12],t[1]=a[13],t[2]=a[14],t},o.getRotation=function(t,a){var n=a[0]+a[5]+a[10],r=0;return n>0?(r=2*Math.sqrt(n+1),t[3]=.25*r,t[0]=(a[6]-a[9])/r,t[1]=(a[8]-a[2])/r,t[2]=(a[1]-a[4])/r):a[0]>a[5]&a[0]>a[10]?(r=2*Math.sqrt(1+a[0]-a[5]-a[10]),t[3]=(a[6]-a[9])/r,t[0]=.25*r,t[1]=(a[1]+a[4])/r,t[2]=(a[8]+a[2])/r):a[5]>a[10]?(r=2*Math.sqrt(1+a[5]-a[0]-a[10]),t[3]=(a[8]-a[2])/r,t[0]=(a[1]+a[4])/r,t[1]=.25*r,t[2]=(a[6]+a[9])/r):(r=2*Math.sqrt(1+a[10]-a[0]-a[5]),t[3]=(a[1]-a[4])/r,t[0]=(a[8]+a[2])/r,t[1]=(a[6]+a[9])/r,t[2]=.25*r),t},o.fromRotationTranslationScale=function(t,a,n,r){var o=a[0],u=a[1],l=a[2],e=a[3],M=o+o,s=u+u,i=l+l,c=o*M,h=o*s,f=o*i,S=u*s,I=u*i,x=l*i,D=e*M,F=e*s,m=e*i,d=r[0],v=r[1],b=r[2];return t[0]=(1-(S+x))*d,t[1]=(h+m)*d,t[2]=(f-F)*d,t[3]=0,t[4]=(h-m)*v,t[5]=(1-(c+x))*v,t[6]=(I+D)*v,t[7]=0,t[8]=(f+F)*b,t[9]=(I-D)*b,t[10]=(1-(c+S))*b,t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t},o.fromRotationTranslationScaleOrigin=function(t,a,n,r,o){
var u=a[0],l=a[1],e=a[2],M=a[3],s=u+u,i=l+l,c=e+e,h=u*s,f=u*i,S=u*c,I=l*i,x=l*c,D=e*c,F=M*s,m=M*i,d=M*c,v=r[0],b=r[1],p=r[2],z=o[0],w=o[1],E=o[2];return t[0]=(1-(I+D))*v,t[1]=(f+d)*v,t[2]=(S-m)*v,t[3]=0,t[4]=(f-d)*b,t[5]=(1-(h+D))*b,t[6]=(x+F)*b,t[7]=0,t[8]=(S+m)*p,t[9]=(x-F)*p,t[10]=(1-(h+I))*p,t[11]=0,t[12]=n[0]+z-(t[0]*z+t[4]*w+t[8]*E),t[13]=n[1]+w-(t[1]*z+t[5]*w+t[9]*E),t[14]=n[2]+E-(t[2]*z+t[6]*w+t[10]*E),t[15]=1,t},o.fromQuat=function(t,a){var n=a[0],r=a[1],o=a[2],u=a[3],l=n+n,e=r+r,M=o+o,s=n*l,i=r*l,c=r*e,h=o*l,f=o*e,S=o*M,I=u*l,x=u*e,D=u*M;return t[0]=1-c-S,t[1]=i+D,t[2]=h-x,t[3]=0,t[4]=i-D,t[5]=1-s-S,t[6]=f+I,t[7]=0,t[8]=h+x,t[9]=f-I,t[10]=1-s-c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},o.frustum=function(t,a,n,r,o,u,l){var e=1/(n-a),M=1/(o-r),s=1/(u-l);return t[0]=2*u*e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*u*M,t[6]=0,t[7]=0,t[8]=(n+a)*e,t[9]=(o+r)*M,t[10]=(l+u)*s,t[11]=-1,t[12]=0,t[13]=0,t[14]=l*u*2*s,t[15]=0,t},o.perspective=function(t,a,n,r,o){var u=1/Math.tan(a/2),l=1/(r-o);return t[0]=u/n,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=u,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(o+r)*l,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*o*r*l,t[15]=0,t},o.perspectiveFromFieldOfView=function(t,a,n,r){var o=Math.tan(a.upDegrees*Math.PI/180),u=Math.tan(a.downDegrees*Math.PI/180),l=Math.tan(a.leftDegrees*Math.PI/180),e=Math.tan(a.rightDegrees*Math.PI/180),M=2/(l+e),s=2/(o+u);return t[0]=M,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=s,t[6]=0,t[7]=0,t[8]=-((l-e)*M*.5),t[9]=(o-u)*s*.5,t[10]=r/(n-r),t[11]=-1,t[12]=0,t[13]=0,t[14]=r*n/(n-r),t[15]=0,t},o.ortho=function(t,a,n,r,o,u,l){var e=1/(a-n),M=1/(r-o),s=1/(u-l);return t[0]=-2*e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*M,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*s,t[11]=0,t[12]=(a+n)*e,t[13]=(o+r)*M,t[14]=(l+u)*s,t[15]=1,t},o.lookAt=function(t,a,n,u){var l,e,M,s,i,c,h,f,S,I,x=a[0],D=a[1],F=a[2],m=u[0],d=u[1],v=u[2],b=n[0],p=n[1],z=n[2];return Math.abs(x-b)<r.EPSILON&&Math.abs(D-p)<r.EPSILON&&Math.abs(F-z)<r.EPSILON?o.identity(t):(h=x-b,f=D-p,S=F-z,I=1/Math.sqrt(h*h+f*f+S*S),h*=I,f*=I,S*=I,l=d*S-v*f,e=v*h-m*S,M=m*f-d*h,I=Math.sqrt(l*l+e*e+M*M),I?(I=1/I,l*=I,e*=I,M*=I):(l=0,e=0,M=0),s=f*M-S*e,i=S*l-h*M,c=h*e-f*l,I=Math.sqrt(s*s+i*i+c*c),I?(I=1/I,s*=I,i*=I,c*=I):(s=0,i=0,c=0),t[0]=l,t[1]=s,t[2]=h,t[3]=0,t[4]=e,t[5]=i,t[6]=f,t[7]=0,t[8]=M,t[9]=c,t[10]=S,t[11]=0,t[12]=-(l*x+e*D+M*F),t[13]=-(s*x+i*D+c*F),t[14]=-(h*x+f*D+S*F),t[15]=1,t)},o.str=function(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"},o.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+Math.pow(t[6],2)+Math.pow(t[7],2)+Math.pow(t[8],2)+Math.pow(t[9],2)+Math.pow(t[10],2)+Math.pow(t[11],2)+Math.pow(t[12],2)+Math.pow(t[13],2)+Math.pow(t[14],2)+Math.pow(t[15],2))},o.add=function(t,a,n){return t[0]=a[0]+n[0],t[1]=a[1]+n[1],t[2]=a[2]+n[2],t[3]=a[3]+n[3],t[4]=a[4]+n[4],t[5]=a[5]+n[5],t[6]=a[6]+n[6],t[7]=a[7]+n[7],t[8]=a[8]+n[8],t[9]=a[9]+n[9],t[10]=a[10]+n[10],t[11]=a[11]+n[11],t[12]=a[12]+n[12],t[13]=a[13]+n[13],t[14]=a[14]+n[14],t[15]=a[15]+n[15],t},o.subtract=function(t,a,n){return t[0]=a[0]-n[0],t[1]=a[1]-n[1],t[2]=a[2]-n[2],t[3]=a[3]-n[3],t[4]=a[4]-n[4],t[5]=a[5]-n[5],t[6]=a[6]-n[6],t[7]=a[7]-n[7],t[8]=a[8]-n[8],t[9]=a[9]-n[9],t[10]=a[10]-n[10],t[11]=a[11]-n[11],t[12]=a[12]-n[12],t[13]=a[13]-n[13],t[14]=a[14]-n[14],t[15]=a[15]-n[15],t},o.sub=o.subtract,o.multiplyScalar=function(t,a,n){return t[0]=a[0]*n,t[1]=a[1]*n,t[2]=a[2]*n,t[3]=a[3]*n,t[4]=a[4]*n,t[5]=a[5]*n,t[6]=a[6]*n,t[7]=a[7]*n,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12]*n,t[13]=a[13]*n,t[14]=a[14]*n,t[15]=a[15]*n,t},o.multiplyScalarAndAdd=function(t,a,n,r){return t[0]=a[0]+n[0]*r,t[1]=a[1]+n[1]*r,t[2]=a[2]+n[2]*r,t[3]=a[3]+n[3]*r,t[4]=a[4]+n[4]*r,t[5]=a[5]+n[5]*r,t[6]=a[6]+n[6]*r,t[7]=a[7]+n[7]*r,t[8]=a[8]+n[8]*r,t[9]=a[9]+n[9]*r,t[10]=a[10]+n[10]*r,t[11]=a[11]+n[11]*r,t[12]=a[12]+n[12]*r,t[13]=a[13]+n[13]*r,t[14]=a[14]+n[14]*r,t[15]=a[15]+n[15]*r,t},o.exactEquals=function(t,a){return t[0]===a[0]&&t[1]===a[1]&&t[2]===a[2]&&t[3]===a[3]&&t[4]===a[4]&&t[5]===a[5]&&t[6]===a[6]&&t[7]===a[7]&&t[8]===a[8]&&t[9]===a[9]&&t[10]===a[10]&&t[11]===a[11]&&t[12]===a[12]&&t[13]===a[13]&&t[14]===a[14]&&t[15]===a[15]},o.equals=function(t,a){var n=t[0],o=t[1],u=t[2],l=t[3],e=t[4],M=t[5],s=t[6],i=t[7],c=t[8],h=t[9],f=t[10],S=t[11],I=t[12],x=t[13],D=t[14],F=t[15],m=a[0],d=a[1],v=a[2],b=a[3],p=a[4],z=a[5],w=a[6],E=a[7],A=a[8],P=a[9],L=a[10],q=a[11],R=a[12],N=a[13],O=a[14],Y=a[15];return Math.abs(n-m)<=r.EPSILON*Math.max(1,Math.abs(n),Math.abs(m))&&Math.abs(o-d)<=r.EPSILON*Math.max(1,Math.abs(o),Math.abs(d))&&Math.abs(u-v)<=r.EPSILON*Math.max(1,Math.abs(u),Math.abs(v))&&Math.abs(l-b)<=r.EPSILON*Math.max(1,Math.abs(l),Math.abs(b))&&Math.abs(e-p)<=r.EPSILON*Math.max(1,Math.abs(e),Math.abs(p))&&Math.abs(M-z)<=r.EPSILON*Math.max(1,Math.abs(M),Math.abs(z))&&Math.abs(s-w)<=r.EPSILON*Math.max(1,Math.abs(s),Math.abs(w))&&Math.abs(i-E)<=r.EPSILON*Math.max(1,Math.abs(i),Math.abs(E))&&Math.abs(c-A)<=r.EPSILON*Math.max(1,Math.abs(c),Math.abs(A))&&Math.abs(h-P)<=r.EPSILON*Math.max(1,Math.abs(h),Math.abs(P))&&Math.abs(f-L)<=r.EPSILON*Math.max(1,Math.abs(f),Math.abs(L))&&Math.abs(S-q)<=r.EPSILON*Math.max(1,Math.abs(S),Math.abs(q))&&Math.abs(I-R)<=r.EPSILON*Math.max(1,Math.abs(I),Math.abs(R))&&Math.abs(x-N)<=r.EPSILON*Math.max(1,Math.abs(x),Math.abs(N))&&Math.abs(D-O)<=r.EPSILON*Math.max(1,Math.abs(D),Math.abs(O))&&Math.abs(F-Y)<=r.EPSILON*Math.max(1,Math.abs(F),Math.abs(Y))},t.exports=o},function(t,a,n){var r=n(1),o=n(4),u=n(7),l=n(8),e={};e.create=function(){var t=new r.ARRAY_TYPE(4);return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},e.rotationTo=function(){var t=u.create(),a=u.fromValues(1,0,0),n=u.fromValues(0,1,0);return function(r,o,l){var M=u.dot(o,l);return-.999999>M?(u.cross(t,a,o),u.length(t)<1e-6&&u.cross(t,n,o),u.normalize(t,t),e.setAxisAngle(r,t,Math.PI),r):M>.999999?(r[0]=0,r[1]=0,r[2]=0,r[3]=1,r):(u.cross(t,o,l),r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=1+M,e.normalize(r,r))}}(),e.setAxes=function(){var t=o.create();return function(a,n,r,o){return t[0]=r[0],t[3]=r[1],t[6]=r[2],t[1]=o[0],t[4]=o[1],t[7]=o[2],t[2]=-n[0],t[5]=-n[1],t[8]=-n[2],e.normalize(a,e.fromMat3(a,t))}}(),e.clone=l.clone,e.fromValues=l.fromValues,e.copy=l.copy,e.set=l.set,e.identity=function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},e.setAxisAngle=function(t,a,n){n=.5*n;var r=Math.sin(n);return t[0]=r*a[0],t[1]=r*a[1],t[2]=r*a[2],t[3]=Math.cos(n),t},e.getAxisAngle=function(t,a){var n=2*Math.acos(a[3]),r=Math.sin(n/2);return 0!=r?(t[0]=a[0]/r,t[1]=a[1]/r,t[2]=a[2]/r):(t[0]=1,t[1]=0,t[2]=0),n},e.add=l.add,e.multiply=function(t,a,n){var r=a[0],o=a[1],u=a[2],l=a[3],e=n[0],M=n[1],s=n[2],i=n[3];return t[0]=r*i+l*e+o*s-u*M,t[1]=o*i+l*M+u*e-r*s,t[2]=u*i+l*s+r*M-o*e,t[3]=l*i-r*e-o*M-u*s,t},e.mul=e.multiply,e.scale=l.scale,e.rotateX=function(t,a,n){n*=.5;var r=a[0],o=a[1],u=a[2],l=a[3],e=Math.sin(n),M=Math.cos(n);return t[0]=r*M+l*e,t[1]=o*M+u*e,t[2]=u*M-o*e,t[3]=l*M-r*e,t},e.rotateY=function(t,a,n){n*=.5;var r=a[0],o=a[1],u=a[2],l=a[3],e=Math.sin(n),M=Math.cos(n);return t[0]=r*M-u*e,t[1]=o*M+l*e,t[2]=u*M+r*e,t[3]=l*M-o*e,t},e.rotateZ=function(t,a,n){n*=.5;var r=a[0],o=a[1],u=a[2],l=a[3],e=Math.sin(n),M=Math.cos(n);return t[0]=r*M+o*e,t[1]=o*M-r*e,t[2]=u*M+l*e,t[3]=l*M-u*e,t},e.calculateW=function(t,a){var n=a[0],r=a[1],o=a[2];return t[0]=n,t[1]=r,t[2]=o,t[3]=Math.sqrt(Math.abs(1-n*n-r*r-o*o)),t},e.dot=l.dot,e.lerp=l.lerp,e.slerp=function(t,a,n,r){var o,u,l,e,M,s=a[0],i=a[1],c=a[2],h=a[3],f=n[0],S=n[1],I=n[2],x=n[3];return u=s*f+i*S+c*I+h*x,0>u&&(u=-u,f=-f,S=-S,I=-I,x=-x),1-u>1e-6?(o=Math.acos(u),l=Math.sin(o),e=Math.sin((1-r)*o)/l,M=Math.sin(r*o)/l):(e=1-r,M=r),t[0]=e*s+M*f,t[1]=e*i+M*S,t[2]=e*c+M*I,t[3]=e*h+M*x,t},e.sqlerp=function(){var t=e.create(),a=e.create();return function(n,r,o,u,l,M){return e.slerp(t,r,l,M),e.slerp(a,o,u,M),e.slerp(n,t,a,2*M*(1-M)),n}}(),e.invert=function(t,a){var n=a[0],r=a[1],o=a[2],u=a[3],l=n*n+r*r+o*o+u*u,e=l?1/l:0;return t[0]=-n*e,t[1]=-r*e,t[2]=-o*e,t[3]=u*e,t},e.conjugate=function(t,a){return t[0]=-a[0],t[1]=-a[1],t[2]=-a[2],t[3]=a[3],t},e.length=l.length,e.len=e.length,e.squaredLength=l.squaredLength,e.sqrLen=e.squaredLength,e.normalize=l.normalize,e.fromMat3=function(t,a){var n,r=a[0]+a[4]+a[8];if(r>0)n=Math.sqrt(r+1),t[3]=.5*n,n=.5/n,t[0]=(a[5]-a[7])*n,t[1]=(a[6]-a[2])*n,t[2]=(a[1]-a[3])*n;else{var o=0;a[4]>a[0]&&(o=1),a[8]>a[3*o+o]&&(o=2);var u=(o+1)%3,l=(o+2)%3;n=Math.sqrt(a[3*o+o]-a[3*u+u]-a[3*l+l]+1),t[o]=.5*n,n=.5/n,t[3]=(a[3*u+l]-a[3*l+u])*n,t[u]=(a[3*u+o]+a[3*o+u])*n,t[l]=(a[3*l+o]+a[3*o+l])*n}return t},e.str=function(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},e.exactEquals=l.exactEquals,e.equals=l.equals,t.exports=e},function(t,a,n){var r=n(1),o={};o.create=function(){var t=new r.ARRAY_TYPE(3);return t[0]=0,t[1]=0,t[2]=0,t},o.clone=function(t){var a=new r.ARRAY_TYPE(3);return a[0]=t[0],a[1]=t[1],a[2]=t[2],a},o.fromValues=function(t,a,n){var o=new r.ARRAY_TYPE(3);return o[0]=t,o[1]=a,o[2]=n,o},o.copy=function(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t},o.set=function(t,a,n,r){return t[0]=a,t[1]=n,t[2]=r,t},o.add=function(t,a,n){return t[0]=a[0]+n[0],t[1]=a[1]+n[1],t[2]=a[2]+n[2],t},o.subtract=function(t,a,n){return t[0]=a[0]-n[0],t[1]=a[1]-n[1],t[2]=a[2]-n[2],t},o.sub=o.subtract,o.multiply=function(t,a,n){return t[0]=a[0]*n[0],t[1]=a[1]*n[1],t[2]=a[2]*n[2],t},o.mul=o.multiply,o.divide=function(t,a,n){return t[0]=a[0]/n[0],t[1]=a[1]/n[1],t[2]=a[2]/n[2],t},o.div=o.divide,o.ceil=function(t,a){return t[0]=Math.ceil(a[0]),t[1]=Math.ceil(a[1]),t[2]=Math.ceil(a[2]),t},o.floor=function(t,a){return t[0]=Math.floor(a[0]),t[1]=Math.floor(a[1]),t[2]=Math.floor(a[2]),t},o.min=function(t,a,n){return t[0]=Math.min(a[0],n[0]),t[1]=Math.min(a[1],n[1]),t[2]=Math.min(a[2],n[2]),t},o.max=function(t,a,n){return t[0]=Math.max(a[0],n[0]),t[1]=Math.max(a[1],n[1]),t[2]=Math.max(a[2],n[2]),t},o.round=function(t,a){return t[0]=Math.round(a[0]),t[1]=Math.round(a[1]),t[2]=Math.round(a[2]),t},o.scale=function(t,a,n){return t[0]=a[0]*n,t[1]=a[1]*n,t[2]=a[2]*n,t},o.scaleAndAdd=function(t,a,n,r){return t[0]=a[0]+n[0]*r,t[1]=a[1]+n[1]*r,t[2]=a[2]+n[2]*r,t},o.distance=function(t,a){var n=a[0]-t[0],r=a[1]-t[1],o=a[2]-t[2];return Math.sqrt(n*n+r*r+o*o)},o.dist=o.distance,o.squaredDistance=function(t,a){var n=a[0]-t[0],r=a[1]-t[1],o=a[2]-t[2];return n*n+r*r+o*o},o.sqrDist=o.squaredDistance,o.length=function(t){var a=t[0],n=t[1],r=t[2];return Math.sqrt(a*a+n*n+r*r)},o.len=o.length,o.squaredLength=function(t){var a=t[0],n=t[1],r=t[2];return a*a+n*n+r*r},o.sqrLen=o.squaredLength,o.negate=function(t,a){return t[0]=-a[0],t[1]=-a[1],t[2]=-a[2],t},o.inverse=function(t,a){return t[0]=1/a[0],t[1]=1/a[1],t[2]=1/a[2],t},o.normalize=function(t,a){var n=a[0],r=a[1],o=a[2],u=n*n+r*r+o*o;return u>0&&(u=1/Math.sqrt(u),t[0]=a[0]*u,t[1]=a[1]*u,t[2]=a[2]*u),t},o.dot=function(t,a){return t[0]*a[0]+t[1]*a[1]+t[2]*a[2]},o.cross=function(t,a,n){var r=a[0],o=a[1],u=a[2],l=n[0],e=n[1],M=n[2];return t[0]=o*M-u*e,t[1]=u*l-r*M,t[2]=r*e-o*l,t},o.lerp=function(t,a,n,r){var o=a[0],u=a[1],l=a[2];return t[0]=o+r*(n[0]-o),t[1]=u+r*(n[1]-u),t[2]=l+r*(n[2]-l),t},o.hermite=function(t,a,n,r,o,u){var l=u*u,e=l*(2*u-3)+1,M=l*(u-2)+u,s=l*(u-1),i=l*(3-2*u);return t[0]=a[0]*e+n[0]*M+r[0]*s+o[0]*i,t[1]=a[1]*e+n[1]*M+r[1]*s+o[1]*i,t[2]=a[2]*e+n[2]*M+r[2]*s+o[2]*i,t},o.bezier=function(t,a,n,r,o,u){var l=1-u,e=l*l,M=u*u,s=e*l,i=3*u*e,c=3*M*l,h=M*u;return t[0]=a[0]*s+n[0]*i+r[0]*c+o[0]*h,t[1]=a[1]*s+n[1]*i+r[1]*c+o[1]*h,t[2]=a[2]*s+n[2]*i+r[2]*c+o[2]*h,t},o.random=function(t,a){a=a||1;var n=2*r.RANDOM()*Math.PI,o=2*r.RANDOM()-1,u=Math.sqrt(1-o*o)*a;return t[0]=Math.cos(n)*u,t[1]=Math.sin(n)*u,t[2]=o*a,t},o.transformMat4=function(t,a,n){var r=a[0],o=a[1],u=a[2],l=n[3]*r+n[7]*o+n[11]*u+n[15];return l=l||1,t[0]=(n[0]*r+n[4]*o+n[8]*u+n[12])/l,t[1]=(n[1]*r+n[5]*o+n[9]*u+n[13])/l,t[2]=(n[2]*r+n[6]*o+n[10]*u+n[14])/l,t},o.transformMat3=function(t,a,n){var r=a[0],o=a[1],u=a[2];return t[0]=r*n[0]+o*n[3]+u*n[6],t[1]=r*n[1]+o*n[4]+u*n[7],t[2]=r*n[2]+o*n[5]+u*n[8],t},o.transformQuat=function(t,a,n){var r=a[0],o=a[1],u=a[2],l=n[0],e=n[1],M=n[2],s=n[3],i=s*r+e*u-M*o,c=s*o+M*r-l*u,h=s*u+l*o-e*r,f=-l*r-e*o-M*u;return t[0]=i*s+f*-l+c*-M-h*-e,t[1]=c*s+f*-e+h*-l-i*-M,t[2]=h*s+f*-M+i*-e-c*-l,t},o.rotateX=function(t,a,n,r){var o=[],u=[];return o[0]=a[0]-n[0],o[1]=a[1]-n[1],o[2]=a[2]-n[2],u[0]=o[0],u[1]=o[1]*Math.cos(r)-o[2]*Math.sin(r),u[2]=o[1]*Math.sin(r)+o[2]*Math.cos(r),t[0]=u[0]+n[0],t[1]=u[1]+n[1],t[2]=u[2]+n[2],t},o.rotateY=function(t,a,n,r){var o=[],u=[];return o[0]=a[0]-n[0],o[1]=a[1]-n[1],o[2]=a[2]-n[2],u[0]=o[2]*Math.sin(r)+o[0]*Math.cos(r),u[1]=o[1],u[2]=o[2]*Math.cos(r)-o[0]*Math.sin(r),t[0]=u[0]+n[0],t[1]=u[1]+n[1],t[2]=u[2]+n[2],t},o.rotateZ=function(t,a,n,r){var o=[],u=[];return o[0]=a[0]-n[0],o[1]=a[1]-n[1],o[2]=a[2]-n[2],u[0]=o[0]*Math.cos(r)-o[1]*Math.sin(r),u[1]=o[0]*Math.sin(r)+o[1]*Math.cos(r),u[2]=o[2],t[0]=u[0]+n[0],t[1]=u[1]+n[1],t[2]=u[2]+n[2],t},o.forEach=function(){var t=o.create();return function(a,n,r,o,u,l){var e,M;for(n||(n=3),r||(r=0),M=o?Math.min(o*n+r,a.length):a.length,e=r;M>e;e+=n)t[0]=a[e],t[1]=a[e+1],t[2]=a[e+2],u(t,t,l),a[e]=t[0],a[e+1]=t[1],a[e+2]=t[2];return a}}(),o.angle=function(t,a){var n=o.fromValues(t[0],t[1],t[2]),r=o.fromValues(a[0],a[1],a[2]);o.normalize(n,n),o.normalize(r,r);var u=o.dot(n,r);return u>1?0:Math.acos(u)},o.str=function(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"},o.exactEquals=function(t,a){return t[0]===a[0]&&t[1]===a[1]&&t[2]===a[2]},o.equals=function(t,a){var n=t[0],o=t[1],u=t[2],l=a[0],e=a[1],M=a[2];return Math.abs(n-l)<=r.EPSILON*Math.max(1,Math.abs(n),Math.abs(l))&&Math.abs(o-e)<=r.EPSILON*Math.max(1,Math.abs(o),Math.abs(e))&&Math.abs(u-M)<=r.EPSILON*Math.max(1,Math.abs(u),Math.abs(M))},t.exports=o},function(t,a,n){var r=n(1),o={};o.create=function(){var t=new r.ARRAY_TYPE(4);return t[0]=0,t[1]=0,t[2]=0,t[3]=0,t},o.clone=function(t){var a=new r.ARRAY_TYPE(4);return a[0]=t[0],a[1]=t[1],a[2]=t[2],a[3]=t[3],a},o.fromValues=function(t,a,n,o){var u=new r.ARRAY_TYPE(4);return u[0]=t,u[1]=a,u[2]=n,u[3]=o,u},o.copy=function(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t},o.set=function(t,a,n,r,o){return t[0]=a,t[1]=n,t[2]=r,t[3]=o,t},o.add=function(t,a,n){return t[0]=a[0]+n[0],t[1]=a[1]+n[1],t[2]=a[2]+n[2],t[3]=a[3]+n[3],t},o.subtract=function(t,a,n){return t[0]=a[0]-n[0],t[1]=a[1]-n[1],t[2]=a[2]-n[2],t[3]=a[3]-n[3],t},o.sub=o.subtract,o.multiply=function(t,a,n){return t[0]=a[0]*n[0],t[1]=a[1]*n[1],t[2]=a[2]*n[2],t[3]=a[3]*n[3],t},o.mul=o.multiply,o.divide=function(t,a,n){return t[0]=a[0]/n[0],t[1]=a[1]/n[1],t[2]=a[2]/n[2],t[3]=a[3]/n[3],t},o.div=o.divide,o.ceil=function(t,a){return t[0]=Math.ceil(a[0]),t[1]=Math.ceil(a[1]),t[2]=Math.ceil(a[2]),t[3]=Math.ceil(a[3]),t},o.floor=function(t,a){return t[0]=Math.floor(a[0]),t[1]=Math.floor(a[1]),t[2]=Math.floor(a[2]),t[3]=Math.floor(a[3]),t},o.min=function(t,a,n){return t[0]=Math.min(a[0],n[0]),t[1]=Math.min(a[1],n[1]),t[2]=Math.min(a[2],n[2]),t[3]=Math.min(a[3],n[3]),t},o.max=function(t,a,n){return t[0]=Math.max(a[0],n[0]),t[1]=Math.max(a[1],n[1]),t[2]=Math.max(a[2],n[2]),t[3]=Math.max(a[3],n[3]),t},o.round=function(t,a){return t[0]=Math.round(a[0]),t[1]=Math.round(a[1]),t[2]=Math.round(a[2]),t[3]=Math.round(a[3]),t},o.scale=function(t,a,n){return t[0]=a[0]*n,t[1]=a[1]*n,t[2]=a[2]*n,t[3]=a[3]*n,t},o.scaleAndAdd=function(t,a,n,r){return t[0]=a[0]+n[0]*r,t[1]=a[1]+n[1]*r,t[2]=a[2]+n[2]*r,t[3]=a[3]+n[3]*r,t},o.distance=function(t,a){var n=a[0]-t[0],r=a[1]-t[1],o=a[2]-t[2],u=a[3]-t[3];return Math.sqrt(n*n+r*r+o*o+u*u)},o.dist=o.distance,o.squaredDistance=function(t,a){var n=a[0]-t[0],r=a[1]-t[1],o=a[2]-t[2],u=a[3]-t[3];return n*n+r*r+o*o+u*u},o.sqrDist=o.squaredDistance,o.length=function(t){var a=t[0],n=t[1],r=t[2],o=t[3];return Math.sqrt(a*a+n*n+r*r+o*o)},o.len=o.length,o.squaredLength=function(t){var a=t[0],n=t[1],r=t[2],o=t[3];return a*a+n*n+r*r+o*o},o.sqrLen=o.squaredLength,o.negate=function(t,a){return t[0]=-a[0],t[1]=-a[1],t[2]=-a[2],t[3]=-a[3],t},o.inverse=function(t,a){return t[0]=1/a[0],t[1]=1/a[1],t[2]=1/a[2],t[3]=1/a[3],t},o.normalize=function(t,a){var n=a[0],r=a[1],o=a[2],u=a[3],l=n*n+r*r+o*o+u*u;return l>0&&(l=1/Math.sqrt(l),t[0]=n*l,t[1]=r*l,t[2]=o*l,t[3]=u*l),t},o.dot=function(t,a){return t[0]*a[0]+t[1]*a[1]+t[2]*a[2]+t[3]*a[3]},o.lerp=function(t,a,n,r){var o=a[0],u=a[1],l=a[2],e=a[3];return t[0]=o+r*(n[0]-o),t[1]=u+r*(n[1]-u),t[2]=l+r*(n[2]-l),t[3]=e+r*(n[3]-e),t},o.random=function(t,a){return a=a||1,t[0]=r.RANDOM(),t[1]=r.RANDOM(),t[2]=r.RANDOM(),t[3]=r.RANDOM(),o.normalize(t,t),o.scale(t,t,a),t},o.transformMat4=function(t,a,n){var r=a[0],o=a[1],u=a[2],l=a[3];return t[0]=n[0]*r+n[4]*o+n[8]*u+n[12]*l,t[1]=n[1]*r+n[5]*o+n[9]*u+n[13]*l,t[2]=n[2]*r+n[6]*o+n[10]*u+n[14]*l,t[3]=n[3]*r+n[7]*o+n[11]*u+n[15]*l,t},o.transformQuat=function(t,a,n){var r=a[0],o=a[1],u=a[2],l=n[0],e=n[1],M=n[2],s=n[3],i=s*r+e*u-M*o,c=s*o+M*r-l*u,h=s*u+l*o-e*r,f=-l*r-e*o-M*u;return t[0]=i*s+f*-l+c*-M-h*-e,t[1]=c*s+f*-e+h*-l-i*-M,t[2]=h*s+f*-M+i*-e-c*-l,t[3]=a[3],t},o.forEach=function(){var t=o.create();return function(a,n,r,o,u,l){var e,M;for(n||(n=4),r||(r=0),M=o?Math.min(o*n+r,a.length):a.length,e=r;M>e;e+=n)t[0]=a[e],t[1]=a[e+1],t[2]=a[e+2],t[3]=a[e+3],u(t,t,l),a[e]=t[0],a[e+1]=t[1],a[e+2]=t[2],a[e+3]=t[3];return a}}(),o.str=function(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},o.exactEquals=function(t,a){return t[0]===a[0]&&t[1]===a[1]&&t[2]===a[2]&&t[3]===a[3]},o.equals=function(t,a){var n=t[0],o=t[1],u=t[2],l=t[3],e=a[0],M=a[1],s=a[2],i=a[3];return Math.abs(n-e)<=r.EPSILON*Math.max(1,Math.abs(n),Math.abs(e))&&Math.abs(o-M)<=r.EPSILON*Math.max(1,Math.abs(o),Math.abs(M))&&Math.abs(u-s)<=r.EPSILON*Math.max(1,Math.abs(u),Math.abs(s))&&Math.abs(l-i)<=r.EPSILON*Math.max(1,Math.abs(l),Math.abs(i))},t.exports=o},function(t,a,n){var r=n(1),o={};o.create=function(){var t=new r.ARRAY_TYPE(2);return t[0]=0,t[1]=0,t},o.clone=function(t){var a=new r.ARRAY_TYPE(2);return a[0]=t[0],a[1]=t[1],a},o.fromValues=function(t,a){var n=new r.ARRAY_TYPE(2);return n[0]=t,n[1]=a,n},o.copy=function(t,a){return t[0]=a[0],t[1]=a[1],t},o.set=function(t,a,n){return t[0]=a,t[1]=n,t},o.add=function(t,a,n){return t[0]=a[0]+n[0],t[1]=a[1]+n[1],t},o.subtract=function(t,a,n){return t[0]=a[0]-n[0],t[1]=a[1]-n[1],t},o.sub=o.subtract,o.multiply=function(t,a,n){return t[0]=a[0]*n[0],t[1]=a[1]*n[1],t},o.mul=o.multiply,o.divide=function(t,a,n){return t[0]=a[0]/n[0],t[1]=a[1]/n[1],t},o.div=o.divide,o.ceil=function(t,a){return t[0]=Math.ceil(a[0]),t[1]=Math.ceil(a[1]),t},o.floor=function(t,a){return t[0]=Math.floor(a[0]),t[1]=Math.floor(a[1]),t},o.min=function(t,a,n){return t[0]=Math.min(a[0],n[0]),t[1]=Math.min(a[1],n[1]),t},o.max=function(t,a,n){return t[0]=Math.max(a[0],n[0]),t[1]=Math.max(a[1],n[1]),t},o.round=function(t,a){return t[0]=Math.round(a[0]),t[1]=Math.round(a[1]),t},o.scale=function(t,a,n){return t[0]=a[0]*n,t[1]=a[1]*n,t},o.scaleAndAdd=function(t,a,n,r){return t[0]=a[0]+n[0]*r,t[1]=a[1]+n[1]*r,t},o.distance=function(t,a){var n=a[0]-t[0],r=a[1]-t[1];return Math.sqrt(n*n+r*r)},o.dist=o.distance,o.squaredDistance=function(t,a){var n=a[0]-t[0],r=a[1]-t[1];return n*n+r*r},o.sqrDist=o.squaredDistance,o.length=function(t){var a=t[0],n=t[1];return Math.sqrt(a*a+n*n)},o.len=o.length,o.squaredLength=function(t){var a=t[0],n=t[1];return a*a+n*n},o.sqrLen=o.squaredLength,o.negate=function(t,a){return t[0]=-a[0],t[1]=-a[1],t},o.inverse=function(t,a){return t[0]=1/a[0],t[1]=1/a[1],t},o.normalize=function(t,a){var n=a[0],r=a[1],o=n*n+r*r;return o>0&&(o=1/Math.sqrt(o),t[0]=a[0]*o,t[1]=a[1]*o),t},o.dot=function(t,a){return t[0]*a[0]+t[1]*a[1]},o.cross=function(t,a,n){var r=a[0]*n[1]-a[1]*n[0];return t[0]=t[1]=0,t[2]=r,t},o.lerp=function(t,a,n,r){var o=a[0],u=a[1];return t[0]=o+r*(n[0]-o),t[1]=u+r*(n[1]-u),t},o.random=function(t,a){a=a||1;var n=2*r.RANDOM()*Math.PI;return t[0]=Math.cos(n)*a,t[1]=Math.sin(n)*a,t},o.transformMat2=function(t,a,n){var r=a[0],o=a[1];return t[0]=n[0]*r+n[2]*o,t[1]=n[1]*r+n[3]*o,t},o.transformMat2d=function(t,a,n){var r=a[0],o=a[1];return t[0]=n[0]*r+n[2]*o+n[4],t[1]=n[1]*r+n[3]*o+n[5],t},o.transformMat3=function(t,a,n){var r=a[0],o=a[1];return t[0]=n[0]*r+n[3]*o+n[6],t[1]=n[1]*r+n[4]*o+n[7],t},o.transformMat4=function(t,a,n){var r=a[0],o=a[1];return t[0]=n[0]*r+n[4]*o+n[12],t[1]=n[1]*r+n[5]*o+n[13],t},o.forEach=function(){var t=o.create();return function(a,n,r,o,u,l){var e,M;for(n||(n=2),r||(r=0),M=o?Math.min(o*n+r,a.length):a.length,e=r;M>e;e+=n)t[0]=a[e],t[1]=a[e+1],u(t,t,l),a[e]=t[0],a[e+1]=t[1];return a}}(),o.str=function(t){return"vec2("+t[0]+", "+t[1]+")"},o.exactEquals=function(t,a){return t[0]===a[0]&&t[1]===a[1]},o.equals=function(t,a){var n=t[0],o=t[1],u=a[0],l=a[1];return Math.abs(n-u)<=r.EPSILON*Math.max(1,Math.abs(n),Math.abs(u))&&Math.abs(o-l)<=r.EPSILON*Math.max(1,Math.abs(o),Math.abs(l))},t.exports=o}])}),loadjs=function(){function t(t,a){t=t.push?t:[t];var n,r,o,u,l=[],s=t.length,i=s;for(n=function(t,n){n.length&&l.push(t),i--,i||a(l)};s--;)r=t[s],o=e[r],o?n(r,o):(u=M[r]=M[r]||[],u.push(n))}function a(t,a){if(t){var n=M[t];if(e[t]=a,n)for(;n.length;)n[0](t,a),n.splice(0,1)}}function n(t,a){var n=document,r=n.createElement("script");r.src=t,r.onload=r.onerror=r.onbeforeload=function(n){a(t,n.type[0],n.defaultPrevented)},n.head.appendChild(r)}function r(t,a){t=t.push?t:[t];var r,o=t.length,u=o,l=[];for(r=function(t,n,r){if("e"==n&&l.push(t),"b"==n){if(!r)return;l.push(t)}u--,u||a(l)};o--;)n(t[o],r)}function o(t,n,o,e){var M,s,i;if(n&&!n.call&&(M=n),s=M?o:n,i=M?e:o,M){if(M in l)throw new Error("LoadJS: Bundle already defined");l[M]=!0}r(t,function(t){t.length?(i||u)(t):(s||u)(),a(M,t)})}var u=function(){},l={},e={},M={};return o.ready=function(a,n,r){return t(a,function(t){t.length?(r||u)(t):(n||u)()}),o},o.done=function(t){a(t,[])},o}();
//# sourceMappingURL=libs.core.min.js.map
var CABLES=CABLES||{};CABLES.base64Chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",CABLES.base64lookup=new Uint8Array(256);for(var i=0;i<CABLES.base64Chars.length;i++)CABLES.base64lookup[CABLES.base64Chars.charCodeAt(i)]=i;CABLES.b64encTypesArray=function(t){t.buffer&&(t=t.buffer);var e,i=new Uint8Array(t),s=i.length,r="";for(e=0;s>e;e+=3)r+=CABLES.base64Chars[i[e]>>2],r+=CABLES.base64Chars[(3&i[e])<<4|i[e+1]>>4],r+=CABLES.base64Chars[(15&i[e+1])<<2|i[e+2]>>6],r+=CABLES.base64Chars[63&i[e+2]];return s%3===2?r=r.substring(0,r.length-1)+"=":s%3===1&&(r=r.substring(0,r.length-2)+"=="),r},CABLES.b64decTypedArray=function(t){var e,i,s,r,n,o=.75*t.length,a=t.length,h=0;"="===t[t.length-1]&&(o--,"="===t[t.length-2]&&o--);var l=new ArrayBuffer(o),u=new Uint8Array(l);for(e=0;a>e;e+=4)i=CABLES.base64lookup[t.charCodeAt(e)],s=CABLES.base64lookup[t.charCodeAt(e+1)],r=CABLES.base64lookup[t.charCodeAt(e+2)],n=CABLES.base64lookup[t.charCodeAt(e+3)],u[h++]=i<<2|s>>4,u[h++]=(15&s)<<4|r>>2,u[h++]=(3&r)<<6|63&n;return l};var CABLES=CABLES||{};CABLES.EventTarget=function(){this._eventCallbacks={},this.addEventListener=function(t,e){this._eventCallbacks[t]?this._eventCallbacks[t].push(e):this._eventCallbacks[t]=[e]},this.hasEventListener=function(t,e){if(t&&e){if(this._eventCallbacks[t]){var i=this._eventCallbacks[t].indexOf(e);return-1==i?!1:!0}}else console.log("hasListener: missing parameters")},this.removeEventListener=function(t,e){if(this._eventCallbacks[t]){var i=this._eventCallbacks[t].indexOf(e);-1==i?console.log("eventlistener "+t+" not found..."):this._eventCallbacks[t].splice(i)}},this.emitEvent=function(t,e,i,s,r,n,o){if(this._eventCallbacks[t])for(var a=0;a<this._eventCallbacks[t].length;a++)this._eventCallbacks[t][a]&&this._eventCallbacks[t][a](e,i,s,r,n,o)}};var CABLES=CABLES||{};CABLES.UTILS={},CGL=CGL||{},CABLES.UTILS.float32Concat=function(t,e){t instanceof Float32Array||(t=new Float32Array(t)),e instanceof Float32Array||(e=new Float32Array(e));var i=t.length,s=new Float32Array(i+e.length);return s.set(t),s.set(e,i),s},CABLES.shuffleArray=function(t){for(var e=t.length-1;e>0;e--){var i=Math.floor(Math.seededRandom()*(e+1)),s=t[e];t[e]=t[i],t[i]=s}return t},CABLES.generateUUID=CABLES.uuid=function(){var t=(new Date).getTime(),e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var i=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"==e?i:3&i|8).toString(16)});return e},CABLES.simpleIdCounter=0,CABLES.simpleId=function(){return CABLES.simpleIdCounter++,CABLES.simpleIdCounter},CABLES.smoothStep=function(t){var e=Math.max(0,Math.min(1,(t-0)/1));return t=e*e*(3-2*e)},CABLES.smootherStep=function(t){var e=Math.max(0,Math.min(1,(t-0)/1));return t=e*e*e*(e*(6*e-15)+10)},CABLES.map=function(t,e,i,s,r,n){if(t>=i)return r;if(e>=t)return s;var o=!1,a=Math.min(e,i),h=Math.max(e,i);a!=e&&(o=!0);var l=!1,u=Math.min(s,r),c=Math.max(s,r);u!=s&&(l=!0);var p=0,d=0;return p=o?(h-t)*(c-u)/(h-a):(t-a)*(c-u)/(h-a),d=l?c-p:p+u,n?1==n?(t=Math.max(0,Math.min(1,(d-s)/(r-s))),s+t*t*(3-2*t)*(r-s)):2==n?(t=Math.max(0,Math.min(1,(d-s)/(r-s))),s+t*t*t*(t*(6*t-15)+10)*(r-s)):d:d},Math.randomSeed=1,Math.seededRandom=function(t,e){0===Math.randomSeed&&(Math.randomSeed=999*Math.random()),t=t||1,e=e||0,Math.randomSeed=(9301*Math.randomSeed+49297)%233280;var i=Math.randomSeed/233280;return e+i*(t-e)},CABLES.UTILS.arrayWriteToEnd=function(t,e){for(var i=1;i<t.length;i++)t[i-1]=t[i];t[t.length-1]=e},CABLES.UTILS.isNumeric=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},CABLES.UTILS.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)},String.prototype.endl=function(){return this+"\n"},String.prototype.startsWith=function(t){return 0===this.indexOf(t)},String.prototype.endsWith=function(t){return this.match(t+"$")==t},CABLES.cacheBust=function(t){return t+=t.indexOf("?")>-1?"&":"?",t+"cb="+CABLES.uuid()},CABLES.jsonp=function(t,e){CABLES.jsonpCounter=CABLES.jsonpCounter||0,CABLES.jsonpCounter++;var i=CABLES.jsonpCounter;console.log("making jsonp request..."),CABLES["jsonpFunc"+i]=function(t){console.log(t),e(!1,t)};var s="?";t.indexOf(s)>-1&&(s="&");var r=document.createElement("script");r.setAttribute("src",t+s+"callback=CABLES.jsonpFunc"+i),document.body.appendChild(r)},CABLES.ajaxSync=function(t,e,i,s,r){CABLES.request({url:t,cb:e,method:i,data:s,contenttype:r,sync:!0})},CABLES.ajax=function(t,e,i,s,r,n){CABLES.request({url:t,cb:e,method:i,"data:":s,contenttype:r,sync:!1,jsonp:n})},CABLES.request=function(t){t.hasOwnProperty("asynch")||(t.asynch=!0);var e;try{e=new XMLHttpRequest}catch(i){}e.onreadystatechange=function(){4==e.readyState&&t.cb&&(200==e.status||0==e.status?t.cb(!1,e.responseText,e):t.cb(!0,e.responseText,e))},e.addEventListener("progress",function(t){}),e.open(t.method?t.method.toUpperCase():"GET",t.url,!t.sync),t.post||t.data?(e.setRequestHeader("Content-type",t.contenttype?t.contenttype:"application/x-www-form-urlencoded"),e.send(t.data||t.post)):e.send()},CGL.DEG2RAD=Math.PI/180,CGL.RAD2DEG=180/Math.PI,CGL.onLoadingAssetsFinished=null,CGL.isWindows=-1!=window.navigator.userAgent.indexOf("Windows"),CGL.getWheelSpeed=CGL.getWheelDelta=function(t){var e;if(t.wheelDelta)e=t.wheelDelta%120-0==-0?t.wheelDelta/120:t.wheelDelta/30,e*=-1.5,CGL.isWindows&&(e*=2);else{var i=t.deltaY;t.shiftKey&&(i=t.deltaX);var s=i?i:t.detail;e=-(s%3?10*s:s/3),e*=-3}return e>20&&(e=20),-20>e&&(e=-20),e},window.performance=window.performance||{offset:Date.now(),now:function(){return Date.now()-this.offset}};var CABLES=CABLES||{};CABLES.ANIM=CABLES.ANIM||{},CABLES.TL=CABLES.ANIM,CABLES.ANIM.EASING_LINEAR=0,CABLES.ANIM.EASING_ABSOLUTE=1,CABLES.ANIM.EASING_SMOOTHSTEP=2,CABLES.ANIM.EASING_SMOOTHERSTEP=3,CABLES.ANIM.EASING_BEZIER=4,CABLES.ANIM.EASING_CUBIC_IN=5,CABLES.ANIM.EASING_CUBIC_OUT=6,CABLES.ANIM.EASING_CUBIC_INOUT=7,CABLES.ANIM.EASING_EXPO_IN=8,CABLES.ANIM.EASING_EXPO_OUT=9,CABLES.ANIM.EASING_EXPO_INOUT=10,CABLES.ANIM.EASING_SIN_IN=11,CABLES.ANIM.EASING_SIN_OUT=12,CABLES.ANIM.EASING_SIN_INOUT=13,CABLES.ANIM.EASING_BACK_IN=14,CABLES.ANIM.EASING_BACK_OUT=15,CABLES.ANIM.EASING_BACK_INOUT=16,CABLES.ANIM.EASING_ELASTIC_IN=17,CABLES.ANIM.EASING_ELASTIC_OUT=18,CABLES.ANIM.EASING_BOUNCE_IN=19,CABLES.ANIM.EASING_BOUNCE_OUT=21,CABLES.ANIM.EASING_QUART_IN=22,CABLES.ANIM.EASING_QUART_OUT=23,CABLES.ANIM.EASING_QUART_INOUT=24,CABLES.ANIM.EASING_QUINT_IN=25,CABLES.ANIM.EASING_QUINT_OUT=26,CABLES.ANIM.EASING_QUINT_INOUT=27,CABLES.ANIM.Key=function(t){this.time=0,this.value=0,this.ui={},this.onChange=null,this._easing=0,this.bezTime=.5,this.bezValue=0,this.bezTimeIn=-.5,this.bezValueIn=0,this.cb=null,this.cbTriggered=!1;this.setEasing(CABLES.ANIM.EASING_LINEAR),this.set(t)},CABLES.ANIM.Key.linear=function(t,e,i){return parseFloat(e.value)+parseFloat(i.value-e.value)*t},CABLES.ANIM.Key.easeLinear=function(t,e){return CABLES.ANIM.Key.linear(t,this,e)},CABLES.ANIM.Key.easeAbsolute=function(t,e){return this.value},CABLES.easeExpoIn=function(t){return t=Math.pow(2,10*(t-1))},CABLES.ANIM.Key.easeExpoIn=function(t,e){return t=CABLES.easeExpoIn(t),CABLES.ANIM.Key.linear(t,this,e)},CABLES.easeExpoOut=function(t){return t=-Math.pow(2,-10*t)+1},CABLES.ANIM.Key.easeExpoOut=function(t,e){return t=CABLES.easeExpoOut(t),CABLES.ANIM.Key.linear(t,this,e)},CABLES.easeExpoInOut=function(t){return t*=2,1>t?t=.5*Math.pow(2,10*(t-1)):(t--,t=.5*(-Math.pow(2,-10*t)+2)),t},CABLES.ANIM.Key.easeExpoInOut=function(t,e){return t=CABLES.easeExpoInOut(t),CABLES.ANIM.Key.linear(t,this,e)},CABLES.ANIM.Key.easeSinIn=function(t,e){return t=-1*Math.cos(t*Math.PI/2)+1,CABLES.ANIM.Key.linear(t,this,e)},CABLES.ANIM.Key.easeSinOut=function(t,e){return t=Math.sin(t*Math.PI/2),CABLES.ANIM.Key.linear(t,this,e)},CABLES.ANIM.Key.easeSinInOut=function(t,e){return t=-.5*(Math.cos(Math.PI*t)-1),CABLES.ANIM.Key.linear(t,this,e)},CABLES.easeCubicIn=function(t){return t=t*t*t},CABLES.ANIM.Key.easeCubicIn=function(t,e){return t=CABLES.easeCubicIn(t),CABLES.ANIM.Key.linear(t,this,e)},CABLES.ANIM.Key.easeInQuint=function(t,e){return t=t*t*t*t*t,CABLES.ANIM.Key.linear(t,this,e)},CABLES.ANIM.Key.easeOutQuint=function(t,e){return t=(t-=1)*t*t*t*t+1,CABLES.ANIM.Key.linear(t,this,e)},CABLES.ANIM.Key.easeInOutQuint=function(t,e){return t=(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),CABLES.ANIM.Key.linear(t,this,e)},CABLES.ANIM.Key.easeInQuart=function(t,e){return t=t*t*t*t,CABLES.ANIM.Key.linear(t,this,e)},CABLES.ANIM.Key.easeOutQuart=function(t,e){return t=-1*((t-=1)*t*t*t-1),CABLES.ANIM.Key.linear(t,this,e)},CABLES.ANIM.Key.easeInOutQuart=function(t,e){return t=(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),CABLES.ANIM.Key.linear(t,this,e)},CABLES.ANIM.Key.bounce=function(t){return t=(t/=1)<1/2.75?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},CABLES.ANIM.Key.easeInBounce=function(t,e){return CABLES.ANIM.Key.linear(CABLES.ANIM.Key.bounce(t),this,e)},CABLES.ANIM.Key.easeOutBounce=function(t,e){return CABLES.ANIM.Key.linear(CABLES.ANIM.Key.bounce(t),this,e)},CABLES.ANIM.Key.easeInElastic=function(t,e){var i=1.70158,s=0,r=1,n=0,o=1,a=1;return 0===t?t=n:1==(t/=o)?t=n+a:(s||(s=.3*o),r<Math.abs(a)?(r=a,i=s/4):i=s/(2*Math.PI)*Math.asin(a/r),t=-(r*Math.pow(2,10*(t-=1))*Math.sin(2*(t*o-i)*Math.PI/s))+n),CABLES.ANIM.Key.linear(t,this,e)},CABLES.ANIM.Key.easeOutElastic=function(t,e){var i=1.70158,s=0,r=1,n=0,o=1,a=1;return 0===t?t=n:1==(t/=o)?t=n+a:(s||(s=.3*o),r<Math.abs(a)?(r=a,i=s/4):i=s/(2*Math.PI)*Math.asin(a/r),t=r*Math.pow(2,-10*t)*Math.sin(2*(t*o-i)*Math.PI/s)+a+n),CABLES.ANIM.Key.linear(t,this,e)},CABLES.ANIM.Key.easeInBack=function(t,e){var i=1.70158;return t=t*t*((i+1)*t-i),CABLES.ANIM.Key.linear(t,this,e)},CABLES.ANIM.Key.easeOutBack=function(t,e){var i=1.70158;return t=(t=t/1-1)*t*((i+1)*t+i)+1,CABLES.ANIM.Key.linear(t,this,e)},CABLES.ANIM.Key.easeInOutBack=function(t,e){var i=1.70158,s=.5;return t=(t/=.5)<1?s*t*t*(((i*=1.525)+1)*t-i):s*((t-=2)*t*(((i*=1.525)+1)*t+i)+2),CABLES.ANIM.Key.linear(t,this,e)},CABLES.easeCubicOut=function(t){return t--,t=t*t*t+1},CABLES.ANIM.Key.easeCubicOut=function(t,e){return t=CABLES.easeCubicOut(t),CABLES.ANIM.Key.linear(t,this,e)},CABLES.easeCubicInOut=function(t){return t*=2,1>t?t=.5*t*t*t:(t-=2,t=.5*(t*t*t+2)),t},CABLES.ANIM.Key.easeCubicInOut=function(t,e){return t=CABLES.easeCubicInOut(t),CABLES.ANIM.Key.linear(t,this,e)},CABLES.ANIM.Key.easeSmoothStep=function(t,e){var i=Math.max(0,Math.min(1,t));return t=i*i*(3-2*i),CABLES.ANIM.Key.linear(t,this,e)},CABLES.ANIM.Key.easeSmootherStep=function(t,e){var i=Math.max(0,Math.min(1,(t-0)/1));return t=i*i*i*(i*(6*i-15)+10),CABLES.ANIM.Key.linear(t,this,e)},CABLES.ANIM.Key.prototype.setEasing=function(t){this._easing=t,this._easing==CABLES.ANIM.EASING_ABSOLUTE?this.ease=CABLES.ANIM.Key.easeAbsolute:this._easing==CABLES.ANIM.EASING_SMOOTHSTEP?this.ease=CABLES.ANIM.Key.easeSmoothStep:this._easing==CABLES.ANIM.EASING_SMOOTHERSTEP?this.ease=CABLES.ANIM.Key.easeSmootherStep:this._easing==CABLES.ANIM.EASING_CUBIC_IN?this.ease=CABLES.ANIM.Key.easeCubicIn:this._easing==CABLES.ANIM.EASING_CUBIC_OUT?this.ease=CABLES.ANIM.Key.easeCubicOut:this._easing==CABLES.ANIM.EASING_CUBIC_INOUT?this.ease=CABLES.ANIM.Key.easeCubicInOut:this._easing==CABLES.ANIM.EASING_EXPO_IN?this.ease=CABLES.ANIM.Key.easeExpoIn:this._easing==CABLES.ANIM.EASING_EXPO_OUT?this.ease=CABLES.ANIM.Key.easeExpoOut:this._easing==CABLES.ANIM.EASING_EXPO_INOUT?this.ease=CABLES.ANIM.Key.easeExpoInOut:this._easing==CABLES.ANIM.EASING_SIN_IN?this.ease=CABLES.ANIM.Key.easeSinIn:this._easing==CABLES.ANIM.EASING_SIN_OUT?this.ease=CABLES.ANIM.Key.easeSinOut:this._easing==CABLES.ANIM.EASING_SIN_INOUT?this.ease=CABLES.ANIM.Key.easeSinInOut:this._easing==CABLES.ANIM.EASING_BACK_OUT?this.ease=CABLES.ANIM.Key.easeOutBack:this._easing==CABLES.ANIM.EASING_BACK_IN?this.ease=CABLES.ANIM.Key.easeInBack:this._easing==CABLES.ANIM.EASING_BACK_INOUT?this.ease=CABLES.ANIM.Key.easeInOutBack:this._easing==CABLES.ANIM.EASING_ELASTIC_IN?this.ease=CABLES.ANIM.Key.easeInElastic:this._easing==CABLES.ANIM.EASING_ELASTIC_OUT?this.ease=CABLES.ANIM.Key.easeOutElastic:this._easing==CABLES.ANIM.EASING_BOUNCE_IN?this.ease=CABLES.ANIM.Key.easeInBounce:this._easing==CABLES.ANIM.EASING_BOUNCE_OUT?this.ease=CABLES.ANIM.Key.easeOutBounce:this._easing==CABLES.ANIM.EASING_QUART_OUT?this.ease=CABLES.ANIM.Key.easeOutQuart:this._easing==CABLES.ANIM.EASING_QUART_IN?this.ease=CABLES.ANIM.Key.easeInQuart:this._easing==CABLES.ANIM.EASING_QUART_INOUT?this.ease=CABLES.ANIM.Key.easeInOutQuart:this._easing==CABLES.ANIM.EASING_QUINT_OUT?this.ease=CABLES.ANIM.Key.easeOutQuint:this._easing==CABLES.ANIM.EASING_QUINT_IN?this.ease=CABLES.ANIM.Key.easeInQuint:this._easing==CABLES.ANIM.EASING_QUINT_INOUT?this.ease=CABLES.ANIM.Key.easeInOutQuint:this._easing==CABLES.ANIM.EASING_BEZIER?(updateBezier=!0,this.ease=CABLES.ANIM.Key.easeBezier):(this._easing=CABLES.ANIM.EASING_LINEAR,this.ease=CABLES.ANIM.Key.easeLinear)},CABLES.ANIM.Key.prototype.trigger=function(){this.cb(),this.cbTriggered=!0},CABLES.ANIM.Key.prototype.setValue=function(t){this.value=t,updateBezier=!0,null!==this.onChange&&this.onChange()},CABLES.ANIM.Key.prototype.set=function(t){t&&(t.e&&this.setEasing(t.e),t.cb&&(this.cb=t.cb,this.cbTriggered=!1),t.b&&(this.bezTime=t.b[0],this.bezValue=t.b[1],this.bezTimeIn=t.b[2],this.bezValueIn=t.b[3],updateBezier=!0),t.hasOwnProperty("t")&&(this.time=t.t),t.hasOwnProperty("time")&&(this.time=t.time),t.hasOwnProperty("v")?this.value=t.v:t.hasOwnProperty("value")&&(this.value=t.value)),null!==this.onChange&&this.onChange()},CABLES.ANIM.Key.prototype.getSerialized=function(){var t={};return t.t=this.time,t.v=this.value,t.e=this._easing,this._easing==CABLES.ANIM.EASING_BEZIER&&(t.b=[this.bezTime,this.bezValue,this.bezTimeIn,this.bezValueIn]),t},CABLES.ANIM.Key.prototype.getEasing=function(){return this._easing},CABLES.Anim=function(t){this.keys=[],this.onChange=null,this.stayInTimeline=!1,this.loop=!1,this.defaultEasing=CABLES.ANIM.EASING_LINEAR,this.onLooped=null,this._timesLooped=0,this._needsSort=!1},CABLES.TL.Anim=CABLES.Anim,CABLES.Anim.prototype.forceChangeCallback=function(){null!==this.onChange&&this.onChange()},CABLES.Anim.prototype.hasEnded=function(t){return 0===this.keys.length?!0:this.keys[this.keys.length-1].time<=t?!0:!1},CABLES.Anim.prototype.isRising=function(t){if(this.hasEnded(t))return!1;var e=this.getKeyIndex(t);return this.keys[e].value<this.keys[e+1].value?!0:!1},CABLES.Anim.prototype.clear=function(t){var e=0;t&&(e=this.getValue(t)),this.keys.length=0,t&&this.setValue(t,e),null!==this.onChange&&this.onChange()},CABLES.Anim.prototype.sortKeys=function(){this.keys.sort(function(t,e){return parseFloat(t.time)-parseFloat(e.time)}),this._needsSort=!1},CABLES.Anim.prototype.getLength=function(){return 0===this.keys.length?0:this.keys[this.keys.length-1].time},CABLES.Anim.prototype.getKeyIndex=function(t){for(var e=0,i=0;i<this.keys.length;i++)if(t>=this.keys[i].time&&(e=i),this.keys[i].time>t)return e;return e},CABLES.Anim.prototype.setValue=function(t,e,i){var s=!1;for(var r in this.keys)if(this.keys[r].time==t){s=this.keys[r],this.keys[r].setValue(e),this.keys[r].cb=i;break}s||this.keys.push(new CABLES.ANIM.Key({time:t,value:e,e:this.defaultEasing,cb:i})),this.onChange&&this.onChange(),this._needsSort=!0},CABLES.Anim.prototype.getSerialized=function(){var t={};t.keys=[],t.loop=this.loop;for(var e in this.keys)t.keys.push(this.keys[e].getSerialized());return t},CABLES.Anim.prototype.getKey=function(t){var e=this.getKeyIndex(t);return this.keys[e]},CABLES.Anim.prototype.getNextKey=function(t){var e=this.getKeyIndex(t)+1;return e>=this.keys.length&&(e=this.keys.length-1),this.keys[e]},CABLES.Anim.prototype.isFinished=function(t){return this.keys.length<=0?!0:t>this.keys[this.keys.length-1].time},CABLES.Anim.prototype.isStarted=function(t){return this.keys.length<=0?!1:t>=this.keys[0].time},CABLES.Anim.prototype.getValue=function(t){if(0===this.keys.length)return 0;if(this._needsSort&&this.sortKeys(),t<this.keys[0].time)return this.keys[0].value;var e=this.keys.length-1;if(this.loop&&t>this.keys[e].time){var i=t/this.keys[e].time;i>this._timesLooped&&(this._timesLooped++,this.onLooped&&this.onLooped()),t=(t-this.keys[0].time)%(this.keys[e].time-this.keys[0].time),t+=this.keys[0].time}var s=this.getKeyIndex(t);if(s>=e)return this.keys[e].cb&&!this.keys[e].cbTriggered&&this.keys[e].trigger(),this.keys[e].value;var r=parseInt(s,10)+1,n=this.keys[s],o=this.keys[r];if(n.cb&&!n.cbTriggered&&n.trigger(),!o)return-1;var a=(t-n.time)/(o.time-n.time);return n.ease(a,o)},CABLES.Anim.prototype.addKey=function(t){void 0===t.time?console.log("key time undefined, ignoring!"):(this.keys.push(t),null!==this.onChange&&this.onChange())},CABLES.Anim.prototype.easingFromString=function(t){return"linear"==t?CABLES.ANIM.EASING_LINEAR:"absolute"==t?CABLES.ANIM.EASING_ABSOLUTE:"smoothstep"==t?CABLES.ANIM.EASING_SMOOTHSTEP:"smootherstep"==t?CABLES.ANIM.EASING_SMOOTHERSTEP:"Cubic In"==t?CABLES.ANIM.EASING_CUBIC_IN:"Cubic Out"==t?CABLES.ANIM.EASING_CUBIC_OUT:"Cubic In Out"==t?CABLES.ANIM.EASING_CUBIC_INOUT:"Expo In"==t?CABLES.ANIM.EASING_EXPO_IN:"Expo Out"==t?CABLES.ANIM.EASING_EXPO_OUT:"Expo In Out"==t?CABLES.ANIM.EASING_EXPO_INOUT:"Sin In"==t?CABLES.ANIM.EASING_SIN_IN:"Sin Out"==t?CABLES.ANIM.EASING_SIN_OUT:"Sin In Out"==t?CABLES.ANIM.EASING_SIN_INOUT:"Back In"==t?CABLES.ANIM.EASING_BACK_IN:"Back Out"==t?CABLES.ANIM.EASING_BACK_OUT:"Back In Out"==t?CABLES.ANIM.EASING_BACK_INOUT:"Elastic In"==t?CABLES.ANIM.EASING_ELASTIC_IN:"Elastic Out"==t?CABLES.ANIM.EASING_ELASTIC_OUT:"Bounce In"==t?CABLES.ANIM.EASING_BOUNCE_IN:"Bounce Out"==t?CABLES.ANIM.EASING_BOUNCE_OUT:"Quart Out"==t?CABLES.ANIM.EASING_QUART_OUT:"Quart In"==t?CABLES.ANIM.EASING_QUART_IN:"Quart In Out"==t?CABLES.ANIM.EASING_QUART_INOUT:"Quint Out"==t?CABLES.ANIM.EASING_QUINT_OUT:"Quint In"==t?CABLES.ANIM.EASING_QUINT_IN:"Quint In Out"==t?CABLES.ANIM.EASING_QUINT_INOUT:void 0},CABLES.Anim.prototype.createPort=function(t,e,i){var s=t.addInPort(new CABLES.Port(t,e,CABLES.OP_PORT_TYPE_VALUE,{display:"dropdown",values:["linear","absolute","smoothstep","smootherstep","Cubic In","Cubic Out","Cubic In Out","Expo In","Expo Out","Expo In Out","Sin In","Sin Out","Sin In Out","Quart In","Quart Out","Quart In Out","Quint In","Quint Out","Quint In Out","Back In","Back Out","Back In Out","Elastic In","Elastic Out","Elastic In Out","Bounce In","Bounce Out"]}));return s.set("linear"),s.defaultValue="linear",s.onChange=function(){this.defaultEasing=this.easingFromString(s.get()),i&&i()}.bind(this),s},CABLES.Anim.slerpQuaternion=function(t,e,i,s,r,n){CABLES.Anim.slerpQuaternion.q1||(CABLES.Anim.slerpQuaternion.q1=quat.create(),CABLES.Anim.slerpQuaternion.q2=quat.create());var o=i.getKeyIndex(t),a=o+1;if(a>=i.keys.length&&(a=i.keys.length-1),o==a)quat.set(e,i.keys[o].value,s.keys[o].value,r.keys[o].value,n.keys[o].value);else{var h=i.keys[o].time,l=i.keys[a].time,u=(t-h)/(l-h);quat.set(CABLES.Anim.slerpQuaternion.q1,i.keys[o].value,s.keys[o].value,r.keys[o].value,n.keys[o].value),quat.set(CABLES.Anim.slerpQuaternion.q2,i.keys[a].value,s.keys[a].value,r.keys[a].value,n.keys[a].value),quat.slerp(e,CABLES.Anim.slerpQuaternion.q1,CABLES.Anim.slerpQuaternion.q2,u)}return e},CABLES.Browser=function(t){function e(t){i=!0,console.log("browser report canceled...")}var i=!1,s="hidden";s in document?document.addEventListener("visibilitychange",e):(s="mozHidden")in document?document.addEventListener("mozvisibilitychange",e):(s="webkitHidden")in document?document.addEventListener("webkitvisibilitychange",e):(s="msHidden")in document?document.addEventListener("msvisibilitychange",e):"onfocusin"in document?document.onfocusin=document.onfocusout=e:window.onpageshow=window.onpagehide=window.onfocus=window.onblur=e;var r={nVer:navigator.appVersion,nAgt:navigator.userAgent,browserName:navigator.appName,fullVersion:parseFloat(navigator.appVersion),majorVersion:parseInt(navigator.appVersion,10),lang:navigator.language,platform:navigator.platform,sizeScreen:[window.screen.availHeight,window.screen.availWidth],sizeWindow:[window.screen.height,window.screen.width]};this.sendReport=function(e){if(!i){if(!t)return void console.log("report canceled - no projectid");r.gl={renderer:"unknown",sizeCanvas:[e.cgl.canvas.width,e.cgl.canvas.height]};var s=e.cgl.gl.getExtension("WEBGL_debug_renderer_info");s&&(r.gl.renderer=e.cgl.gl.getParameter(s.UNMASKED_RENDERER_WEBGL),r.gl.vendor=e.cgl.gl.getParameter(s.UNMASKED_VENDOR_WEBGL));var n=e.cgl.gl.getSupportedExtensions();n&&(r.gl.extensions=n),CGL.fpsReport&&CGL.fpsReport.length>1&&(CGL.fpsReport.splice(0,1),r.gl.fps=CGL.fpsReport,CABLES.api.post("report/"+t,{report:r}))}}};var CGL=CGL||{};CGL.Framebuffer=function(t,e,i,s){var r=t,n=r.gl.getExtension("WEBGL_depth_texture")||r.gl.getExtension("WEBKIT_WEBGL_depth_texture")||r.gl.getExtension("MOZ_WEBGL_depth_texture")||r.gl.DEPTH_TEXTURE;if(!n)return void r.exitError("NO_DEPTH_TEXTURE","no depth texture support");var o=e||512,a=i||512;s=s||{isFloatingPointTexture:!1},s.hasOwnProperty("filter")||(s.filter=CGL.Texture.FILTER_LINEAR);var h=new CGL.Texture(r,{isFloatingPointTexture:s.isFloatingPointTexture,filter:s.filter,wrap:CGL.Texture.CLAMP_TO_EDGE}),l=null;n&&(l=new CGL.Texture(r,{isDepthTexture:!0}));var u=r.gl.createFramebuffer(),c=r.gl.createRenderbuffer();this.getWidth=function(){return o},this.getHeight=function(){return a},this.getGlFrameBuffer=function(){return u},this.getDepthRenderBuffer=function(){return c},this.getTextureColor=function(){return h},this.getTextureDepth=function(){return l},this.setFilter=function(t){h.filter=t,h.setSize(o,a)},this.setSize=function(t,e){if(2>t&&(t=2),2>e&&(e=2),o=Math.ceil(t),a=Math.ceil(e),CGL.profileFrameBuffercreate++,r.gl.bindFramebuffer(r.gl.FRAMEBUFFER,u),r.gl.bindRenderbuffer(r.gl.RENDERBUFFER,c),h.setSize(o,a),l&&l.setSize(o,a),n&&r.gl.renderbufferStorage(r.gl.RENDERBUFFER,r.gl.DEPTH_COMPONENT16,o,a),r.gl.framebufferTexture2D(r.gl.FRAMEBUFFER,r.gl.COLOR_ATTACHMENT0,r.gl.TEXTURE_2D,h.tex,0),n&&(r.gl.framebufferRenderbuffer(r.gl.FRAMEBUFFER,r.gl.DEPTH_ATTACHMENT,r.gl.RENDERBUFFER,c),r.gl.framebufferTexture2D(r.gl.FRAMEBUFFER,r.gl.DEPTH_ATTACHMENT,r.gl.TEXTURE_2D,l.tex,0)),!r.gl.isFramebuffer(u))throw"Invalid framebuffer";var i=r.gl.checkFramebufferStatus(r.gl.FRAMEBUFFER);switch(i){case r.gl.FRAMEBUFFER_COMPLETE:break;case r.gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:throw console.log("FRAMEBUFFER_INCOMPLETE_ATTACHMENT...",o,a,h.tex,c),new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_ATTACHMENT");case r.gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:throw console.log("FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT"),new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT");case r.gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:throw console.log("FRAMEBUFFER_INCOMPLETE_DIMENSIONS"),new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_DIMENSIONS");case r.gl.FRAMEBUFFER_UNSUPPORTED:throw console.log("FRAMEBUFFER_UNSUPPORTED"),new Error("Incomplete framebuffer: FRAMEBUFFER_UNSUPPORTED");default:throw console.log("incomplete framebuffer",i),new Error("Incomplete framebuffer: "+i)}r.gl.bindTexture(r.gl.TEXTURE_2D,null),r.gl.bindRenderbuffer(r.gl.RENDERBUFFER,null),r.gl.bindFramebuffer(r.gl.FRAMEBUFFER,null)},this.renderStart=function(){r.pushModelMatrix(),r.gl.bindFramebuffer(r.gl.FRAMEBUFFER,u),r.pushGlFrameBuffer(u),r.pushFrameBuffer(this),r.pushPMatrix(),r.gl.viewport(0,0,o,a),r.gl.clearColor(0,0,0,0),r.gl.clear(r.gl.COLOR_BUFFER_BIT|r.gl.DEPTH_BUFFER_BIT)},this.renderEnd=function(){r.popPMatrix(),r.gl.bindFramebuffer(r.gl.FRAMEBUFFER,r.popGlFrameBuffer()),r.popFrameBuffer(),r.popModelMatrix(),r.resetViewPort()},this["delete"]=function(){h["delete"](),l&&l["delete"](),r.gl.deleteRenderbuffer(c),r.gl.deleteFramebuffer(u)},this.setSize(o,a)};var CGL=CGL||{};CGL.Framebuffer2DrawTargetsDefault=null,CGL.Framebuffer2BlittingFramebuffer=null,CGL.Framebuffer2FinalFramebuffer=null,CGL.Framebuffer2=function(t,e,i,s){this._cgl=t,this._width=0,this._height=0,this._depthRenderbuffer=null,this._frameBuffer=null,this._textureFrameBuffer=null,this._colorRenderbuffers=[],this._drawTargetArray=[],CGL.Framebuffer2BlittingFramebuffer||(CGL.Framebuffer2BlittingFramebuffer=t.gl.createFramebuffer()),CGL.Framebuffer2FinalFramebuffer||(CGL.Framebuffer2FinalFramebuffer=t.gl.createFramebuffer()),CGL.Framebuffer2DrawTargetsDefault||(CGL.Framebuffer2DrawTargetsDefault=[t.gl.COLOR_ATTACHMENT0]),this._options=s||{isFloatingPointTexture:!1},this._options.hasOwnProperty("numRenderBuffers")||(this._options.numRenderBuffers=1),this._options.hasOwnProperty("depth")||(this._options.depth=!0),this._options.hasOwnProperty("clear")||(this._options.clear=!0),this._options.hasOwnProperty("multisampling")||(this._options.multisampling=!1,this._options.multisamplingSamples=0),this._options.hasOwnProperty("filter")||(this._options.filter=CGL.Texture.FILTER_LINEAR),this._numRenderBuffers=this._options.numRenderBuffers,this._colorTextures=[];for(var r=0;r<this._numRenderBuffers;r++)this._colorTextures[r]=new CGL.Texture(t,{name:"framebuffer2 texture "+r,isFloatingPointTexture:this._options.isFloatingPointTexture,filter:this._options.filter,wrap:this._options.wrap});var n=CGL.Texture.FILTER_NEAREST;this._options.shadowMap&&(n=CGL.Texture.FILTER_LINEAR),this._textureDepth=new CGL.Texture(t,{name:"framebuffer2 depth texture",isDepthTexture:!0,filter:n,shadowMap:this._options.shadowMap||!1}),this.setSize(e||512,i||512)},CGL.Framebuffer2.prototype.getWidth=function(){return this._width},CGL.Framebuffer2.prototype.getHeight=function(){return this._height},CGL.Framebuffer2.prototype.getGlFrameBuffer=function(){return this._frameBuffer},CGL.Framebuffer2.prototype.getDepthRenderBuffer=function(){return this._depthRenderbuffer},CGL.Framebuffer2.prototype.getTextureColor=function(){return this._colorTextures[0]},CGL.Framebuffer2.prototype.getTextureColorNum=function(t){return this._colorTextures[t]},CGL.Framebuffer2.prototype.getTextureDepth=function(){return this._textureDepth},CGL.Framebuffer2.prototype.setFilter=function(t){for(var e=0;e<this._numRenderBuffers;e++)this._colorTextures[e].filter=t,this._colorTextures[e].setSize(this._width,this._height)},CGL.Framebuffer2.prototype["delete"]=CGL.Framebuffer2.prototype.dispose=function(){for(var t=0;t<this._numRenderBuffers;t++)this._colorTextures[t]["delete"]();this._textureDepth["delete"]();for(var t=0;t<this._numRenderBuffers;t++)this._cgl.gl.deleteRenderbuffer(this._colorRenderbuffers[t]);this._cgl.gl.deleteRenderbuffer(this._depthRenderbuffer),this._cgl.gl.deleteFramebuffer(this._frameBuffer),this._cgl.gl.deleteFramebuffer(this._textureFrameBuffer)},CGL.Framebuffer2.prototype.setSize=function(t,e){if(this._width=Math.floor(t),this._height=Math.floor(e),CGL.profileFrameBuffercreate++,this._frameBuffer){for(var i=0;i<this._numRenderBuffers;i++)this._cgl.gl.deleteRenderbuffer(this._colorRenderbuffers[i]);this._cgl.gl.deleteRenderbuffer(this._depthRenderbuffer),this._cgl.gl.deleteFramebuffer(this._frameBuffer),this._cgl.gl.deleteFramebuffer(this._textureFrameBuffer)}this._frameBuffer=this._cgl.gl.createFramebuffer(),this._textureFrameBuffer=this._cgl.gl.createFramebuffer();for(var s=this._options.depth,i=0;i<this._numRenderBuffers;i++)this._colorTextures[i].setSize(this._width,this._height);for(var i=0;i<this._numRenderBuffers;i++){{var r=this._cgl.gl.createRenderbuffer();this._cgl.gl.getExtension("EXT_color_buffer_float")}this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER,this._frameBuffer),this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER,r),this._options.isFloatingPointTexture?this._options.multisampling?this._cgl.gl.renderbufferStorageMultisample(this._cgl.gl.RENDERBUFFER,this._options.multisamplingSamples,this._cgl.gl.RGBA32F,this._width,this._height):this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,this._cgl.gl.RGBA32F,this._width,this._height):this._options.multisampling?this._cgl.gl.renderbufferStorageMultisample(this._cgl.gl.RENDERBUFFER,this._options.multisamplingSamples,this._cgl.gl.RGBA8,this._width,this._height):this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,this._cgl.gl.RGBA8,this._width,this._height),this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER,this._cgl.gl.COLOR_ATTACHMENT0+i,this._cgl.gl.RENDERBUFFER,r),this._colorRenderbuffers[i]=r}this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER,this._textureFrameBuffer);for(var i=0;i<this._numRenderBuffers;i++)this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER,this._cgl.gl.COLOR_ATTACHMENT0+i,this._cgl.gl.TEXTURE_2D,this._colorTextures[i].tex,0);this._options.depth&&this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER,this._cgl.gl.DEPTH_ATTACHMENT,this._cgl.gl.TEXTURE_2D,this._textureDepth.tex,0),this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER,this._frameBuffer),s&&(this._textureDepth.setSize(this._width,this._height),this._depthRenderbuffer=this._cgl.gl.createRenderbuffer(),this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER,this._depthRenderbuffer),this._options.isFloatingPointTexture?this._options.multisampling?this._cgl.gl.renderbufferStorageMultisample(this._cgl.gl.RENDERBUFFER,this._options.multisamplingSamples,this._cgl.gl.DEPTH_COMPONENT32F,this._width,this._height):this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,this._cgl.gl.DEPTH_COMPONENT32F,this._width,this._height):this._options.multisampling?this._cgl.gl.renderbufferStorageMultisample(this._cgl.gl.RENDERBUFFER,this._options.multisamplingSamples,this._cgl.gl.DEPTH_COMPONENT32F,this._width,this._height):this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,this._cgl.gl.DEPTH_COMPONENT32F,this._width,this._height),this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER,this._cgl.gl.DEPTH_ATTACHMENT,this._cgl.gl.RENDERBUFFER,this._depthRenderbuffer)),this._drawTargetArray.length=0;for(var i=0;i<this._numRenderBuffers;i++)this._drawTargetArray.push(this._cgl.gl.COLOR_ATTACHMENT0+i);if(!this._cgl.gl.isFramebuffer(this._textureFrameBuffer))throw"Invalid framebuffer";var n=this._cgl.gl.checkFramebufferStatus(this._cgl.gl.FRAMEBUFFER);switch(n){case this._cgl.gl.FRAMEBUFFER_COMPLETE:break;case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:throw console.log("FRAMEBUFFER_INCOMPLETE_ATTACHMENT..."),new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_ATTACHMENT");case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:throw console.log("FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT"),new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT");case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:throw console.log("FRAMEBUFFER_INCOMPLETE_DIMENSIONS"),new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_DIMENSIONS");case this._cgl.gl.FRAMEBUFFER_UNSUPPORTED:throw console.log("FRAMEBUFFER_UNSUPPORTED"),new Error("Incomplete framebuffer: FRAMEBUFFER_UNSUPPORTED");default:throw console.log("incomplete framebuffer",n),new Error("Incomplete framebuffer: "+n)}this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER,null),this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER,null)},CGL.Framebuffer2.prototype.renderStart=function(){this._cgl.pushModelMatrix(),this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER,this._frameBuffer),this._cgl.pushGlFrameBuffer(this._frameBuffer),this._cgl.pushFrameBuffer(this),this._cgl.pushPMatrix(),this._cgl.gl.viewport(0,0,this._width,this._height),this._cgl.gl.drawBuffers(this._drawTargetArray),this._options.clear&&(this._cgl.gl.clearColor(0,0,0,0),this._cgl.gl.clear(this._cgl.gl.COLOR_BUFFER_BIT|this._cgl.gl.DEPTH_BUFFER_BIT))},CGL.Framebuffer2.prototype.renderEnd=function(){if(this._cgl.popPMatrix(),this._numRenderBuffers<=1)this._cgl.gl.bindFramebuffer(this._cgl.gl.READ_FRAMEBUFFER,this._frameBuffer),this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER,this._textureFrameBuffer),this._cgl.gl.clearBufferfv(this._cgl.gl.COLOR,0,[0,0,0,1]),this._cgl.gl.blitFramebuffer(0,0,this._width,this._height,0,0,this._width,this._height,this._cgl.gl.COLOR_BUFFER_BIT|this._cgl.gl.DEPTH_BUFFER_BIT,this._cgl.gl.NEAREST);
else{this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER,CGL.Framebuffer2BlittingFramebuffer),this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER,this._cgl.gl.DEPTH_ATTACHMENT,this._cgl.gl.RENDERBUFFER,this._depthRenderbuffer),this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER,CGL.Framebuffer2FinalFramebuffer),this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER,this._cgl.gl.DEPTH_ATTACHMENT,this._cgl.gl.TEXTURE_2D,this._textureDepth.tex,0);for(var t=0;t<this._numRenderBuffers;t++){this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER,CGL.Framebuffer2BlittingFramebuffer),this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER,this._cgl.gl.COLOR_ATTACHMENT0,this._cgl.gl.RENDERBUFFER,this._colorRenderbuffers[t]),this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER,CGL.Framebuffer2FinalFramebuffer),this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER,this._cgl.gl.COLOR_ATTACHMENT0,this._cgl.gl.TEXTURE_2D,this._colorTextures[t].tex,0),this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER,null),this._cgl.gl.bindFramebuffer(this._cgl.gl.READ_FRAMEBUFFER,CGL.Framebuffer2BlittingFramebuffer),this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER,CGL.Framebuffer2FinalFramebuffer),this._cgl.gl.clearBufferfv(this._cgl.gl.COLOR,0,[0,0,0,1]);var e=this._cgl.gl.COLOR_BUFFER_BIT;0==t&&(e|=this._cgl.gl.DEPTH_BUFFER_BIT),this._cgl.gl.blitFramebuffer(0,0,this._width,this._height,0,0,this._width,this._height,e,this._cgl.gl.NEAREST)}}if(this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER,this._cgl.popGlFrameBuffer()),this._cgl.popFrameBuffer(),this._cgl.popModelMatrix(),this._cgl.resetViewPort(),this._colorTextures[0].filter==CGL.Texture.FILTER_MIPMAP)for(var t=0;t<this._numRenderBuffers;t++)this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D,this._colorTextures[t].tex),this._colorTextures[t].updateMipMap(),this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D,null)},CGL.Geometry=function(t){this.name=t,this.faceVertCount=3,this._vertices=[],this.verticesIndices=[],this.texCoords=new Float32Array,this.texCoordsIndices=[],this.vertexNormals=[],this.tangents=[],this.biTangents=[],this.barycentrics=[],this.morphTargets=[],this.vertexColors=[],this._attributes={},Object.defineProperty(this,"vertices",{get:function(){return this._vertices},set:function(t){this.setVertices(t)}})},CGL.Geometry.prototype.clear=function(){this.vertices=new Float32Array([]),this.verticesIndices.length=0,this.texCoords=new Float32Array([]),this.texCoordsIndices.length=0,this.vertexNormals.length=0},CGL.Geometry.prototype.getAttributes=function(){return this._attributes},CGL.Geometry.prototype.getAttribute=function(t){for(var e in this._attributes)if(this._attributes[e].name==t)return this._attributes[e];return null},CGL.Geometry.prototype.setAttribute=function(t,e,i){var s="";1==i?s="float":2==i?s="vec2":3==i?s="vec3":4==i&&(s="vec4");var r={name:t,data:e,itemSize:i,type:s};this._attributes[t]=r},CGL.Geometry.prototype.setVertices=function(t){this._vertices=t instanceof Float32Array?t:new Float32Array(t)},CGL.Geometry.prototype.setTexCoords=function(t){this.texCoords=t instanceof Float32Array?t:new Float32Array(t)},CGL.Geometry.prototype.testIndices=function(){for(var t=!1,e=0;e<this.verticesIndices.length;e++)(this.verticesIndices[3*e+0]>=this._vertices.length/3||this.verticesIndices[3*e+1]>=this._vertices.length/3||this.verticesIndices[3*e+2]>=this._vertices.length/3)&&(t=!0,console.log("index error!"))},CGL.Geometry.prototype.calcNormals=function(t){var e={};t||this.unIndex(),this.calculateNormals(e)},CGL.Geometry.prototype.setPointVertices=function(t){if(t.length%3!==0)return void console.error("CGL MESH : SetPointVertices: Array must be multiple of three.");for(this.vertices=t instanceof Float32Array?t:new Float32Array(t),this.texCoords instanceof Float32Array||(this.texCoords=new Float32Array(t.length/3*2)),this.verticesIndices.length=t.length/3,i=0;i<t.length/3;i++)this.verticesIndices[i]=i,this.texCoords[2*i]=0,this.texCoords[2*i+1]=0},CGL.Geometry.prototype.merge=function(t){if(t){var e=this.verticesIndices.length,i=this.vertices.length/3;this.verticesIndices.length=this.verticesIndices.length+t.verticesIndices.length;for(var s=0;s<t.verticesIndices.length;s++)this.verticesIndices[e+s]=t.verticesIndices[s]+i;this.vertices=CABLES.UTILS.float32Concat(this.vertices,t.vertices),this.texCoords=CABLES.UTILS.float32Concat(this.texCoords,t.texCoords),this.vertexNormals=CABLES.UTILS.float32Concat(this.vertexNormals,t.vertexNormals),this.tangents=CABLES.UTILS.float32Concat(this.vertexNormals,t.tangents),this.bitangents=CABLES.UTILS.float32Concat(this.vertexNormals,t.bitangents)}},CGL.Geometry.prototype.copy=function(){var t=0,e=new CGL.Geometry;for(e.faceVertCount=this.faceVertCount,e.setVertices(this._vertices.slice(0)),e.verticesIndices.length=this.verticesIndices.length,t=0;t<this.verticesIndices.length;t++)e.verticesIndices[t]=this.verticesIndices[t];for(e.texCoords=new Float32Array(this.texCoords.length),t=0;t<this.texCoords.length;t++)e.texCoords[t]=this.texCoords[t];for(e.texCoordsIndices.length=this.texCoordsIndices.length,t=0;t<this.texCoordsIndices.length;t++)e.texCoordsIndices[t]=this.texCoordsIndices[t];for(e.vertexNormals.length=this.vertexNormals.length,t=0;t<this.vertexNormals.length;t++)e.vertexNormals[t]=this.vertexNormals[t];if(this.tangents)for(e.tangents=[],e.tangents.length=this.tangents.length,t=0;t<this.tangents.length;t++)e.tangents[t]=this.tangents[t];if(this.biTangents)for(e.biTangents=[],e.biTangents.length=this.biTangents.length,t=0;t<this.biTangents.length;t++)e.biTangents[t]=this.biTangents[t];for(e.barycentrics.length=this.barycentrics.length,t=0;t<this.barycentrics.length;t++)e.barycentrics[t]=this.barycentrics[t];for(e.morphTargets.length=this.morphTargets.length,t=0;t<this.morphTargets.length;t++)e.morphTargets[t]=this.morphTargets[t];for(e.vertexColors.length=this.vertexColors.length,t=0;t<this.vertexColors.length;t++)e.vertexColors[t]=this.vertexColors[t];return e},CGL.Geometry.prototype.calculateNormals=function(t){function e(e){return vec3.subtract(i,e[0],e[1]),vec3.subtract(s,e[0],e[2]),vec3.cross(r,i,s),vec3.normalize(r,r),t&&t.forceZUp&&r[2]<0&&(r[0]*=-1,r[1]*=-1,r[2]*=-1),r}var i=vec3.create(),s=vec3.create(),r=vec3.create(),n=0;for(this.getVertexVec=function(t){var e=[0,0,0];return e[0]=this.vertices[3*t+0],e[1]=this.vertices[3*t+1],e[2]=this.vertices[3*t+2],e},this.vertexNormals instanceof Float32Array&&this.vertexNormals.length==this.vertices.length||(this.vertexNormals=new Float32Array(this.vertices.length)),n=0;n<this.vertices.length;n++)this.vertexNormals[n]=0;if(this.isIndexed()){var o=[];for(o.length=this.verticesIndices.length/3,n=0;n<this.verticesIndices.length;n+=3){var a=[this.getVertexVec(this.verticesIndices[n+0]),this.getVertexVec(this.verticesIndices[n+1]),this.getVertexVec(this.verticesIndices[n+2])];o[n/3]=e(a),this.vertexNormals[3*this.verticesIndices[n+0]+0]+=o[n/3][0],this.vertexNormals[3*this.verticesIndices[n+0]+1]+=o[n/3][1],this.vertexNormals[3*this.verticesIndices[n+0]+2]+=o[n/3][2],this.vertexNormals[3*this.verticesIndices[n+1]+0]+=o[n/3][0],this.vertexNormals[3*this.verticesIndices[n+1]+1]+=o[n/3][1],this.vertexNormals[3*this.verticesIndices[n+1]+2]+=o[n/3][2],this.vertexNormals[3*this.verticesIndices[n+2]+0]+=o[n/3][0],this.vertexNormals[3*this.verticesIndices[n+2]+1]+=o[n/3][1],this.vertexNormals[3*this.verticesIndices[n+2]+2]+=o[n/3][2]}for(n=0;n<this.verticesIndices.length;n+=3)for(var h=0;3>h;h++){var l=[this.vertexNormals[3*this.verticesIndices[n+h]+0],this.vertexNormals[3*this.verticesIndices[n+h]+1],this.vertexNormals[3*this.verticesIndices[n+h]+2]];vec3.normalize(l,l),this.vertexNormals[3*this.verticesIndices[n+h]+0]=l[0],this.vertexNormals[3*this.verticesIndices[n+h]+1]=l[1],this.vertexNormals[3*this.verticesIndices[n+h]+2]=l[2]}}else{var u=[];for(n=0;n<this.vertices.length;n+=9){var a=[[this.vertices[n+0],this.vertices[n+1],this.vertices[n+2]],[this.vertices[n+3],this.vertices[n+4],this.vertices[n+5]],[this.vertices[n+6],this.vertices[n+7],this.vertices[n+8]]],r=e(a);u.push(r[0],r[1],r[2],r[0],r[1],r[2],r[0],r[1],r[2])}this.vertexNormals=u}},CGL.Geometry.prototype.calcTangentsBitangents=function(){if(!this.vertices.length)throw new Error("Cannot calculate tangents/bitangents without vertices.");if(!this.vertexNormals.length)throw new Error("Cannot calculate tangents/bitangents without normals.");if(!this.texCoords.length)throw new Error("Cannot calculate tangents/bitangents without texture coordinates.");if(!this.verticesIndices.length)throw new Error("Cannot calculate tangents/bitangents without vertex indices.");if(this.verticesIndices.length%3!==0)throw new Error("Vertex indices mismatch!");const t=this.verticesIndices.length/3,e=this.vertices.length/3;this.tangents=new Float32Array(this.vertexNormals.length),this.biTangents=new Float32Array(this.vertexNormals.length);var i=[];i.length=2*e;const s=vec3.create(),r=vec3.create(),n=vec3.create(),o=vec2.create(),a=vec2.create(),h=vec2.create(),l=vec3.create(),u=vec3.create();for(var c=0;t>c;c+=1){const p=this.verticesIndices[3*c],d=this.verticesIndices[3*c+1],g=this.verticesIndices[3*c+2];vec3.set(s,this.vertices[3*p],this.vertices[3*p+1],this.vertices[3*p+2]),vec3.set(r,this.vertices[3*d],this.vertices[3*d+1],this.vertices[3*d+2]),vec3.set(n,this.vertices[3*g],this.vertices[3*g+1],this.vertices[3*g+2]),vec2.set(o,this.texCoords[2*p],this.texCoords[2*p+1]),vec2.set(a,this.texCoords[2*d],this.texCoords[2*d+1]),vec2.set(h,this.texCoords[2*g],this.texCoords[2*g+1]);const _=r[0]-s[0],f=n[0]-s[0],E=r[1]-s[1],A=n[1]-s[1],m=r[2]-s[2],C=n[2]-s[2],L=a[0]-o[0],S=h[0]-o[0],v=a[1]-o[1],B=h[1]-o[1],T=1/(L*B-S*v);vec3.set(l,(B*_-v*f)*T,(B*E-v*A)*T,(B*m-v*C)*T),vec3.set(u,(L*f-S*_)*T,(L*A-S*E)*T,(L*C-S*m)*T),i[p]=l,i[d]=l,i[g]=l,i[p+e]=u,i[d+e]=u,i[g+e]=u}const I=vec3.create(),b=vec3.create(),y=vec3.create(),x=vec3.create(),O=vec3.create(),R=vec3.create(),P=vec3.create(),N=vec3.create();for(var M=0;e>M;M+=1){vec3.set(I,this.vertexNormals[3*M],this.vertexNormals[3*M+1],this.vertexNormals[3*M+2]),vec3.set(b,i[M][0],i[M][1],i[M][2]);const F=vec3.dot(I,b);vec3.scale(O,I,F),vec3.subtract(R,b,O),vec3.normalize(N,R),vec3.cross(P,I,b);const G=vec3.dot(P,i[M+e]),w=0>G?-1:1;vec3.scale(y,N,1/w),vec3.cross(x,I,y),this.tangents[3*M+0]=y[0],this.tangents[3*M+1]=y[1],this.tangents[3*M+2]=y[2],this.biTangents[3*M+0]=x[0],this.biTangents[3*M+1]=x[1],this.biTangents[3*M+2]=x[2]}},CGL.Geometry.prototype.isIndexed=function(){return 0!=this.verticesIndices.length},CGL.Geometry.prototype.unIndex=function(t){var e=[],i=[],s=[],r=[],n=0,o=0;for(this.vertexNormals.length=0,o=0;o<this.verticesIndices.length;o+=3)e.push(this.vertices[3*this.verticesIndices[o+0]+0]),e.push(this.vertices[3*this.verticesIndices[o+0]+1]),e.push(this.vertices[3*this.verticesIndices[o+0]+2]),r.push(this.vertexNormals[3*this.verticesIndices[o+0]+0]),r.push(this.vertexNormals[3*this.verticesIndices[o+0]+1]),r.push(this.vertexNormals[3*this.verticesIndices[o+0]+2]),this.texCoords?(s.push(this.texCoords[2*this.verticesIndices[o+0]+0]),s.push(this.texCoords[2*this.verticesIndices[o+0]+1])):(s.push(0),s.push(0)),i.push(n),n++,e.push(this.vertices[3*this.verticesIndices[o+1]+0]),e.push(this.vertices[3*this.verticesIndices[o+1]+1]),e.push(this.vertices[3*this.verticesIndices[o+1]+2]),r.push(this.vertexNormals[3*this.verticesIndices[o+1]+0]),r.push(this.vertexNormals[3*this.verticesIndices[o+1]+1]),r.push(this.vertexNormals[3*this.verticesIndices[o+1]+2]),this.texCoords?(s.push(this.texCoords[2*this.verticesIndices[o+1]+0]),s.push(this.texCoords[2*this.verticesIndices[o+1]+1])):(s.push(0),s.push(0)),i.push(n),n++,e.push(this.vertices[3*this.verticesIndices[o+2]+0]),e.push(this.vertices[3*this.verticesIndices[o+2]+1]),e.push(this.vertices[3*this.verticesIndices[o+2]+2]),r.push(this.vertexNormals[3*this.verticesIndices[o+2]+0]),r.push(this.vertexNormals[3*this.verticesIndices[o+2]+1]),r.push(this.vertexNormals[3*this.verticesIndices[o+2]+2]),this.texCoords?(s.push(this.texCoords[2*this.verticesIndices[o+2]+0]),s.push(this.texCoords[2*this.verticesIndices[o+2]+1])):(s.push(0),s.push(0)),i.push(n),n++;this.vertices=e,this.texCoords=s,this.vertexNormals=r,this.verticesIndices.length=0,t&&(this.verticesIndices=i),this.calculateNormals()},CGL.Geometry.prototype.calcBarycentric=function(){this.barycentrics.length=this.vertices.length;for(var t=0;t<this.vertices.length;t++)this.barycentrics[t]=0;var e=0;for(t=0;t<this.vertices.length;t+=3)this.barycentrics[t+e]=1,e++,3==e&&(e=0)},CGL.Geometry.prototype.getBounds=function(){var t={maxX:-Number.MAX_VALUE,maxY:-Number.MAX_VALUE,maxZ:-Number.MAX_VALUE,minX:Number.MAX_VALUE,minY:Number.MAX_VALUE,minZ:Number.MAX_VALUE},e=0;for(e=0;e<this.vertices.length;e+=3)this.vertices[e+0]==this.vertices[e+0]&&(t.maxX=Math.max(t.maxX,this.vertices[e+0]),t.maxY=Math.max(t.maxY,this.vertices[e+1]),t.maxZ=Math.max(t.maxZ,this.vertices[e+2]),t.minX=Math.min(t.minX,this.vertices[e+0]),t.minY=Math.min(t.minY,this.vertices[e+1]),t.minZ=Math.min(t.minZ,this.vertices[e+2]));return t.x=Math.abs(t.maxX)+Math.abs(t.minX),t.y=Math.abs(t.maxY)+Math.abs(t.minY),t.z=Math.abs(t.maxZ)+Math.abs(t.minZ),t.maxAxis=Math.max(t.z,Math.max(t.x,t.y)),t},CGL.Geometry.prototype.center=function(t,e,s){void 0===t&&(t=!0,e=!0,s=!0);var r=this.getBounds(),n=[r.minX+(r.maxX-r.minX)/2,r.minY+(r.maxY-r.minY)/2,r.minZ+(r.maxZ-r.minZ)/2];for(i=0;i<this.vertices.length;i+=3)this.vertices[i+0]==this.vertices[i+0]&&(t&&(this.vertices[i+0]-=n[0]),e&&(this.vertices[i+1]-=n[1]),s&&(this.vertices[i+2]-=n[2]));return n},CGL.Geometry.prototype.mapTexCoords2d=function(){var t=this.getBounds(),e=this.vertices.length/3;this.texCoords=new Float32Array(length=2*e);for(var i=0;e>i;i++){var s=this.vertices[3*i+0],r=this.vertices[3*i+1];this.texCoords[2*i+0]=s/(t.maxX-t.minX)+.5,this.texCoords[2*i+1]=1-r/(t.maxY-t.minY)+.5}},CGL.Geometry.buildFromFaces=function(t){for(var e=[],i=[],s=0;s<t.length;s+=3){for(var r=t[s+0],n=t[s+1],o=t[s+2],a=[-1,-1,-1],h=0;e>h;h+=3)e[h+0]==r[0]&&e[h+1]==r[1]&&e[h+2]==r[2]&&(a[0]=h/3),e[h+0]==n[0]&&e[h+1]==n[1]&&e[h+2]==n[2]&&(a[1]=h/3),e[h+0]==o[0]&&e[h+1]==o[1]&&e[h+2]==o[2]&&(a[2]=h/3);-1==a[0]&&(e.push(r[0],r[1],r[2]),a[0]=(e.length-1)/3),-1==a[1]&&(e.push(n[0],n[1],n[2]),a[1]=(e.length-1)/3),-1==a[2]&&(e.push(o[0],o[1],o[2]),a[2]=(e.length-1)/3),i.push(parseInt(a[0],10)),i.push(parseInt(a[1],10)),i.push(parseInt(a[2],10))}var l=new CGL.Geometry;return l.vertices=e,l.verticesIndices=i,l},CGL.Geometry.json2geom=function(t){var e=new CGL.Geometry;if(e.verticesIndices=[],e.vertices=t.vertices||[],e.vertexNormals=t.normals||[],e.vertexColors=t.colors||[],e.tangents=t.tangents||[],e.biTangents=t.bitangents||[],t.texturecoords&&e.setTexCoords(t.texturecoords[0]),t.vertices_b64&&(e.vertices=new Float32Array(CABLES.b64decTypedArray(t.vertices_b64))),t.normals_b64&&(e.vertexNormals=new Float32Array(CABLES.b64decTypedArray(t.normals_b64))),t.tangents_b64&&(e.tangents=new Float32Array(CABLES.b64decTypedArray(t.tangents_b64))),t.bitangents_b64&&(e.biTangents=new Float32Array(CABLES.b64decTypedArray(t.bitangents_b64))),t.texturecoords_b64&&e.setTexCoords(new Float32Array(CABLES.b64decTypedArray(t.texturecoords_b64[0]))),t.faces_b64)e.verticesIndices=new Uint32Array(CABLES.b64decTypedArray(t.faces_b64));else{e.verticesIndices.length=3*t.faces.length;for(var i=0;i<t.faces.length;i++)e.verticesIndices[3*i]=t.faces[i][0],e.verticesIndices[3*i+1]=t.faces[i][1],e.verticesIndices[3*i+2]=t.faces[i][2]}return e},CABLES=CABLES||{},CGL.Marker=function(t){var e=new CGL.Geometry("marker");e.setPointVertices([1e-5,0,0,1,0,0,0,1e-5,0,0,1,0,0,0,1e-5,0,0,1]);var i=new CGL.Mesh(t,e,t.gl.LINES);i.setGeom(e);var s=new CGL.Shader(t,"markermaterial"),r="".endl()+"precision highp float;".endl()+"IN vec3 axisColor;".endl()+"void main()".endl()+"{".endl()+"    vec4 col=vec4(axisColor,1.0);".endl()+"    outColor = col;".endl()+"}",n="".endl()+"IN vec3 vPosition;".endl()+"UNI mat4 projMatrix;".endl()+"UNI mat4 mvMatrix;".endl()+"OUT vec3 axisColor;".endl()+"void main()".endl()+"{".endl()+"   vec4 pos=vec4(vPosition, 1.0);".endl()+"   if(pos.x!=0.0)axisColor=vec3(1.0,0.3,0.0);".endl()+"   if(pos.y!=0.0)axisColor=vec3(0.0,1.0,0.2);".endl()+"   if(pos.z!=0.0)axisColor=vec3(0.0,0.5,1.0);".endl()+"   gl_Position = projMatrix * mvMatrix * pos;".endl()+"}";s.setSource(n,r),this._vScale=vec3.create(),this.draw=function(t){var e=2;t.pushModelMatrix(),t.setShader(s),vec3.set(this._vScale,e,e,e),mat4.scale(t.mvMatrix,t.mvMatrix,this._vScale),t.pushDepthTest(!1),i.render(t.getShader()),t.popDepthTest(),t.setPreviousShader(),t.popModelMatrix()}},CGL.WirePoint=function(t,e){function i(){var e=[],i=24,r=0,n=0,o=.5;for(r=0;r<=Math.round(i);r++)n=360/Math.round(i)*r*CGL.DEG2RAD,e.push(Math.cos(n)*o),e.push(0),e.push(Math.sin(n)*o);for(r=0;r<=Math.round(i);r++)n=360/Math.round(i)*r*CGL.DEG2RAD,e.push(Math.cos(n)*o),e.push(Math.sin(n)*o),e.push(0);for(r=0;r<=Math.round(i);r++)n=360/Math.round(i)*r*CGL.DEG2RAD,e.push(0),e.push(Math.cos(n)*o),e.push(Math.sin(n)*o);t.gl.bindBuffer(t.gl.ARRAY_BUFFER,s),t.gl.bufferData(t.gl.ARRAY_BUFFER,new Float32Array(e),t.gl.STATIC_DRAW),s.itemSize=3,s.numItems=e.length/s.itemSize}var s=t.gl.createBuffer(),r=vec3.create();this.render=function(t,e){t.pushModelMatrix(),vec3.set(r,e,e,e),mat4.scale(t.mvMatrix,t.mvMatrix,r);var i=t.getShader();i.bind(),t.gl.bindBuffer(t.gl.ARRAY_BUFFER,s),t.gl.vertexAttribPointer(i.getAttrVertexPos(),s.itemSize,t.gl.FLOAT,!1,0,0),t.gl.enableVertexAttribArray(i.getAttrVertexPos()),t.gl.bindBuffer(t.gl.ARRAY_BUFFER,s),t.gl.drawArrays(t.gl.LINE_STRIP,0,s.numItems),t.popModelMatrix()},i()},CGL.WireCube=function(t){function e(){var e=[];e.push(-1,-1,1),e.push(1,-1,1),e.push(1,1,1),e.push(-1,1,1),e.push(-1,-1,1),e.push(-1,-1,-1),e.push(1,-1,-1),e.push(1,1,-1),e.push(-1,1,-1),e.push(-1,-1,-1),e.push(-1,-1,-1),e.push(-1,1,-1),e.push(-1,1,1),e.push(-1,-1,1),e.push(-1,-1,-1),e.push(1,-1,-1),e.push(1,1,-1),e.push(1,1,1),e.push(1,-1,1),e.push(1,-1,-1),t.gl.bindBuffer(t.gl.ARRAY_BUFFER,i),t.gl.bufferData(t.gl.ARRAY_BUFFER,new Float32Array(e),t.gl.STATIC_DRAW),i.itemSize=3,i.numItems=e.length/i.itemSize}var i=t.gl.createBuffer(),s=vec3.create();this.render=function(t,e,r,n){t.pushModelMatrix(),vec3.set(s,e||1,r||1,n||1),mat4.scale(t.mvMatrix,t.mvMatrix,s);var o=t.getShader();o.bind(),t.gl.bindBuffer(t.gl.ARRAY_BUFFER,i),t.gl.vertexAttribPointer(o.getAttrVertexPos(),i.itemSize,t.gl.FLOAT,!1,0,0),t.gl.enableVertexAttribArray(o.getAttrVertexPos()),t.gl.bindBuffer(t.gl.ARRAY_BUFFER,i),t.gl.drawArrays(t.gl.LINE_STRIP,0,i.numItems),t.popModelMatrix()},e()};var CGL=CGL||{};CGL.MatrixStack=function(){this._arr=[mat4.create()],this._index=0,this.stateCounter=0},CGL.MatrixStack.prototype.push=function(t){if(this._index++,this.stateCounter++,this._index==this._arr.length){var e=mat4.create();this._arr.push(e)}return mat4.copy(this._arr[this._index],t||this._arr[this._index-1]),this._arr[this._index]},CGL.MatrixStack.prototype.pop=function(){return this.stateCounter++,this._index--,this._index<0&&(this._index=0),this._arr[this._index]},CGL.MatrixStack.prototype.length=function(){return this._index};var CGL=CGL||{};CGL.MESH=CGL.MESH||{},CGL.MESH.lastMesh=null,CGL.Mesh=function(t,e,i){this._cgl=t,this._bufVertexAttrib=null,this._bufVerticesIndizes=this._cgl.gl.createBuffer(),this._attributes=[],this._attribLocs={},this._geom=null,this._lastShader=null,this._numInstances=0,this._glPrimitive=i,this._preWireframeGeom=null,this.addVertexNumbers=!1,this.feedBackAttributes=[],this.setGeom(e),this._feedBacks=[],this._feedBacksChanged=!1,this._transformFeedBackLoc=-1,this._lastAttrUpdate=0,Object.defineProperty(this,"numInstances",{get:function(){return this._numInstances},set:function(t){this.setNumInstances(t)}})},CGL.Mesh.prototype.updateVertices=function(t){this.setAttribute(CGL.SHADERVAR_VERTEX_POSITION,t.vertices,3)},CGL.Mesh.prototype.setAttributePointer=function(t,e,i,s){for(var r=0;r<this._attributes.length;r++)this._attributes[r].name==t&&(this._attributes[r].pointer||(this._attributes[r].pointer=[]),this._attributes[r].pointer.push({loc:-1,name:e,stride:i,offset:s,instanced:t==CGL.SHADERVAR_INSTANCE_MMATRIX}))},CGL.Mesh.prototype.getAttribute=function(t){for(var e=0;e<this._attributes.length;e++)if(this._attributes[e].name==t)return this._attributes[e]},CGL.Mesh.prototype.addAttribute=CGL.Mesh.prototype.updateAttribute=CGL.Mesh.prototype.setAttribute=function(t,e,i,s){var r=null,n=null,o=!1,a=0,h=e.length/i;for(0===h&&console.warn("CGL_MESH: num items in attribute "+t+" is ZERO"),"function"==typeof s&&(n=s),"object"==typeof s&&(s.cb&&(n=s.cb),s.instanced&&(o=s.instanced)),t==CGL.SHADERVAR_INSTANCE_MMATRIX&&(o=!0),e instanceof Float32Array?r=e:(r=new Float32Array(e),CGL.profileNonTypedAttrib++,CGL.profileNonTypedAttribNames=this._geom.name+" "+t+" "),a=0;a<this._attributes.length;a++)if(this._attributes[a].name==t)return this._attributes[a].numItems=h,this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER,this._attributes[a].buffer),this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER,r,this._cgl.gl.DYNAMIC_DRAW),this._attributes[a];var l=this._cgl.gl.createBuffer();this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER,l),this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER,r,this._cgl.gl.DYNAMIC_DRAW);var u=this._cgl.gl.FLOAT;s&&s.type&&(u=s.type);var c={buffer:l,name:t,cb:n,itemSize:i,numItems:h,startItem:0,instanced:o,type:u};return t==CGL.SHADERVAR_VERTEX_POSITION&&(this._bufVertexAttrib=c),this._attributes.push(c),this._attribLocs={},c},CGL.Mesh.prototype.getAttributes=function(){return this._attributes},CGL.Mesh.prototype.updateTexCoords=function(t){if(t.texCoords&&t.texCoords.length>0)this.setAttribute(CGL.SHADERVAR_VERTEX_TEXCOORD,t.texCoords,2);else{var e=new Float32Array(Math.round(t.vertices.length/3*2));this.setAttribute(CGL.SHADERVAR_VERTEX_TEXCOORD,e,2)}},CGL.Mesh.prototype._setVertexNumbers=function(){var t=this._geom.vertices.length/3;if(!this._verticesNumbers||this._verticesNumbers.length!=t){for(this._verticesNumbers=new Float32Array(t),i=0;t>i;i++)this._verticesNumbers[i]=i;this.setAttribute(CGL.SHADERVAR_VERTEX_NUMBER,this._verticesNumbers,1,function(e,i,s){s.uniformNumVertices||(s.uniformNumVertices=new CGL.Uniform(s,"f","numVertices",t)),s.uniformNumVertices.setValue(t)})}},CGL.Mesh.prototype.setVertexIndices=function(t){if(t.length>0){for(var e=0;e<t.length;e++)if(t[e]>=this._geom.vertices.length/3)return void console.warn("invalid index in "+this._geom.name);this._cgl.gl.bindBuffer(this._cgl.gl.ELEMENT_ARRAY_BUFFER,this._bufVerticesIndizes),this.vertIndicesTyped=t instanceof Uint16Array?t:new Uint16Array(t),this._cgl.gl.bufferData(this._cgl.gl.ELEMENT_ARRAY_BUFFER,this.vertIndicesTyped,this._cgl.gl.DYNAMIC_DRAW),this._bufVerticesIndizes.itemSize=1,this._bufVerticesIndizes.numItems=t.length}else this._bufVerticesIndizes.numItems=0},CGL.Mesh.prototype.setGeom=function(t){this._geom=t,CGL.MESH.lastMesh=null,CGL.profileMeshSetGeom++,this._disposeAttributes(),this.updateVertices(this._geom),this.setVertexIndices(this._geom.verticesIndices),this._geom.vertexNormals.length>0&&this.setAttribute("attrVertNormal",this._geom.vertexNormals,3),this.updateTexCoords(this._geom),this._geom.hasOwnProperty("tangents")&&this._geom.tangents&&this._geom.tangents.length>0&&this.setAttribute("attrTangent",this._geom.tangents,3),this._geom.hasOwnProperty("biTangents")&&this._geom.biTangents&&this._geom.biTangents.length>0&&this.setAttribute("attrBiTangent",this._geom.biTangents,3),this._geom.vertexColors.length>0&&this.setAttribute("attrVertColor",this._geom.vertexColors,4),this.addVertexNumbers&&this._setVertexNumbers();var e=this._geom.getAttributes();for(var i in e)this.setAttribute(i,e[i].data,e[i].itemSize)},CGL.Mesh.prototype._preBind=function(t){for(var e=0;e<this._attributes.length;e++)this._attributes[e].cb&&this._attributes[e].cb(this._attributes[e],this._geom,t)},CGL.Mesh.prototype._bind=function(t){t!=this._lastShader&&this.unBind();var e=[];this._attribLocs[t.id]?e=this._attribLocs[t.id]:this._attribLocs[t.id]=e,this._lastShader=t;var i=0;if(t.lastCompile>this._lastAttrUpdate||e.length!=this._attributes.length)for(this._lastAttrUpdate=t.lastCompile,i=0;i<this._attributes.length;i++)e[i]=-1;for(i=0;i<this._attributes.length;i++){var s=this._attributes[i];if(-1==e[i]&&s._attrLocationLastShaderTime!=t.lastCompile&&(s._attrLocationLastShaderTime=t.lastCompile,e[i]=this._cgl.glGetAttribLocation(t.getProgram(),s.name),CGL.profileAttrLoc++),-1!=e[i])if(this._cgl.gl.enableVertexAttribArray(e[i]),this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER,s.buffer),s.instanced)if(s.itemSize<=4)s.itemSize&&0!=s.itemSize||console.log("instanced attrib itemsize error",this._geom.name,s),this._cgl.gl.vertexAttribPointer(e[i],s.itemSize,s.type,!1,4*s.itemSize,0),this._cgl.gl.vertexAttribDivisor(e[i],1);else if(16==s.itemSize){const r=64;this._cgl.gl.vertexAttribPointer(e[i],4,s.type,!1,r,0),this._cgl.gl.enableVertexAttribArray(e[i]+1),this._cgl.gl.vertexAttribPointer(e[i]+1,4,s.type,!1,r,16),this._cgl.gl.enableVertexAttribArray(e[i]+2),this._cgl.gl.vertexAttribPointer(e[i]+2,4,s.type,!1,r,32),this._cgl.gl.enableVertexAttribArray(e[i]+3),this._cgl.gl.vertexAttribPointer(e[i]+3,4,s.type,!1,r,48),this._cgl.gl.vertexAttribDivisor(e[i],1),this._cgl.gl.vertexAttribDivisor(e[i]+1,1),this._cgl.gl.vertexAttribDivisor(e[i]+2,1),this._cgl.gl.vertexAttribDivisor(e[i]+3,1)}else console.log("unknown instance attrib size",s.name);else{if(s.itemSize&&0!=s.itemSize||console.log("attrib itemsize error",this._geom.name,s),this._cgl.gl.vertexAttribPointer(e[i],s.itemSize,s.type,!1,4*s.itemSize,0),s.pointer)for(var n=0;n<s.pointer.length;n++){var o=s.pointer[n];-1==o.loc&&(o.loc=this._cgl.glGetAttribLocation(t.getProgram(),o.name)),CGL.profileAttrLoc++,this._cgl.gl.enableVertexAttribArray(o.loc),this._cgl.gl.vertexAttribPointer(o.loc,s.itemSize,s.type,!1,o.stride,o.offset)}this.bindFeedback(s)}}0!==this._bufVerticesIndizes.numItems&&this._cgl.gl.bindBuffer(this._cgl.gl.ELEMENT_ARRAY_BUFFER,this._bufVerticesIndizes)},CGL.Mesh.prototype.unBind=function(){var t=this._lastShader;if(this._lastShader=null,t){var e=[];this._attribLocs[t.id]?e=this._attribLocs[t.id]:this._attribLocs[t.id]=e,CGL.MESH.lastMesh=null;for(var i=0;i<this._attributes.length;i++)this._attributes[i].instanced&&(this._attributes[i].itemSize<=4?(-1!=e[i]&&this._cgl.gl.vertexAttribDivisor(e[i],0),e[i]>=0&&this._cgl.gl.disableVertexAttribArray(e[i])):(this._cgl.gl.vertexAttribDivisor(e[i],0),this._cgl.gl.vertexAttribDivisor(e[i]+1,0),this._cgl.gl.vertexAttribDivisor(e[i]+2,0),this._cgl.gl.vertexAttribDivisor(e[i]+3,0),this._cgl.gl.disableVertexAttribArray(e[i]+1),this._cgl.gl.disableVertexAttribArray(e[i]+2),this._cgl.gl.disableVertexAttribArray(e[i]+3))),-1!=e[i]&&this._cgl.gl.disableVertexAttribArray(e[i])}},CGL.Mesh.prototype.meshChanged=function(){return this._cgl.lastMesh&&this._cgl.lastMesh!=this},CGL.Mesh.prototype.printDebug=function(t){for(console.log("--attributes"),i=0;i<this._attributes.length;i++)console.log("attribute "+i+"  "+this._attributes[i].name)},CGL.Mesh.prototype.setNumVertices=function(t){this._bufVertexAttrib.numItems=t},CGL.Mesh.prototype.render=function(t){if(t){t.wireframe||this._geom.isIndexed()||!this._preWireframeGeom||this.setGeom(this._preWireframeGeom),t.wireframe&&this._geom.isIndexed()&&(this._preWireframeGeom=this._geom,this._geom=this._geom.copy(),this._geom.unIndex(),this._geom.calcBarycentric(),this.setGeom(this._geom),this.setAttribute("attrBarycentric",this._geom.barycentrics,3));var e=!1;CGL.MESH.lastMesh!=this&&(CGL.MESH.lastMesh&&CGL.MESH.lastMesh.unBind(),e=!0),e&&this._preBind(t),t.bind(),t.bindTextures&&t.bindTextures(),this._bind(t),this.addVertexNumbers&&this._setVertexNumbers(),CGL.MESH.lastMesh=this;var i=this._cgl.gl.TRIANGLES;void 0!==this._glPrimitive&&(i=this._glPrimitive),null!==t.glPrimitive&&(i=t.glPrimitive),this.hasFeedbacks()?this.drawFeedbacks(t,i):0===this._bufVerticesIndizes.numItems?this._cgl.gl.drawArrays(i,this._bufVertexAttrib.startItem,this._bufVertexAttrib.numItems-this._bufVertexAttrib.startItem):0===this._numInstances?this._cgl.gl.drawElements(i,this._bufVerticesIndizes.numItems,this._cgl.gl.UNSIGNED_SHORT,0):this._cgl.gl.drawElementsInstanced(i,this._bufVerticesIndizes.numItems,this._cgl.gl.UNSIGNED_SHORT,0,this._numInstances)}},CGL.Mesh.prototype.setNumInstances=function(t){if(this._numInstances=t,t>0){for(var e=new Float32Array(t),i=0;t>i;i++)e[i]=i;this.setAttribute("instanceIndex",e,1,{instanced:!0})}},CGL.Mesh.prototype._disposeAttributes=function(){if(this._attributes){for(var t=0;t<this._attributes.length;t++)this._attributes[t].buffer&&(this._cgl.gl.deleteBuffer(this._attributes[t].buffer),this._attributes[t].buffer=null);this._attributes.length=0}},CGL.Mesh.prototype.dispose=function(){this._bufVertexAttrib&&this._bufVertexAttrib.buffer&&this._cgl.gl.deleteBuffer(this._bufVertexAttrib.buffer),this._bufVerticesIndizes&&this._cgl.gl.deleteBuffer(this._bufVerticesIndizes),this._disposeAttributes()},CGL.Mesh.prototype.hasFeedbacks=function(){return this._feedBacks.length>0},CGL.Mesh.prototype.removeFeedbacks=function(t){this._feedbacks&&(this._feedbacks.length=0,this._feedBacksChanged=!0)},CGL.Mesh.prototype.setAttributeFeedback=function(){},CGL.Mesh.prototype.setFeedback=function(t,e,i){var s={nameOut:e},r=!1;this.unBindFeedbacks();for(var n=0;n<this._feedBacks.length;n++)this._feedBacks[n].nameOut==e&&(s=this._feedBacks[n],r=!0);return r||(this._feedBacksChanged=!0),s.initialArr=i,s.attrib=t,s.outBuffer&&this._cgl.gl.deleteBuffer(s.outBuffer),s.outBuffer=this._cgl.gl.createBuffer(),this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER,s.outBuffer),this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER,s.initialArr,this._cgl.gl.STATIC_DRAW),this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER,s.attrib.buffer),this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER,s.initialArr,this._cgl.gl.STATIC_DRAW),r||this._feedBacks.push(s),s},CGL.Mesh.prototype.bindFeedback=function(t){if(this._feedBacks&&0!==this._feedBacks.length){-1==this._transformFeedBackLoc&&(this._transformFeedBackLoc=this._cgl.gl.createTransformFeedback()),this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK,this._transformFeedBackLoc);for(var e=!1,i=0;i<this._feedBacks.length;i++){var s=this._feedBacks[i];s.attrib==t&&(e=!0,this._cgl.gl.bindBufferBase(this._cgl.gl.TRANSFORM_FEEDBACK_BUFFER,i,s.outBuffer))}}},CGL.Mesh.prototype.drawFeedbacks=function(t,e){var i=0;if(this._feedBacksChanged){var s=[];for(this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK,this._transformFeedBackLoc),i=0;i<this._feedBacks.length;i++)s.push(this._feedBacks[i].nameOut);return t.setFeedbackNames(s),console.log("feedbacknames",s),t.compile(),this._feedBacksChanged=!1,this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK,null),void console.log("changed finished")}this._cgl.gl.beginTransformFeedback(this.glPrimitive),this._cgl.gl.drawArrays(e,0,this._feedBacks[0].attrib.numItems),this._cgl.gl.endTransformFeedback(),this.unBindFeedbacks(),this.feedBacksSwapBuffers()},CGL.Mesh.prototype.unBindFeedbacks=function(){for(i=0;i<this._feedBacks.length;i++)this._cgl.gl.bindBufferBase(this._cgl.gl.TRANSFORM_FEEDBACK_BUFFER,i,null);this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK,null)},CGL.Mesh.prototype.feedBacksSwapBuffers=function(){for(var t=0;t<this._feedBacks.length;t++){var e=this._feedBacks[t].attrib.buffer;this._feedBacks[t].attrib.buffer=this._feedBacks[t].outBuffer,this._feedBacks[t].outBuffer=e}};var CGL=CGL||{};CGL.profileShaderBinds=0,CGL.profileUniformCount=0,CGL.profileShaderCompiles=0,CGL.profileVideosPlaying=0,CGL.profileMVPMatrixCount=0,CGL.SHADERVAR_VERTEX_POSITION="vPosition",CGL.SHADERVAR_VERTEX_NUMBER="attrVertIndex",CGL.SHADERVAR_VERTEX_TEXCOORD="attrTexCoord",CGL.SHADERVAR_INSTANCE_MMATRIX="instMat",CGL.SHADERVAR_UNI_PROJMAT="projMatrix",CGL.SHADERVAR_UNI_VIEWMAT="viewMatrix",
CGL.SHADERVAR_UNI_MODELMAT="modelMatrix",CGL.SHADERVAR_UNI_NORMALMAT="normalMatrix",CGL.SHADERVAR_UNI_INVVIEWMAT="inverseViewMatrix",CGL.SHADERVAR_UNI_VIEWPOS="camPos",CGL.Shader=function(t,e){if(!t)throw"shader constructed without cgl";this._cgl=t,this._name=e||"unknown",this.glslVersion=0,t.glVersion>1&&(this.glslVersion=300),this.id=CABLES.simpleId(),this._program=null,this._uniforms=[],this._drawBuffers=[!0],this._defines=[],this._needsRecompile=!0,this._projMatrixUniform=null,this._mvMatrixUniform=null,this._mMatrixUniform=null,this._vMatrixUniform=null,this._camPosUniform=null,this._normalMatrixUniform=null,this._inverseViewMatrixUniform=null,this._attrVertexPos=-1,this.precision=t.patch.config.glslPrecision||"highp",this._pMatrixState=-1,this._vMatrixState=-1,this._modGroupCount=0,this._feedBackNames=[],this._attributes=[],this.glPrimitive=null,this.offScreenPass=!1,this._extensions=[],this.srcVert=this.getDefaultVertexShader(),this.srcFrag=this.getDefaultFragmentShader(),this.lastCompile=0,this._moduleNames=[],this._modules=[],this._moduleNumId=0,this._libs=[],this._tempNormalMatrix=mat4.create(),this._tempCamPosMatrix=mat4.create(),this._tempInverseViewMatrix=mat4.create(),this.setModules(["MODULE_VERTEX_POSITION","MODULE_COLOR","MODULE_BEGIN_FRAG"])},CGL.Shader.prototype.getCgl=function(){return this._cgl},CGL.Shader.prototype.getName=function(){return this._name},CGL.Shader.prototype.enableExtension=function(t){this.setWhyCompile("enable extension "+t),this._needsRecompile=!0,this._extensions.push(t)},CGL.Shader.prototype.getAttrVertexPos=function(){return this._attrVertexPos},CGL.Shader.prototype.hasTextureUniforms=function(){for(var t=0;t<this._uniforms.length;t++)if("t"==this._uniforms[t].getType())return!0;return!1},CGL.Shader.prototype.setWhyCompile=function(t){},CGL.Shader.prototype.setSource=function(t,e){this.srcVert=t,this.srcFrag=e,this.setWhyCompile("Source changed"),this._needsRecompile=!0},CGL.Shader.prototype._addLibs=function(t){for(var e in CGL.ShaderLibMods)if(t.indexOf(e)>-1){var i=new CGL.ShaderLibMods[e];t=t.replace("{{"+e+"}}",i.srcHeadFrag),this._libs.push(i),i.initUniforms&&i.initUniforms(this)}return t},CGL.Shader.prototype.compile=function(){CGL.profileShaderCompiles++,CGL.profileShaderCompileName=this._name;var t="";if(this._extensions)for(i=0;i<this._extensions.length;i++)t+="#extension "+this._extensions[i]+" : enable".endl();var e="",i=0;for(i=0;i<this._defines.length;i++)e+="#define "+this._defines[i][0]+" "+this._defines[i][1]+"".endl();if(this._uniforms)for(i=0;i<this._uniforms.length;i++)this._uniforms[i].resetLoc();this.hasTextureUniforms()&&(e+="#define HAS_TEXTURES".endl());var s="",r="";if(300==this.glslVersion){var n="",o=0;if(this.srcFrag.indexOf("outColor0")>-1&&(this._drawBuffers[0]=!0),this.srcFrag.indexOf("outColor1")>-1&&(this._drawBuffers[1]=!0),this.srcFrag.indexOf("outColor2")>-1&&(this._drawBuffers[2]=!0),this.srcFrag.indexOf("outColor3")>-1&&(this._drawBuffers[3]=!0),1==this._drawBuffers.length)n="out vec4 outColor;".endl(),n+="#define gl_FragColor outColor".endl();else{var o=0;n+="vec4 outColor;".endl();for(var i=0;i<this._drawBuffers.length;i++)0==o&&(n+="#define gl_FragColor outColor"+i+"".endl()),n+="layout(location = "+i+") out vec4 outColor"+i+";".endl(),o++}s="#version 300 es".endl()+"// ".endl()+"// vertex shader "+this._name.endl()+"// ".endl()+"precision "+this.precision+" float;".endl()+"".endl()+"#define WEBGL2".endl()+"#define texture2D texture".endl()+"#define UNI uniform".endl()+"#define IN in".endl()+"#define OUT out".endl(),r="#version 300 es".endl()+"// ".endl()+"// fragment shader "+this._name.endl()+"// ".endl()+"precision "+this.precision+" float;".endl()+"".endl()+"#define WEBGL2".endl()+"#define texture2D texture".endl()+"#define IN in".endl()+"#define UNI uniform".endl()+n.endl()}else r="".endl()+"// ".endl()+"// fragment shader "+this._name.endl()+"// ".endl()+"#define WEBGL1".endl()+"#define texture texture2D".endl()+"#define outColor gl_FragColor".endl()+"#define IN varying".endl()+"#define UNI uniform".endl(),s="".endl()+"// ".endl()+"// vertex shader "+this._name.endl()+"// ".endl()+"#define WEBGL1".endl()+"#define texture texture2D".endl()+"#define OUT varying".endl()+"#define IN attribute".endl()+"#define UNI uniform".endl();-1==r.indexOf("precision")&&(r="precision "+this.precision+" float;".endl()+r),-1==s.indexOf("precision")&&(s="precision "+this.precision+" float;".endl()+s),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(r+="#define MOBILE".endl(),s+="#define MOBILE".endl()),s=t+s+e+this.srcVert,r=t+r+e+this.srcFrag;var a="",h="";this._modules.sort(function(t,e){return t.group-e.group}),this._modules.sort(function(t,e){return t.priority||0-e.priority||0});var l=!1;for(i=0;i<this._moduleNames.length;i++){for(var u="",c="",p=0;p<this._modules.length;p++)if(this._modules[p].name==this._moduleNames[i]){if(a+="\n//---- MOD: "+this._modules[p].group+": "+p+" - "+this._modules[p].title+" ------\n",h+="\n//---- MOD: "+this._modules[p].group+": "+p+" - "+this._modules[p].title+" ------\n",u+="\n\n//---- MOD: "+this._modules[p].title+" ------\n",c+="\n\n//---- MOD: "+this._modules[p].title+" ------\n",!l){l=!0;for(var d=0;d<this._attributes.length;d++)this._attributes[d].name&&this._attributes[d].type&&(a+="".endl()+"#ifndef ATTRIB_"+this._attributes[d].name.endl()+"  #define ATTRIB_"+this._attributes[d].name.endl()+"  IN "+this._attributes[d].type+" "+this._attributes[d].name+";".endl()+"#endif",this._attributes[d].nameFrag&&(a+="".endl()+"#ifndef ATTRIB_"+this._attributes[d].nameFrag.endl()+"  #define ATTRIB_"+this._attributes[d].nameFrag.endl()+"  OUT "+this._attributes[d].type+" "+this._attributes[d].nameFrag+";".endl()+"#endif",u+="".endl()+this._attributes[d].nameFrag+"="+this._attributes[d].name+";"),h+="".endl()+"#ifndef ATTRIB_"+this._attributes[d].nameFrag.endl()+"  #define ATTRIB_"+this._attributes[d].nameFrag.endl()+"  IN "+this._attributes[d].type+" "+this._attributes[d].nameFrag+";".endl()+"#endif")}a+=this._modules[p].srcHeadVert||"",h+=this._modules[p].srcHeadFrag||"",u+=this._modules[p].srcBodyVert||"",c+=this._modules[p].srcBodyFrag||"",a+="\n//---- end mod ------\n",h+="\n//---- end mod ------\n",u+="\n//---- end mod ------\n",c+="\n//---- end mod ------\n",u=u.replace(/{{mod}}/g,this._modules[p].prefix),c=c.replace(/{{mod}}/g,this._modules[p].prefix),a=a.replace(/{{mod}}/g,this._modules[p].prefix),h=h.replace(/{{mod}}/g,this._modules[p].prefix),u=u.replace(/MOD_/g,this._modules[p].prefix),c=c.replace(/MOD_/g,this._modules[p].prefix),a=a.replace(/MOD_/g,this._modules[p].prefix),h=h.replace(/MOD_/g,this._modules[p].prefix)}s=s.replace("{{"+this._moduleNames[i]+"}}",u),r=r.replace("{{"+this._moduleNames[i]+"}}",c)}if(s=s.replace("{{MODULES_HEAD}}",a),r=r.replace("{{MODULES_HEAD}}",h),s=this._addLibs(s),r=this._addLibs(r),this._program)for(this._program=this._createProgram(s,r),this._projMatrixUniform=null,i=0;i<this._uniforms.length;i++)this._uniforms[i].resetLoc();else this._program=this._createProgram(s,r);this.finalShaderFrag=r,this.finalShaderVert=s,CGL.MESH.lastMesh=null,CGL.MESH.lastShader=null,this._needsRecompile=!1,this.lastCompile=CABLES.now()},CGL.Shader.prototype.bind=function(){var t=0;if(CGL.MESH.lastShader=this,(!this._program||this._needsRecompile)&&this.compile(),!this._projMatrixUniform)for(this._attrVertexPos=this._cgl.glGetAttribLocation(this._program,CGL.SHADERVAR_VERTEX_POSITION),this._projMatrixUniform=this._cgl.gl.getUniformLocation(this._program,CGL.SHADERVAR_UNI_PROJMAT),this._mvMatrixUniform=this._cgl.gl.getUniformLocation(this._program,"mvMatrix"),this._vMatrixUniform=this._cgl.gl.getUniformLocation(this._program,CGL.SHADERVAR_UNI_VIEWMAT),this._mMatrixUniform=this._cgl.gl.getUniformLocation(this._program,CGL.SHADERVAR_UNI_MODELMAT),this._camPosUniform=this._cgl.gl.getUniformLocation(this._program,CGL.SHADERVAR_UNI_VIEWPOS),this._normalMatrixUniform=this._cgl.gl.getUniformLocation(this._program,CGL.SHADERVAR_UNI_NORMALMAT),this._inverseViewMatrixUniform=this._cgl.gl.getUniformLocation(this._program,CGL.SHADERVAR_UNI_INVVIEWMAT),t=0;t<this._uniforms.length;t++)this._uniforms[t].needsUpdate=!0;for(this._cgl.currentProgram!=this._program&&(CGL.profileShaderBinds++,this._cgl.gl.useProgram(this._program),this._cgl.currentProgram=this._program),t=0;t<this._uniforms.length;t++)this._uniforms[t].needsUpdate&&this._uniforms[t].updateValue();if(this._pMatrixState!=this._cgl.getProjectionMatrixStateCount()&&(this._pMatrixState=this._cgl.getProjectionMatrixStateCount(),this._cgl.gl.uniformMatrix4fv(this._projMatrixUniform,!1,this._cgl.pMatrix),CGL.profileMVPMatrixCount++),this._vMatrixUniform)this._vMatrixState!=this._cgl.getViewMatrixStateCount()&&(this._cgl.gl.uniformMatrix4fv(this._vMatrixUniform,!1,this._cgl.vMatrix),CGL.profileMVPMatrixCount++,this._vMatrixState=this._cgl.getViewMatrixStateCount(),this._inverseViewMatrixUniform&&(mat4.invert(this._tempInverseViewMatrix,this._cgl.vMatrix),this._cgl.gl.uniformMatrix4fv(this._inverseViewMatrixUniform,!1,this._tempInverseViewMatrix),CGL.profileMVPMatrixCount++)),this._cgl.gl.uniformMatrix4fv(this._mMatrixUniform,!1,this._cgl.mMatrix),CGL.profileMVPMatrixCount++,this._camPosUniform&&(mat4.invert(this._tempCamPosMatrix,this._cgl.vMatrix),this._cgl.gl.uniform3f(this._camPosUniform,this._tempCamPosMatrix[12],this._tempCamPosMatrix[13],this._tempCamPosMatrix[14]),CGL.profileMVPMatrixCount++);else{var e=mat4.create();mat4.mul(e,this._cgl.vMatrix,this._cgl.mMatrix),this._cgl.gl.uniformMatrix4fv(this._mvMatrixUniform,!1,e),CGL.profileMVPMatrixCount++}this._normalMatrixUniform&&(mat4.mul(this._tempNormalMatrix,this._cgl.vMatrix,this._cgl.mMatrix),mat4.invert(this._tempNormalMatrix,this._tempNormalMatrix),mat4.transpose(this._tempNormalMatrix,this._tempNormalMatrix),this._cgl.gl.uniformMatrix4fv(this._normalMatrixUniform,!1,this._tempNormalMatrix),CGL.profileMVPMatrixCount++);for(var t=0;t<this._libs.length;t++)this._libs[t].onBind&&this._libs[t].onBind.bind(this._libs[t])(this._cgl,this)},CGL.Shader.prototype.toggleDefine=function(t,e){e?this.define(t):this.removeDefine(t)},CGL.Shader.prototype.define=function(t,e){e||(e="");for(var i=0;i<this._defines.length;i++){if(this._defines[i][0]==t&&this._defines[i][1]==e)return;if(this._defines[i][0]==t)return this._defines[i][1]=e,void(this._needsRecompile=!0)}this._defines.push([t,e]),this._needsRecompile=!0,this.setWhyCompile("define "+t+" "+e)},CGL.Shader.prototype.getDefines=function(){return this._defines},CGL.Shader.prototype.getDefine=function(t){for(var e=0;e<this._defines.length;e++)if(this._defines[e][0]==t)return this._defines[e][1];return null},CGL.Shader.prototype.hasDefine=function(t){for(var e=0;e<this._defines.length;e++)if(this._defines[e][0]==t)return!0},CGL.Shader.prototype.removeDefine=function(t){for(var e=0;e<this._defines.length;e++)if(this._defines[e][0]==t)return this._defines.splice(e,1),void(this._needsRecompile=!0)},CGL.Shader.prototype.removeModule=function(t){for(var e=0;e<this._modules.length;e++)if(t&&t.id&&(this._modules[e].id==t.id||!this._modules[e])){for(var i=!0;i;){i=!1;for(var s=0;s<this._uniforms.length;s++)0!=this._uniforms[s].getName().indexOf(t.prefix)||(this._uniforms.splice(s,1),i=!0)}this._needsRecompile=!0,this.setWhyCompile("remove module "+t.title),this._modules.splice(e,1);break}},CGL.Shader.prototype.getNumModules=function(){return this._modules.length},CGL.Shader.prototype.getCurrentModules=function(){return this._modules},CGL.Shader.prototype.addModule=function(t,e){return t.id||(t.id=CABLES.generateUUID()),t.numId||(t.numId=this._moduleNumId),t.num||(t.num=this._modules.length),t.group=e?e.group:this._modGroupCount++,t.prefix="mod"+t.group,this._modules.push(t),this._needsRecompile=!0,this.setWhyCompile("add module "+t.title),this._moduleNumId++,t},CGL.Shader.prototype.setModules=function(t){this._moduleNames=t},CGL.Shader.prototype.dispose=function(){this._cgl.gl.deleteProgram(this._program)},CGL.Shader.prototype.setDrawBuffers=function(t){this._drawBuffers=t,this._needsRecompile=!0},CGL.Shader.prototype.getUniforms=function(){return this._uniforms},CGL.Shader.prototype.getUniform=function(t){for(var e=0;e<this._uniforms.length;e++)if(this._uniforms[e].getName()==t)return this._uniforms[e];return null},CGL.Shader.prototype.removeUniform=function(t){for(var e=0;e<this._uniforms.length;e++)this._uniforms[e].getName()==t&&this._uniforms.splice(e,1);this._needsRecompile=!0,this.setWhyCompile("remove uniform "+t)},CGL.Shader.prototype.addUniform=function(t){this._uniforms.push(t),this.setWhyCompile("add uniform "+name),this._needsRecompile=!0},CGL.Shader.prototype._createProgram=function(t,e){var i=this._cgl.gl.createProgram();return this.vshader=CGL.Shader.createShader(this._cgl,t,this._cgl.gl.VERTEX_SHADER,this),this.fshader=CGL.Shader.createShader(this._cgl,e,this._cgl.gl.FRAGMENT_SHADER,this),this._cgl.gl.attachShader(i,this.vshader),this._cgl.gl.attachShader(i,this.fshader),this._linkProgram(i),i},CGL.Shader.prototype.hasErrors=function(){return this._hasErrors},CGL.Shader.prototype._linkProgram=function(t){this._feedBackNames.length>0&&this._cgl.gl.transformFeedbackVaryings(t,this._feedBackNames,this._cgl.gl.SEPARATE_ATTRIBS),this._cgl.gl.linkProgram(t),this._cgl.gl.validateProgram(t),this._cgl.gl.getProgramParameter(t,this._cgl.gl.LINK_STATUS)||(console.warn(this._cgl.gl.getShaderInfoLog(this.fshader)),console.warn(this._cgl.gl.getShaderInfoLog(this.vshader)),console.error(name+" shader linking fail..."),console.log("srcFrag",this.srcFrag),console.log("srcVert",this.srcVert),console.log(name+" programinfo: ",this._cgl.gl.getProgramInfoLog(t)),console.log("--------------------------------------"),console.log(this),console.log("--------------------------------------"),name="errorshader",this.setSource(CGL.Shader.getDefaultVertexShader(),CGL.Shader.getErrorFragmentShader()))},CGL.Shader.prototype.getProgram=function(){return this._program},CGL.Shader.prototype.setFeedbackNames=function(t){this._needsRecompile=!0,this._feedBackNames=t},CGL.Shader.prototype.getDefaultVertexShader=CGL.Shader.getDefaultVertexShader=function(){return"".endl()+"{{MODULES_HEAD}}".endl()+"IN vec3 vPosition;".endl()+"IN vec2 attrTexCoord;".endl()+"IN vec3 attrVertNormal;".endl()+"IN float attrVertIndex;".endl()+"OUT vec2 texCoord;".endl()+"OUT vec3 norm;".endl()+"UNI mat4 projMatrix;".endl()+"UNI mat4 viewMatrix;".endl()+"UNI mat4 modelMatrix;".endl()+"void main()".endl()+"{".endl()+"   texCoord=attrTexCoord;".endl()+"   norm=attrVertNormal;".endl()+"   vec4 pos=vec4(vPosition,  1.0);".endl()+"   mat4 mMatrix=modelMatrix;".endl()+"   {{MODULE_VERTEX_POSITION}}".endl()+"   gl_Position = projMatrix * (viewMatrix*mMatrix) * pos;".endl()+"}"},CGL.Shader.prototype.getDefaultFragmentShader=CGL.Shader.getDefaultFragmentShader=function(t,e,i){return void 0==t&&(t=.5,e=.5,i=.5),"".endl()+"IN vec2 texCoord;".endl()+"{{MODULES_HEAD}}".endl()+"void main()".endl()+"{".endl()+"    vec4 col=vec4("+t+","+e+","+i+",1.0);".endl()+"    {{MODULE_COLOR}}".endl()+"    outColor = col;".endl()+"}"},CGL.Shader.prototype.addAttribute=function(t){for(var e=0;e<this._attributes.length;e++)if(this._attributes[e].name==t.name&&this._attributes[e].nameFrag==t.nameFrag)return;this._attributes.push(t),this._needsRecompile=!0},CGL.Shader.getErrorFragmentShader=function(){return"".endl()+"void main()".endl()+"{".endl()+"   float g=mod((gl_FragCoord.y+gl_FragCoord.x),50.0)/50.0;".endl()+"   g= step(0.1,g);".endl()+"   outColor = vec4( g+0.5, 0.0, 0.0, 1.0);".endl()+"}"},CGL.Shader.createShader=function(t,e,i,s){function r(t){var e=[],i=t.split("\n");for(var s in i){var r=i[s].split(":");parseInt(r[2],10)&&e.push(parseInt(r[2],10))}return e}var n=t.gl.createShader(i);if(t.gl.shaderSource(n,e),t.gl.compileShader(n),!t.gl.getShaderParameter(n,t.gl.COMPILE_STATUS)){console.log("compile status: "),i==t.gl.VERTEX_SHADER&&console.log("VERTEX_SHADER"),i==t.gl.FRAGMENT_SHADER&&console.log("FRAGMENT_SHADER"),console.warn(t.gl.getShaderInfoLog(n));var o=t.gl.getShaderInfoLog(n),a=r(o),h='<div class="shaderErrorCode">',l=e.match(/^.*((\r\n|\n|\r)|$)/gm);for(var u in l){var c=parseInt(u,10)+1,p=c+": "+l[u];console.log(p);var d=!1;for(var g in a)a[g]==c&&(d=!0);d&&(h+='<span class="error">'),h+=p,d&&(h+="</span>")}console.warn(o),o=o.replace(/\n/g,"<br/>"),h=o+"<br/>"+h+"<br/><br/>",CABLES.UI?CABLES.UI.MODAL.showError("shader error "+name,h):console.log("shader error "+name,h),h+="</div>",name="errorshader",s.setSource(CGL.Shader.getDefaultVertexShader(),CGL.Shader.getErrorFragmentShader())}return n};var CGL=CGL||{};CGL.ShaderLibMods={"CGL.BLENDMODES":function(){this.name="blendmodes",this.srcHeadFrag=CGL.TextureEffect.getBlendCode()},"CGL.RANDOM_OLD":function(){this.name="randomNumber",this.srcHeadFrag="".endl()+"float cgl_random(vec2 co)".endl()+"{".endl()+"    return fract(sin(dot(co.xy ,vec2(12.9898,4.1414))) * 432758.5453);".endl()+"}".endl()+"vec3 cgl_random3(vec2 co)".endl()+"{".endl()+"    return vec3( cgl_random(co),cgl_random(co+0.5711),cgl_random(co+1.5711));".endl()+"}"},"CGL.RANDOM_LOW":function(){this.name="randomNumber",this.srcHeadFrag="".endl()+"float cgl_random(vec2 co)".endl()+"{".endl()+"    return fract(sin(dot(co.xy ,vec2(12.9898,4.1414))) * 358.5453);".endl()+"}".endl()+"vec3 cgl_random3(vec2 co)".endl()+"{".endl()+"    return vec3( cgl_random(co),cgl_random(co+0.5711),cgl_random(co+1.5711));".endl()+"}"},"CGL.RANDOM_TEX":function(){this.name="randomNumbertex",this.srcHeadFrag="".endl()+"UNI sampler2D CGLRNDTEX;".endl()+"float cgl_random(vec2 co)".endl()+"{".endl()+"    return texture(CGLRNDTEX,co*5711.0).r;".endl()+"}".endl()+"vec3 cgl_random3(vec2 co)".endl()+"{".endl()+"    return texture(CGLRNDTEX,co*5711.0).rgb;".endl()+"}",this.initUniforms=function(t){return[new CGL.Uniform(t,"t","CGLRNDTEX",7)]},this.onBind=function(t,e){CGL.Texture.getRandomTexture(t),t.setTexture(7,CGL.Texture.getRandomTexture(t).tex)}}},CGL.Uniform=function(t,e,i,s){if(this._loc=-1,this._type=e,this._name=i,this._shader=t,this._value=1e-5,this._oldValue=null,this._port=null,this._shader.addUniform(this),this.needsUpdate=!0,"f"==e)this.set=this.setValue=this.setValueF.bind(this),this.updateValue=this.updateValueF.bind(this);else if("f[]"==e)this.set=this.setValue=this.setValueArrayF.bind(this),this.updateValue=this.updateValueArrayF.bind(this);else if("3f[]"==e)this.set=this.setValue=this.setValueArray3F.bind(this),this.updateValue=this.updateValueArray3F.bind(this);else if("i"==e)this.set=this.setValue=this.setValueI.bind(this),this.updateValue=this.updateValueI.bind(this);else if("b"==e)this.set=this.setValue=this.setValueBool.bind(this),this.updateValue=this.updateValueBool.bind(this);else if("4f"==e)this.set=this.setValue=this.setValue4F.bind(this),this.updateValue=this.updateValue4F.bind(this);else if("3f"==e)this.set=this.setValue=this.setValue3F.bind(this),this.updateValue=this.updateValue3F.bind(this);else if("2f"==e)this.set=this.setValue=this.setValue2F.bind(this),this.updateValue=this.updateValue2F.bind(this);else if("t"==e)this.set=this.setValue=this.setValueT.bind(this),this.updateValue=this.updateValueT.bind(this);else{if("m4"!=e)throw new Error("Unknown uniform type");this.set=this.setValue=this.setValueM4.bind(this),this.updateValue=this.updateValueM4.bind(this)}"object"==typeof s&&s instanceof CABLES.Port?(this._port=s,this._value=this._port.get(),this._port.onValueChanged=this.updateFromPort.bind(this)):this._value=s,this.setValue(this._value),this.needsUpdate=!0},CGL.Uniform.prototype.getType=function(){return this._type},CGL.Uniform.prototype.getName=function(){return this._name},CGL.Uniform.prototype.getValue=function(){return this._value},CGL.Uniform.prototype.resetLoc=function(){this._loc=-1,this.needsUpdate=!0},CGL.Uniform.prototype.bindTextures=function(){},CGL.Uniform.prototype.getLoc=function(){return this._loc},CGL.Uniform.prototype.updateFromPort=function(){this.setValue(this._port.get())},CGL.Uniform.prototype.updateValueF=function(){-1==this._loc?this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name):this.needsUpdate=!1,this._shader.getCgl().gl.uniform1f(this._loc,this._value),CGL.profileUniformCount++},CGL.Uniform.prototype.setValueF=function(t){t!=this._value&&(this.needsUpdate=!0,this._value=t)},CGL.Uniform.prototype.updateValueI=function(){-1==this._loc?this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name):this.needsUpdate=!1,this._shader.getCgl().gl.uniform1i(this._loc,this._value),CGL.profileUniformCount++},CGL.Uniform.prototype.setValueI=function(t){t!=this._value&&(this.needsUpdate=!0,this._value=t)},CGL.Uniform.prototype.updateValueBool=function(){-1==this._loc?this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name):this.needsUpdate=!1,this._shader.getCgl().gl.uniform1i(this._loc,this._value?1:0),CGL.profileUniformCount++},CGL.Uniform.prototype.setValueBool=function(t){t!=this._value&&(this.needsUpdate=!0,this._value=t)},CGL.Uniform.prototype.setValueArray3F=function(t){this.needsUpdate=!0,this._value=t},CGL.Uniform.prototype.updateValueArray3F=function(){-1==this._loc?this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name):this.needsUpdate=!1,this._value&&(this._shader.getCgl().gl.uniform3fv(this._loc,this._value),CGL.profileUniformCount++)},CGL.Uniform.prototype.setValueArrayF=function(t){this.needsUpdate=!0,this._value=t},CGL.Uniform.prototype.updateValueArrayF=function(){-1==this._loc?this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name):this.needsUpdate=!1,this._value&&(this._shader.getCgl().gl.uniform1fv(this._loc,this._value),CGL.profileUniformCount++)},CGL.Uniform.prototype.updateValue3F=function(){this._value&&(-1==this._loc&&(this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name),CGL.profileShaderGetUniform++,CGL.profileShaderGetUniformName=this._name),this._shader.getCgl().gl.uniform3f(this._loc,this._value[0],this._value[1],this._value[2]),this.needsUpdate=!1,CGL.profileUniformCount++)},CGL.Uniform.prototype.setValue3F=function(t){t&&(this._oldValue?(t[0]!=this._oldValue[0]||t[1]!=this._oldValue[1]||t[2]!=this._oldValue[2])&&(this._oldValue[0]=t[0],this._oldValue[1]=t[1],this._oldValue[2]=t[2],this.needsUpdate=!0):(this._oldValue=[t[0]-1,1,2],this.needsUpdate=!0),this._value=t)},CGL.Uniform.prototype.updateValue2F=function(){this._value&&(-1==this._loc&&(this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name),CGL.profileShaderGetUniform++,CGL.profileShaderGetUniformName=this._name),this._shader.getCgl().gl.uniform2f(this._loc,this._value[0],this._value[1]),this.needsUpdate=!1,CGL.profileUniformCount++)},CGL.Uniform.prototype.setValue2F=function(t){t&&(this._oldValue?(t[0]!=this._oldValue[0]||t[1]!=this._oldValue[1])&&(this._oldValue[0]=t[0],this._oldValue[1]=t[1],this.needsUpdate=!0):(this._oldValue=[t[0]-1,1],this.needsUpdate=!0),this._value=t)},CGL.Uniform.prototype.updateValueT=function(){-1==this._loc&&(this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name),CGL.profileShaderGetUniform++,CGL.profileShaderGetUniformName=this._name,-1==this._loc&&console.log("texture this._loc unknown!!")),CGL.profileUniformCount++,this._shader.getCgl().gl.uniform1i(this._loc,this._value),this.needsUpdate=!1},CGL.Uniform.prototype.setValueT=function(t){this.needsUpdate=!0,this._value=t},CGL.Uniform.prototype.updateValue4F=function(){-1==this._loc&&(this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name),CGL.profileShaderGetUniform++,CGL.profileShaderGetUniformName=this._name),this._shader.getCgl().gl.uniform4f(this._loc,this._value[0],this._value[1],this._value[2],this._value[3]),CGL.profileUniformCount++},CGL.Uniform.prototype.setValue4F=function(t){this.needsUpdate=!0,this._value=t},CGL.Uniform.prototype.updateValueM4=function(){-1==this._loc&&(this._loc=this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(),this._name),CGL.profileShaderGetUniform++,CGL.profileShaderGetUniformName=this._name),this._shader.getCgl().gl.uniformMatrix4fv(this._loc,!1,this._value),CGL.profileUniformCount++},CGL.Uniform.prototype.setValueM4=function(t){this.needsUpdate=!0,this._value=t};var CGL=CGL||{};CGL.MESHES=CGL.MESHES||{},CGL.MESHES.getSimpleRect=function(t,e){var i=new CGL.Geometry(e);return i.vertices=[1,1,0,-1,1,0,1,-1,0,-1,-1,0],i.texCoords=[1,1,0,1,1,0,0,0],i.verticesIndices=[0,1,2,2,1,3],new CGL.Mesh(t,i)};var CGL=CGL||{};CGL.Context=function(t){var e=this,i=[0,0,0,0];this.glVersion=0,this.glUseHalfFloatTex=!1,this.clearCanvasTransparent=!0,this.clearCanvasDepth=!0,this.patch=t,this.temporaryTexture=null,this.frameStore={},this.gl=null,this.pMatrix=mat4.create(),this.mMatrix=mat4.create(),this.vMatrix=mat4.create(),this._textureslots=[],this._pMatrixStack=new CGL.MatrixStack,this._mMatrixStack=new CGL.MatrixStack,this._vMatrixStack=new CGL.MatrixStack,this._glFrameBufferStack=[],this._frameBufferStack=[],this._shaderStack=[],Object.defineProperty(this,"mvMatrix",{get:function(){return this.mMatrix},set:function(t){this.mMatrix=t}}),this.canvas=null,this.pixelDensity=1,mat4.identity(this.mMatrix),mat4.identity(this.vMatrix);var s=new CGL.Shader(this,"simpleshader");s.setModules(["MODULE_VERTEX_POSITION","MODULE_COLOR","MODULE_BEGIN_FRAG"]),s.setSource(CGL.Shader.getDefaultVertexShader(),CGL.Shader.getDefaultFragmentShader());var r=s,n=[];this.addEventListener=function(t,e){"resize"==t&&n.push(e)},this.removeEventListener=function(t,e){if("resize"==t)for(var i in n)if(n[i]==e)return void n.splice(i,1)},this.exitError=function(t,e){this.patch.exitError(t,e),this.aborted=!0},this.setCanvas=function(t){if(CGL.TextureEffectMesh=CGL.TextureEffectMesh||null,this.canvas="string"==typeof t?document.getElementById(t):t,this.patch.config.canvas||(this.patch.config.canvas={}),this.patch.config.canvas.hasOwnProperty("preserveDrawingBuffer")||(this.patch.config.canvas.preserveDrawingBuffer=!1),this.patch.config.canvas.hasOwnProperty("premultipliedAlpha")||(this.patch.config.canvas.premultipliedAlpha=!1),this.patch.config.canvas.hasOwnProperty("alpha")||(this.patch.config.canvas.alpha=!1),this.patch.config.hasOwnProperty("clearCanvasColor")&&(this.clearCanvasTransparent=this.patch.config.clearCanvasColor),this.patch.config.hasOwnProperty("clearCanvasDepth")&&(this.clearCanvasDepth=this.patch.config.clearCanvasDepth),this.gl=this.canvas.getContext("webgl2",this.patch.config.canvas),this.gl?this.glVersion=2:(this.gl=this.canvas.getContext("webgl",this.patch.config.canvas)||this.canvas.getContext("experimental-webgl",this.patch.config.canvas),this.glVersion=1,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&(this.glUseHalfFloatTex=!0),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&(this.patch.config.canvas.hasOwnProperty("powerPreference")||(this.patch.config.canvas.powerPreference="high-performance"))),!this.gl)return void this.exitError("NO_WEBGL","sorry, could not initialize WebGL. Please check if your Browser supports WebGL.");var i=(this.gl.getExtension("GL_OES_standard_derivatives"),this.gl.getExtension("ANGLE_instanced_arrays")||this.gl);i.vertexAttribDivisorANGLE&&(this.gl.vertexAttribDivisor=i.vertexAttribDivisorANGLE.bind(i),this.gl.drawElementsInstanced=i.drawElementsInstancedANGLE.bind(i)),e.updateSize()},this.updateSize=function(){this.canvas.width=this.canvasWidth=this.canvas.clientWidth*this.pixelDensity,this.canvas.height=this.canvasHeight=this.canvas.clientHeight*this.pixelDensity},this.canvasWidth=-1,this.canvasHeight=-1,this.canvasScale=1;var o=-1,a=-1;this.getViewPort=function(){return i},this.resetViewPort=function(){this.gl.viewport(i[0],i[1],i[2],i[3])},this.setViewPort=function(t,e,s,r){i[0]=Math.round(t),i[1]=Math.round(e),i[2]=Math.round(s),i[3]=Math.round(r),this.gl.viewport(i[0],i[1],i[2],i[3])},this.beginFrame=function(){CABLES.UI&&(gui.metaTexturePreviewer.render(),CABLES.UI.patchPreviewer&&CABLES.UI.patchPreviewer.render()),e.setShader(s)},this.screenShot=function(t,e){e&&(this.gl.clearColor(1,1,1,1),this.gl.colorMask(!1,!1,!1,!0),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.colorMask(!0,!0,!0,!0)),this.canvas&&this.canvas.toBlob&&this.canvas.toBlob(function(e){t?t(e):console.log("no screenshot callback...")}.bind(this))},this.endFrame=function(){if(CABLES.UI&&CABLES.GL_MARKER.drawMarkerLayer(this),e.setPreviousShader(),this._vMatrixStack.length()>0&&console.warn("view matrix stack length !=0 at end of rendering..."),this._mMatrixStack.length()>0&&console.warn("mvmatrix stack length !=0 at end of rendering..."),this._pMatrixStack.length()>0&&console.warn("pmatrix stack length !=0 at end of rendering..."),this._glFrameBufferStack.length>0&&console.warn("glFrameBuffer stack length !=0 at end of rendering..."),this._stackDepthTest.length>0&&console.warn("depthtest stack length !=0 at end of rendering..."),this._stackDepthWrite.length>0&&console.warn("depthwrite stack length !=0 at end of rendering..."),this._stackDepthFunc.length>0&&console.warn("depthfunc stack length !=0 at end of rendering..."),this._stackBlend.length>0&&console.warn("blend stack length !=0 at end of rendering..."),this._stackBlendMode.length>0&&console.warn("blendMode stack length !=0 at end of rendering..."),this._shaderStack.length>0&&console.warn("this._shaderStack length !=0 at end of rendering..."),o!=e.canvasWidth||a!=e.canvasHeight){o=e.canvasWidth,a=e.canvasHeight,this.setSize(e.canvasWidth/this.pixelDensity,e.canvasHeight/this.pixelDensity),this.updateSize();for(var t=0;t<n.length;t++)n[t]()}},this.getShader=function(){if(r&&(!this.frameStore||!0===this.frameStore.renderOffscreen==r.offScreenPass==!0))return r;for(var t=this._shaderStack.length-1;t>=0;t--)if(this._shaderStack[t]&&this.frameStore.renderOffscreen==this._shaderStack[t].offScreenPass)return this._shaderStack[t]},this.getDefaultShader=function(){return s},this.setShader=function(t){this._shaderStack.push(t),r=t},this.setPreviousShader=function(){if(0===this._shaderStack.length)throw"Invalid shader stack pop!";this._shaderStack.pop(),r=this._shaderStack[this._shaderStack.length-1]},this.pushGlFrameBuffer=function(t){this._glFrameBufferStack.push(t)},this.popGlFrameBuffer=function(){return 0==this._glFrameBufferStack.length?null:(this._glFrameBufferStack.pop(),this._glFrameBufferStack[this._glFrameBufferStack.length-1])},this.getCurrentGlFrameBuffer=function(){return 0===this._glFrameBufferStack.length?null:this._glFrameBufferStack[this._glFrameBufferStack.length-1]},this.pushFrameBuffer=function(t){this._frameBufferStack.push(t)},this.popFrameBuffer=function(){return 0==this._frameBufferStack.length?null:(this._frameBufferStack.pop(),this._frameBufferStack[this._frameBufferStack.length-1])},this.getCurrentFrameBuffer=function(){return 0===this._frameBufferStack.length?null:this._frameBufferStack[this._frameBufferStack.length-1]};var h=vec3.create();vec3.set(h,0,0,2);var l=vec3.create();vec3.set(l,0,0,0),this.renderStart=function(t,e,i){e||(e=l),i||(i=h),this.pushDepthTest(!0),this.pushDepthWrite(!0),this.pushDepthFunc(t.gl.LEQUAL),this.clearCanvasTransparent&&(t.gl.clearColor(0,0,0,0),t.gl.clear(t.gl.COLOR_BUFFER_BIT)),this.clearCanvasDepth&&t.gl.clear(t.gl.DEPTH_BUFFER_BIT),t.setViewPort(0,0,t.canvasWidth,t.canvasHeight),mat4.perspective(t.pMatrix,45,t.canvasWidth/t.canvasHeight,.1,1e3),mat4.identity(t.mMatrix),mat4.identity(t.vMatrix),mat4.translate(t.mMatrix,t.mMatrix,e),mat4.translate(t.vMatrix,t.vMatrix,i),t.pushPMatrix(),t.pushModelMatrix(),t.pushViewMatrix(),t.pushBlendMode(CGL.BLEND_NORMAL,!1);for(var s=0;s<this._textureslots.length;s++)this._textureslots[s]=null;t.beginFrame()},this.renderEnd=function(t,e){t.popViewMatrix(),t.popModelMatrix(),t.popPMatrix(),this.popDepthTest(),this.popDepthWrite(),this.popDepthFunc(),
this.popBlend(),this.popBlendMode(),t.endFrame()},this.getTexture=function(t){return this._textureslots[t]},this.setTexture=function(t,e,i){this._textureslots[t]!=e&&(this.gl.activeTexture(this.gl.TEXTURE0+t),this.gl.bindTexture(i||this.gl.TEXTURE_2D,e),this._textureslots[t]=e)},this.fullScreen=function(){this.canvas.requestFullscreen?this.canvas.requestFullscreen():this.canvas.mozRequestFullScreen?this.canvas.mozRequestFullScreen():this.canvas.webkitRequestFullscreen?this.canvas.webkitRequestFullscreen():this.canvas.msRequestFullscreen&&this.canvas.msRequestFullscreen()},this.setSize=function(t,e){this.canvas.style.width=t+"px",this.canvas.style.height=e+"px",this.canvas.width=t*this.pixelDensity,this.canvas.height=e*this.pixelDensity,this.updateSize()},this._resizeToWindowSize=function(){this.setSize(window.innerWidth,window.innerHeight),this.updateSize()},this._resizeToParentSize=function(){var t=this.canvas.parentElement;return t?(this.setSize(t.clientWidth,t.clientHeight),console.log("_resizeToParentSize",t.clientWidth,t.clientHeight),void this.updateSize()):void console.error("cables: can not resize to container element")},this.setAutoResize=function(t){window.removeEventListener("resize",this._resizeToWindowSize.bind(this)),window.removeEventListener("resize",this._resizeToParentSize.bind(this)),"window"==t&&(window.addEventListener("resize",this._resizeToWindowSize.bind(this)),window.addEventListener("orientationchange",this._resizeToWindowSize.bind(this)),this._resizeToWindowSize()),"parent"==t&&(window.addEventListener("resize",this._resizeToParentSize.bind(this)),this._resizeToParentSize())},this.printError=function(t){var e=this.gl.getError();if(e!=this.gl.NO_ERROR){var i="";e==this.gl.OUT_OF_MEMORY&&(i="OUT_OF_MEMORY"),e==this.gl.INVALID_ENUM&&(i="INVALID_ENUM"),e==this.gl.INVALID_OPERATION&&(i="INVALID_OPERATION"),e==this.gl.INVALID_FRAMEBUFFER_OPERATION&&(i="INVALID_FRAMEBUFFER_OPERATION"),e==this.gl.INVALID_VALUE&&(i="INVALID_VALUE"),e==this.gl.CONTEXT_LOST_WEBGL&&(i="CONTEXT_LOST_WEBGL"),e==this.gl.NO_ERROR&&(i="NO_ERROR"),console.log("gl error: ",t,e,i)}},this.saveScreenshot=function(t,e,i,s){function r(t,e,i){return Array(e-String(t).length+1).join(i||"0")+t}this.patch.renderOneFrame();var n=this.canvas.clientWidth,o=this.canvas.clientHeight;i&&(this.canvas.width=i,n=i),s&&(this.canvas.height=s,o=s);var a=new Date,h=String(a.getFullYear())+String(a.getMonth()+1)+String(a.getDate())+"_"+r(a.getHours(),2)+r(a.getMinutes(),2)+r(a.getSeconds(),2);t?t+=".png":t="cables_"+h+".png",this.patch.cgl.screenShot(function(i){if(this.canvas.width=n,this.canvas.height=o,i){var s=document.createElement("a");s.download=t,s.href=URL.createObjectURL(i),document.body.appendChild(s),s.click(),e&&e(i),s.remove()}else console.log("screenshot: no blob")}.bind(this),!0)}},CGL.Context.prototype.pushViewMatrix=function(){this.vMatrix=this._vMatrixStack.push(this.vMatrix)},CGL.Context.prototype.popViewMatrix=function(){this.vMatrix=this._vMatrixStack.pop()},CGL.Context.prototype.getViewMatrixStateCount=function(){return this._vMatrixStack.stateCounter},CGL.Context.prototype.pushPMatrix=function(){this.pMatrix=this._pMatrixStack.push(this.pMatrix)},CGL.Context.prototype.popPMatrix=function(){return this.pMatrix=this._pMatrixStack.pop(),this.pMatrix},CGL.Context.prototype.getProjectionMatrixStateCount=function(){return this._pMatrixStack.stateCounter},CGL.Context.prototype.pushMvMatrix=CGL.Context.prototype.pushModelMatrix=function(){this.mMatrix=this._mMatrixStack.push(this.mMatrix)},CGL.Context.prototype.popMvMatrix=CGL.Context.prototype.popmMatrix=CGL.Context.prototype.popModelMatrix=function(){return this.mMatrix=this._mMatrixStack.pop(),this.mMatrix},CGL.Context.prototype.modelMatrix=function(){return this.mMatrix},CGL.Context.prototype._stackDepthTest=[],CGL.Context.prototype.pushDepthTest=function(t){this._stackDepthTest.push(t),t?this.gl.enable(this.gl.DEPTH_TEST):this.gl.disable(this.gl.DEPTH_TEST)},CGL.Context.prototype.stateDepthTest=function(){return this._stackDepthTest[this._stackDepthTest.length-1]},CGL.Context.prototype.popDepthTest=function(){this._stackDepthTest.pop(),this._stackDepthTest[this._stackDepthTest.length-1]?this.gl.enable(this.gl.DEPTH_TEST):this.gl.disable(this.gl.DEPTH_TEST)},CGL.Context.prototype._stackDepthWrite=[],CGL.Context.prototype.pushDepthWrite=function(t){this._stackDepthWrite.push(t),this.gl.depthMask(t)},CGL.Context.prototype.stateDepthWrite=function(){return this._stackDepthWrite[this._stackDepthWrite.length-1]},CGL.Context.prototype.popDepthWrite=function(){this._stackDepthWrite.pop(),this.gl.depthMask(this._stackDepthWrite[this._stackDepthWrite.length-1])},CGL.Context.prototype._stackDepthFunc=[],CGL.Context.prototype.pushDepthFunc=function(t){this._stackDepthFunc.push(t),this.gl.depthFunc(t)},CGL.Context.prototype.stateDepthFunc=function(){return this._stackDepthFunc.length>0?this._stackDepthFunc[this._stackDepthFunc.length-1]:!1},CGL.Context.prototype.popDepthFunc=function(){this._stackDepthFunc.pop(),this._stackDepthFunc.length>0&&this.gl.depthFunc(this._stackDepthFunc[this._stackDepthFunc.length-1])},CGL.Context.prototype._stackBlend=[],CGL.Context.prototype.pushBlend=function(t){this._stackBlend.push(t),t?this.gl.enable(this.gl.BLEND):this.gl.disable(this.gl.BLEND)},CGL.Context.prototype.popBlend=function(){this._stackBlend.pop(),this._stackBlend[this._stackBlend.length-1]?this.gl.enable(this.gl.BLEND):this.gl.disable(this.gl.BLEND)},CGL.Context.prototype.stateBlend=function(){return this._stackBlend[this._stackBlend.length-1]},CGL.BLEND_NONE=0,CGL.BLEND_NORMAL=1,CGL.BLEND_ADD=2,CGL.BLEND_SUB=3,CGL.BLEND_MUL=4,CGL.Context.prototype._stackBlendMode=[],CGL.Context.prototype._stackBlendModePremul=[],CGL.Context.prototype.pushBlendMode=function(t,e){this._stackBlendMode.push(t),this._stackBlendModePremul.push(e);const i=this._stackBlendMode.length-1;this.pushBlend(this._stackBlendMode[i]!==CGL.BLEND_NONE),this._setBlendMode(this._stackBlendMode[i],this._stackBlendModePremul[i])},CGL.Context.prototype.popBlendMode=function(){this._stackBlendMode.pop(),this._stackBlendModePremul.pop();const t=this._stackBlendMode.length-1;this.popBlend(this._stackBlendMode[t]!==CGL.BLEND_NONE),t>0&&this._setBlendMode(this._stackBlendMode[t],this._stackBlendModePremul[t])},CGL.Context.prototype.glGetAttribLocation=function(t,e){const i=this.gl.getAttribLocation(t,e);return i},CGL.Context.prototype._setBlendMode=function(t,e){const i=this.gl;t==CGL.BLEND_NONE||(t==CGL.BLEND_ADD?e?(i.blendEquationSeparate(i.FUNC_ADD,i.FUNC_ADD),i.blendFuncSeparate(i.ONE,i.ONE,i.ONE,i.ONE)):(i.blendEquation(i.FUNC_ADD),i.blendFunc(i.SRC_ALPHA,i.ONE)):t==CGL.BLEND_SUB?e?(i.blendEquationSeparate(i.FUNC_ADD,i.FUNC_ADD),i.blendFuncSeparate(i.ZERO,i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ONE_MINUS_SRC_ALPHA)):(i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ZERO,i.ONE_MINUS_SRC_COLOR)):t==CGL.BLEND_MUL?e?(i.blendEquationSeparate(i.FUNC_ADD,i.FUNC_ADD),i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA)):(i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ZERO,i.SRC_COLOR)):t==CGL.BLEND_NORMAL?e?(i.blendEquationSeparate(i.FUNC_ADD,i.FUNC_ADD),i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA)):(i.blendEquationSeparate(i.FUNC_ADD,i.FUNC_ADD),i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA)):console.log("setblendmode: unknown blendmode"))};var CGL=CGL||{};CGL.tempTexture=null,CGL.tempTextureEmpty=null,CGL.DEFAULT_TEXTURE_SIZE=8,CGL.Texture=function(t,e){if(!t)throw"no cgl";this._cgl=t,this.tex=this._cgl.gl.createTexture(),this.id=CABLES.uuid(),this.width=0,this.height=0,this.flip=!0,this.shadowMap=!1,this.filter=CGL.Texture.FILTER_NEAREST,this.wrap=CGL.Texture.WRAP_CLAMP_TO_EDGE,this.texTarget=this._cgl.gl.TEXTURE_2D,e&&e.type&&(this.texTarget=e.type),this.textureType=CGL.Texture.TYPE_DEFAULT,this.unpackAlpha=!0,this._fromData=!0,this.name="unknown",e?(this.name=e.name||this.name,e.isDepthTexture&&(this.textureType=CGL.Texture.TYPE_DEPTH),e.isFloatingPointTexture&&(this.textureType=CGL.Texture.TYPE_FLOAT),"textureType"in e&&(this.textureType=e.textureType),"filter"in e&&(this.filter=e.filter),"wrap"in e&&(this.wrap=e.wrap),"unpackAlpha"in e&&(this.unpackAlpha=e.unpackAlpha),"flip"in e&&(this.flip=e.flip),"shadowMap"in e&&(this.shadowMap=e.shadowMap)):e={width:CGL.DEFAULT_TEXTURE_SIZE,height:CGL.DEFAULT_TEXTURE_SIZE},this.setSize(e.width,e.height)},CGL.Texture.prototype.compareSettings=function(t){return t?t.width==this.width&&t.height==this.height&&t.filter==this.filter&&t.wrap==this.wrap&&t.textureType==this.textureType&&t.unpackAlpha==this.unpackAlpha&&t.flip==this.flip:!1},CGL.Texture.prototype.clone=function(){var t=new CGL.Texture(this._cgl,{name:this.name,filter:this.filter,wrap:this.wrap,textureType:this.textureType,unpackAlpha:this.unpackAlpha,flip:this.flip,width:this.width,height:this.height});return this.compareSettings(t)||(console.error("Cloned texture settings do not compare!"),console.log(this),console.log(t)),t},CGL.Texture.prototype.setSize=function(t,e){if((t!=t||0>=t||!t)&&(t=CGL.DEFAULT_TEXTURE_SIZE),(e!=e||0>=e||!e)&&(e=CGL.DEFAULT_TEXTURE_SIZE),t=Math.floor(t),e=Math.floor(e),this.width!=t||this.height!=e){this.width=t,this.height=e,this._cgl.gl.bindTexture(this.texTarget,this.tex),CGL.profileTextureResize++;var i=null;if(this.textureType==CGL.Texture.TYPE_FLOAT&&(this.filter=CGL.Texture.FILTER_NEAREST),this._setFilter(),this.textureType==CGL.Texture.TYPE_FLOAT)if(1==this._cgl.glVersion)if(this._cgl.glUseHalfFloatTex){var s=this._cgl.gl.getExtension("OES_texture_half_float");if(1==this._cgl.glVersion&&!s)throw"no half float texture extension";this._cgl.gl.texImage2D(this.texTarget,0,this._cgl.gl.RGBA,t,e,0,this._cgl.gl.RGBA,s.HALF_FLOAT_OES,null)}else{var s=this._cgl.gl.getExtension("OES_texture_float");this._cgl.gl.texImage2D(this.texTarget,0,this._cgl.gl.RGBA,t,e,0,this._cgl.gl.RGBA,this._cgl.gl.FLOAT,null)}else this._cgl.gl.texImage2D(this.texTarget,0,this._cgl.gl.RGBA32F,t,e,0,this._cgl.gl.RGBA,this._cgl.gl.FLOAT,null);else if(this.textureType==CGL.Texture.TYPE_DEPTH)if(1==this._cgl.glVersion){var r=this._cgl.gl.DEPTH_COMPONENT;this._cgl.gl.texImage2D(this.texTarget,0,r,t,e,0,this._cgl.gl.DEPTH_COMPONENT,this._cgl.gl.UNSIGNED_SHORT,null)}else{var r=this._cgl.gl.DEPTH_COMPONENT32F;this._cgl.gl.texImage2D(this.texTarget,0,r,t,e,0,this._cgl.gl.DEPTH_COMPONENT,this._cgl.gl.FLOAT,null)}else this._cgl.gl.texImage2D(this.texTarget,0,this._cgl.gl.RGBA,t,e,0,this._cgl.gl.RGBA,this._cgl.gl.UNSIGNED_BYTE,i);this.updateMipMap(),this._cgl.gl.bindTexture(this.texTarget,null)}},CGL.Texture.prototype.initFromData=function(t,e,i,s,r){this.filter=s,this.wrap=r,void 0==s&&(this.filter=CGL.Texture.FILTER_LINEAR),void 0==r&&(this.wrap=CGL.Texture.CLAMP_TO_EDGE),this.width=e,this.height=i,this._fromData=!0,this._cgl.gl.bindTexture(this.texTarget,this.tex),this._cgl.gl.texImage2D(this.texTarget,0,this._cgl.gl.RGBA,e,i,0,this._cgl.gl.RGBA,this._cgl.gl.UNSIGNED_BYTE,t),this._setFilter(),this.updateMipMap(),this._cgl.gl.bindTexture(this.texTarget,null)},CGL.Texture.prototype.updateMipMap=function(){2!=this._cgl.glVersion&&!this.isPowerOfTwo()||this.filter!=CGL.Texture.FILTER_MIPMAP||this._cgl.gl.generateMipmap(this.texTarget)},CGL.Texture.prototype.initTexture=function(t,e){this._fromData=!1,this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.unpackAlpha),t.width&&(this.width=t.width),t.height&&(this.height=t.height),e&&(this.filter=e),this._cgl.gl.bindTexture(this.texTarget,this.tex),this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL,!this.flip),this._cgl.gl.texImage2D(this.texTarget,0,this._cgl.gl.RGBA,this._cgl.gl.RGBA,this._cgl.gl.UNSIGNED_BYTE,t),this._setFilter(),this.updateMipMap(),this._cgl.gl.bindTexture(this.texTarget,null),this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1)},CGL.Texture.prototype["delete"]=function(){CGL.profileTextureDelete++,this._cgl.gl.deleteTexture(this.tex)},CGL.Texture.prototype.isPowerOfTwo=function(){return CGL.Texture.isPowerOfTwo(this.width)&&CGL.Texture.isPowerOfTwo(this.height)},CGL.Texture.prototype.printInfo=function(){console.log(this.getInfo())},CGL.Texture.prototype.getInfoReadable=function(){var t=this.getInfo(),e="";t.name=t.name.substr(0,t.name.indexOf("?rnd="));for(var i in t)e+="* "+i+":  **"+t[i]+"**\n";return e},CGL.Texture.prototype.getInfo=function(){var t={};t.name=this.name,t["power of two"]=this.isPowerOfTwo(),t.size=this.width+" x "+this.height;var e=this.texTarget;return this.texTarget==this._cgl.gl.TEXTURE_2D&&(e="TEXTURE_2D"),t.target=e,t.unpackAlpha=this.unpackAlpha,t.textureType=this.textureType==CGL.Texture.TYPE_FLOAT?"TYPE_FLOAT":this.textureType==CGL.Texture.TYPE_DEPTH?"TYPE_DEPTH":this.textureType==CGL.Texture.TYPE_DEFAULT?"TYPE_DEFAULT":"UNKNOWN",t.wrap=this.wrap==CGL.Texture.WRAP_CLAMP_TO_EDGE?"CLAMP_TO_EDGE":this.wrap==CGL.Texture.WRAP_REPEAT?"WRAP_REPEAT":this.wrap==CGL.Texture.WRAP_MIRRORED_REPEAT?"WRAP_MIRRORED_REPEAT":"UNKNOWN",t.filter=this.filter==CGL.Texture.FILTER_NEAREST?"FILTER_NEAREST":this.filter==CGL.Texture.FILTER_LINEAR?"FILTER_LINEAR":this.filter==CGL.Texture.FILTER_MIPMAP?"FILTER_MIPMAP":"UNKNOWN",t},CGL.Texture.prototype._setFilter=function(){if(this._fromData||this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.unpackAlpha),this.shadowMap&&(console.log("shadowmap tex"),this._cgl.gl.texParameteri(this._cgl.gl.TEXTURE_2D,this._cgl.gl.TEXTURE_COMPARE_MODE,this._cgl.gl.COMPARE_REF_TO_TEXTURE),this._cgl.gl.texParameteri(this._cgl.gl.TEXTURE_2D,this._cgl.gl.TEXTURE_COMPARE_FUNC,this._cgl.gl.LEQUAL)),1!=this._cgl.glVersion||this.isPowerOfTwo())if(this.wrap==CGL.Texture.WRAP_CLAMP_TO_EDGE?(this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_WRAP_S,this._cgl.gl.CLAMP_TO_EDGE),this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_WRAP_T,this._cgl.gl.CLAMP_TO_EDGE)):this.wrap==CGL.Texture.WRAP_REPEAT?(this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_WRAP_S,this._cgl.gl.REPEAT),this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_WRAP_T,this._cgl.gl.REPEAT)):this.wrap==CGL.Texture.WRAP_MIRRORED_REPEAT&&(this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_WRAP_S,this._cgl.gl.MIRRORED_REPEAT),this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_WRAP_T,this._cgl.gl.MIRRORED_REPEAT)),this.filter==CGL.Texture.FILTER_NEAREST)this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_MAG_FILTER,this._cgl.gl.NEAREST),this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_MIN_FILTER,this._cgl.gl.NEAREST);else if(this.filter==CGL.Texture.FILTER_LINEAR)this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_MIN_FILTER,this._cgl.gl.LINEAR),this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_MAG_FILTER,this._cgl.gl.LINEAR);else{if(this.filter!=CGL.Texture.FILTER_MIPMAP)throw console.log("unknown texture filter!",this.filter),new Error("unknown texture filter!"+this.filter);this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_MAG_FILTER,this._cgl.gl.LINEAR),this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_MIN_FILTER,this._cgl.gl.LINEAR_MIPMAP_LINEAR)}else this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_MAG_FILTER,this._cgl.gl.NEAREST),this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_MIN_FILTER,this._cgl.gl.NEAREST),this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_WRAP_S,this._cgl.gl.CLAMP_TO_EDGE),this._cgl.gl.texParameteri(this.texTarget,this._cgl.gl.TEXTURE_WRAP_T,this._cgl.gl.CLAMP_TO_EDGE),this.filter=CGL.Texture.FILTER_NEAREST,this.wrap=CGL.Texture.WRAP_CLAMP_TO_EDGE},CGL.Texture.load=function(t,e,i,s){var r=t.patch.loading.start("texture",e),n=new CGL.Texture(t);return n.name=e,CABLES.UI&&gui.jobs().start({id:"loadtexture"+r,title:"loading texture ("+e+")"}),n.image=new Image,n.image.crossOrigin="",s&&s.hasOwnProperty("filter")&&(n.filter=s.filter),s&&s.hasOwnProperty("flip")&&(n.flip=s.flip),s&&s.hasOwnProperty("wrap")&&(n.wrap=s.wrap),s&&s.hasOwnProperty("unpackAlpha")&&(n.unpackAlpha=s.unpackAlpha),n.image.onabort=n.image.onerror=function(e){console.log(e),t.patch.loading.finished(r);var s={error:!0};i&&i(s),CABLES.UI&&gui.jobs().finish("loadtexture"+r)},n.image.onload=function(e){n.initTexture(n.image),t.patch.loading.finished(r),CABLES.UI&&gui.jobs().finish("loadtexture"+r),i&&i()},n.image.src=e,n},CGL.Texture.getTempTexture=function(t){return CGL.tempTexture||(CGL.tempTexture=CGL.Texture.getTemporaryTexture(t,256,CGL.Texture.FILTER_LINEAR,CGL.Texture.REPEAT)),CGL.tempTexture},CGL.Texture.getEmptyTexture=function(t){if(CGL.tempTextureEmpty)return CGL.tempTextureEmpty;CGL.tempTextureEmpty=new CGL.Texture(t);var e=new Uint8Array(256);return CGL.tempTextureEmpty.initFromData(e,8,8,CGL.Texture.FILTER_NEAREST,CGL.Texture.WRAP_REPEAT),CGL.tempTextureEmpty},CGL.Texture.getRandomTexture=function(t){if(CGL.randomTexture)return CGL.randomTexture;const e=256,i=new Uint8Array(262144);for(var s=0;65536>s;s++)i[4*s+0]=255*Math.random(),i[4*s+1]=255*Math.random(),i[4*s+2]=255*Math.random(),i[4*s+3]=255;return CGL.randomTexture=new CGL.Texture(t),CGL.randomTexture.initFromData(i,e,e,CGL.Texture.FILTER_NEAREST,CGL.Texture.WRAP_REPEAT),CGL.randomTexture},CGL.Texture.getTempGradientTexture=function(t){if(CGL.tempTextureGradient)return CGL.tempTextureGradient;var e=new CGL.Texture(t);const i=256;for(var s=new Uint8Array(262144),r=0;i>r;r++)for(var n=0;i>n;n++)s[4*(n+r*i)+0]=s[4*(n+r*i)+1]=s[4*(n+r*i)+2]=255-r,s[4*(n+r*i)+3]=255;return e.initFromData(s,i,i,CGL.Texture.FILTER_NEAREST,CGL.Texture.WRAP_REPEAT),CGL.tempTextureGradient=e,e},CGL.Texture.getTemporaryTexture=function(t,e,i,s){for(var r=new CGL.Texture(t),n=[],o=0;e>o;o++)for(var a=0;e>a;a++)32>(a+o)%64?(n.push(200+o/e*25+a/e*25),n.push(200+o/e*25+a/e*25),n.push(200+o/e*25+a/e*25)):(n.push(40+o/e*25+a/e*25),n.push(40+o/e*25+a/e*25),n.push(40+o/e*25+a/e*25)),n.push(255);var h=new Uint8Array(n);return r.initFromData(h,e,e,i,s),r},CGL.Texture.createFromImage=function(t,e,i){var s=new CGL.Texture(t,i);return s.flip=!1,s.image=e,s.width=e.width,s.height=e.height,s.initTexture(e,i.filter),s},CGL.Texture.fromImage=function(t,e,i,s){console.error("deprecated texture from image...");var r=new CGL.Texture(t);return r.flip=!1,i&&(r.filter=i),s&&(r.wrap=s),r.image=e,r.initTexture(e),r},CGL.Texture.isPowerOfTwo=function(t){return 1==t||2==t||4==t||8==t||16==t||32==t||64==t||128==t||256==t||512==t||1024==t||2048==t||4096==t||8192==t||16384==t},CGL.Texture.FILTER_NEAREST=0,CGL.Texture.FILTER_LINEAR=1,CGL.Texture.FILTER_MIPMAP=2,CGL.Texture.WRAP_REPEAT=0,CGL.Texture.WRAP_MIRRORED_REPEAT=1,CGL.Texture.WRAP_CLAMP_TO_EDGE=2,CGL.Texture.TYPE_DEFAULT=0,CGL.Texture.TYPE_DEPTH=1,CGL.Texture.TYPE_FLOAT=2;var CGL=CGL||{};CGL.TextureEffect=function(t,e){this._cgl=t,t.TextureEffectMesh||this.createMesh(),this._textureSource=null,this._textureTarget=null,this._frameBuf=this._cgl.gl.createFramebuffer(),this._frameBuf2=this._cgl.gl.createFramebuffer(),this._renderbuffer=this._cgl.gl.createRenderbuffer(),this._renderbuffer2=this._cgl.gl.createRenderbuffer(),this.switched=!1,this.depth=!1},CGL.TextureEffect.prototype.setSourceTexture=function(t){t.textureType==CGL.Texture.TYPE_FLOAT&&this._cgl.gl.getExtension("EXT_color_buffer_float"),null===t?(this._textureSource=new CGL.Texture(this._cgl),this._textureSource.setSize(16,16)):this._textureSource=t,this._textureSource.compareSettings(this._textureTarget)||(this._textureTarget&&this._textureTarget["delete"](),this._textureTarget=this._textureSource.clone(),CGL.profileEffectBuffercreate++,this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER,this._frameBuf),this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER,this._renderbuffer),this.depth&&this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,this._cgl.gl.DEPTH_COMPONENT16,this._textureSource.width,this._textureSource.height),this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER,this._cgl.gl.COLOR_ATTACHMENT0,this._cgl.gl.TEXTURE_2D,this._textureTarget.tex,0),this.depth&&this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER,this._cgl.gl.DEPTH_ATTACHMENT,this._cgl.gl.RENDERBUFFER,this._renderbuffer),this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D,null),this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER,null),this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER,null),this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER,this._frameBuf2),this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER,this._renderbuffer2),this.depth&&this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,this._cgl.gl.DEPTH_COMPONENT16,this._textureSource.width,this._textureSource.height),this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER,this._cgl.gl.COLOR_ATTACHMENT0,this._cgl.gl.TEXTURE_2D,this._textureSource.tex,0),this.depth&&this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER,this._cgl.gl.DEPTH_ATTACHMENT,this._cgl.gl.RENDERBUFFER,this._renderbuffer2),this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D,null),this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER,null),this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER,null))},CGL.TextureEffect.prototype.startEffect=function(){return this._textureTarget?(this.switched=!1,this._cgl.pushDepthTest(!1),this._cgl.pushModelMatrix(),this._cgl.pushPMatrix(),this._cgl.gl.viewport(0,0,this.getCurrentTargetTexture().width,this.getCurrentTargetTexture().height),mat4.perspective(this._cgl.pMatrix,45,this.getCurrentTargetTexture().width/this.getCurrentTargetTexture().height,.1,1100),this._cgl.pushPMatrix(),mat4.identity(this._cgl.pMatrix),this._cgl.pushViewMatrix(),mat4.identity(this._cgl.vMatrix),this._cgl.pushModelMatrix(),void mat4.identity(this._cgl.mvMatrix)):void console.log("effect has no target")},CGL.TextureEffect.prototype.endEffect=function(){this._cgl.popDepthTest(!1),this._cgl.popModelMatrix(),this._cgl.popPMatrix(),this._cgl.popModelMatrix(),this._cgl.popViewMatrix(),this._cgl.popPMatrix(),this._cgl.resetViewPort()},CGL.TextureEffect.prototype.bind=function(){return null===this._textureSource?void console.log("no base texture set!"):void(this.switched?(this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER,this._frameBuf2),this._cgl.pushGlFrameBuffer(this._frameBuf2)):(this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER,this._frameBuf),this._cgl.pushGlFrameBuffer(this._frameBuf)))},CGL.TextureEffect.prototype.finish=function(){return null===this._textureSource?void console.log("no base texture set!"):(this._cgl.TextureEffectMesh.render(this._cgl.getShader()),this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER,this._cgl.popGlFrameBuffer()),this._textureTarget.filter==CGL.Texture.FILTER_MIPMAP&&(this.switched?(this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D,this._textureSource.tex),this._textureSource.updateMipMap()):(this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D,this._textureTarget.tex),this._textureTarget.updateMipMap()),this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D,null)),void(this.switched=!this.switched))},CGL.TextureEffect.prototype.getCurrentTargetTexture=function(){return this.switched?this._textureSource:this._textureTarget},CGL.TextureEffect.prototype.getCurrentSourceTexture=function(){return this.switched?this._textureTarget:this._textureSource},CGL.TextureEffect.prototype["delete"]=function(){this._textureTarget&&this._textureTarget["delete"](),this._textureSource&&this._textureSource["delete"](),this._cgl.gl.deleteRenderbuffer(this._renderbuffer),this._cgl.gl.deleteFramebuffer(this._frameBuf)},CGL.TextureEffect.prototype.createMesh=function(){this._cgl.TextureEffectMesh=CGL.MESHES.getSimpleRect(this._cgl,"textureEffect rect")},CGL.TextureEffect.checkOpNotInTextureEffect=function(t){return t.uiAttribs.error&&!t.patch.cgl.currentTextureEffect?(t.uiAttr({error:null}),!0):t.patch.cgl.currentTextureEffect?t.patch.cgl.currentTextureEffect&&!t.uiAttribs.error?(t.uiAttr({error:"This op can not be a child of a ImageCompose/texture effect! imagecompose should only have textureeffect childs."}),!1):t.patch.cgl.currentTextureEffect?!1:!0:!0},CGL.TextureEffect.checkOpInEffect=function(t){return t.patch.cgl.currentTextureEffect&&t.uiAttribs.error?(t.uiAttr({error:null}),!0):t.patch.cgl.currentTextureEffect?!0:t.patch.cgl.currentTextureEffect||t.uiAttribs.error?t.patch.cgl.currentTextureEffect?!0:!1:(t.uiAttr({error:'This op must be a child of a texture effect! More infos <a href="https://docs.cables.gl/image_composition/image_composition.html" target="_blank">here</a>.'}),!1)},CGL.TextureEffect.getBlendCode=function(){return"".endl()+"vec3 _blend(vec3 base,vec3 blend)".endl()+"{".endl()+"   vec3 colNew=blend;".endl()+"   #ifdef BM_MULTIPLY".endl()+"       colNew=base*blend;".endl()+"   #endif".endl()+"   #ifdef BM_MULTIPLY_INV".endl()+"       colNew=base* vec3(1.0)-blend;".endl()+"   #endif".endl()+"   #ifdef BM_AVERAGE".endl()+"       colNew=((base + blend) / 2.0);".endl()+"   #endif".endl()+"   #ifdef BM_ADD".endl()+"       colNew=min(base + blend, vec3(1.0));".endl()+"   #endif".endl()+"   #ifdef BM_SUBSTRACT".endl()+"       colNew=max(base + blend - vec3(1.0), vec3(0.0));".endl()+"   #endif".endl()+"   #ifdef BM_DIFFERENCE".endl()+"       colNew=abs(base - blend);".endl()+"   #endif".endl()+"   #ifdef BM_NEGATION".endl()+"       colNew=(vec3(1.0) - abs(vec3(1.0) - base - blend));".endl()+"   #endif".endl()+"   #ifdef BM_EXCLUSION".endl()+"       colNew=(base + blend - 2.0 * base * blend);".endl()+"   #endif".endl()+"   #ifdef BM_LIGHTEN".endl()+"       colNew=max(blend, base);".endl()+"   #endif".endl()+"   #ifdef BM_DARKEN".endl()+"       colNew=min(blend, base);".endl()+"   #endif".endl()+"   #ifdef BM_OVERLAY".endl()+"      #define BlendOverlayf(base, blend)  (base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend)))".endl()+"      colNew=vec3(BlendOverlayf(base.r, blend.r),BlendOverlayf(base.g, blend.g),BlendOverlayf(base.b, blend.b));".endl()+"   #endif".endl()+"   #ifdef BM_SCREEN".endl()+"      #define BlendScreenf(base, blend)       (1.0 - ((1.0 - base) * (1.0 - blend)))".endl()+"      colNew=vec3(BlendScreenf(base.r, blend.r),BlendScreenf(base.g, blend.g),BlendScreenf(base.b, blend.b));".endl()+"   #endif".endl()+"   #ifdef BM_SOFTLIGHT".endl()+"      #define BlendSoftLightf(base, blend)    ((blend < 0.5) ? (2.0 * base * blend + base * base * (1.0 - 2.0 * blend)) : (sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend)))".endl()+"      colNew=vec3(BlendSoftLightf(base.r, blend.r),BlendSoftLightf(base.g, blend.g),BlendSoftLightf(base.b, blend.b));".endl()+"   #endif".endl()+"   #ifdef BM_HARDLIGHT".endl()+"      #define BlendOverlayf(base, blend)  (base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend)))".endl()+"      colNew=vec3(BlendOverlayf(base.r, blend.r),BlendOverlayf(base.g, blend.g),BlendOverlayf(base.b, blend.b));".endl()+"   #endif".endl()+"   #ifdef BM_COLORDODGE".endl()+"      #define BlendColorDodgef(base, blend)   ((blend == 1.0) ? blend : min(base / (1.0 - blend), 1.0))".endl()+"      colNew=vec3(BlendColorDodgef(base.r, blend.r),BlendColorDodgef(base.g, blend.g),BlendColorDodgef(base.b, blend.b));".endl()+"   #endif".endl()+"   #ifdef BM_COLORBURN".endl()+"      #define BlendColorBurnf(base, blend)    ((blend == 0.0) ? blend : max((1.0 - ((1.0 - base) / blend)), 0.0))".endl()+"      colNew=vec3(BlendColorBurnf(base.r, blend.r),BlendColorBurnf(base.g, blend.g),BlendColorBurnf(base.b, blend.b));".endl()+"   #endif".endl()+"   return colNew;".endl()+"}".endl()+"vec4 cgl_blend(vec4 oldColor,vec4 newColor,float amount)".endl()+"{".endl()+"   vec4 col=vec4( _blend(oldColor.rgb,newColor.rgb) ,1.0);".endl()+"   col=vec4( mix( col.rgb, oldColor.rgb ,1.0-oldColor.a*amount),1.0);".endl()+"   return col;".endl()+"}"},CGL.TextureEffect.onChangeBlendSelect=function(t,e){"normal"==e?t.define("BM_NORMAL"):t.removeDefine("BM_NORMAL"),"multiply"==e?t.define("BM_MULTIPLY"):t.removeDefine("BM_MULTIPLY"),"multiply invert"==e?t.define("BM_MULTIPLY_INV"):t.removeDefine("BM_MULTIPLY_INV"),"average"==e?t.define("BM_AVERAGE"):t.removeDefine("BM_AVERAGE"),"add"==e?t.define("BM_ADD"):t.removeDefine("BM_ADD"),"substract"==e?t.define("BM_SUBSTRACT"):t.removeDefine("BM_SUBSTRACT"),"difference"==e?t.define("BM_DIFFERENCE"):t.removeDefine("BM_DIFFERENCE"),"negation"==e?t.define("BM_NEGATION"):t.removeDefine("BM_NEGATION"),"exclusion"==e?t.define("BM_EXCLUSION"):t.removeDefine("BM_EXCLUSION"),"lighten"==e?t.define("BM_LIGHTEN"):t.removeDefine("BM_LIGHTEN"),"darken"==e?t.define("BM_DARKEN"):t.removeDefine("BM_DARKEN"),"overlay"==e?t.define("BM_OVERLAY"):t.removeDefine("BM_OVERLAY"),"screen"==e?t.define("BM_SCREEN"):t.removeDefine("BM_SCREEN"),"softlight"==e?t.define("BM_SOFTLIGHT"):t.removeDefine("BM_SOFTLIGHT"),"hardlight"==e?t.define("BM_HARDLIGHT"):t.removeDefine("BM_HARDLIGHT"),"color dodge"==e?t.define("BM_COLORDODGE"):t.removeDefine("BM_COLORDODGE"),"color burn"==e?t.define("BM_COLORBURN"):t.removeDefine("BM_COLORBURN")},CGL.TextureEffect.AddBlendSelect=function(t,e){var i=t.inValueSelect(e,["normal","lighten","darken","multiply","multiply invert","average","add","substract","difference","negation","exclusion","overlay","screen","color dodge","color burn","softlight","hardlight"],"normal");return i},CGL.TextureEffect.setupBlending=function(t,e,i,s){t.setPortGroup("Blending",[i,s]),i.onChange=function(){if(CGL.TextureEffect.onChangeBlendSelect(e,i.get()),CABLES.UI){var s=i.get();"normal"==s?s=null:"multiply"==s?s="mul":"multiply invert"==s?s="mulinv":"lighten"==s?s="light":"darken"==s?s="darken":"average"==s?s="avg":"substract"==s?s="sub":"difference"==s?s="diff":"negation"==s?s="neg":"negation"==s?s="neg":"negation"==s?s="neg":"exclusion"==s?s="exc":"overlay"==s?s="ovl":"color dodge"==s?s="dodge":"color burn"==s?s="burn":"softlight"==s?s="soft":"hardlight"==s&&(s="hard"),t.setUiAttrib({extendTitle:s})}}};var CABLES=CABLES||{};CABLES.Link=function(t){this.portIn=null,this.portOut=null,this.scene=t,this.activityCounter=0},CABLES.Link.prototype.setValue=function(t){void 0===t?this._setValue():this.portIn.set(t)},CABLES.Link.prototype.activity=function(){this.activityCounter++},CABLES.Link.prototype._setValue=function(){if(!this.portOut)return void this.remove();var t=this.portOut.get();t==t&&(this.portIn.type!=CABLES.OP_PORT_TYPE_FUNCTION&&this.activity(),this.portIn.get()!==t?this.portIn.set(t):this.portIn.changeAlways&&this.portIn.set(t))},CABLES.Link.prototype.getOtherPort=function(t){return t==this.portIn?this.portOut:this.portIn},CABLES.Link.prototype.remove=function(){this.portIn&&this.portIn.removeLink(this),this.portOut&&this.portOut.removeLink(this),this.scene&&this.scene.emitEvent("onUnLink",this.portIn,this.portOut),this.portIn&&this.portIn.type==CABLES.OP_PORT_TYPE_OBJECT&&(this.portIn.set(null),this.portIn.links.length>0&&this.portIn.set(this.portIn.links[0].getOtherPort(this.portIn).get())),this.portIn&&this.portIn.parent._checkLinksNeededToWork(),this.portOut&&this.portOut.parent._checkLinksNeededToWork(),this.portIn=null,this.portOut=null,this.scene=null},CABLES.Link.prototype.link=function(t,e){return CABLES.Link.canLink(t,e)?(t.direction==CABLES.PORT_DIR_IN?(this.portIn=t,this.portOut=e):(this.portIn=e,this.portOut=t),t.addLink(this),e.addLink(this),this.setValue(),t.onLink&&t.onLink(this),e.onLink&&e.onLink(this),t.parent._checkLinksNeededToWork(),void e.parent._checkLinksNeededToWork()):(console.log("cannot link ports!"),!1)},CABLES.Link.prototype.getSerialized=function(){var t={};return t.portIn=this.portIn.getName(),t.portOut=this.portOut.getName(),t.objIn=this.portIn.parent.id,t.objOut=this.portOut.parent.id,t},CABLES.Link.canLinkText=function(t,e){if(t.direction==e.direction){var i="(out)";return e.direction==CABLES.PORT_DIR_IN&&(i="(in)"),"can not link: same direction"+i}return t.parent==e.parent?"can not link: same op":t.type!=CABLES.OP_PORT_TYPE_DYNAMIC&&e.type!=CABLES.OP_PORT_TYPE_DYNAMIC&&t.type!=e.type?"can not link: different type":t?e?t.direction==CABLES.PORT_DIR_IN&&t.isAnimated()?"can not link: is animated":e.direction==CABLES.PORT_DIR_IN&&e.isAnimated()?"can not link: is animated":t.isLinkedTo(e)?"ports already linked":t.canLink&&!t.canLink(e)||e.canLink&&!e.canLink(t)?"Incompatible":"can link":"can not link: port 2 invalid":"can not link: port 1 invalid";

},CABLES.Link.canLink=function(t,e){return t&&e?t.direction==CABLES.PORT_DIR_IN&&t.isAnimated()?!1:e.direction==CABLES.PORT_DIR_IN&&e.isAnimated()?!1:t.isHidden()||e.isHidden()?!1:t.isLinkedTo(e)?!1:t.direction==e.direction?!1:t.type!=e.type&&t.type!=CABLES.OP_PORT_TYPE_DYNAMIC&&e.type!=CABLES.OP_PORT_TYPE_DYNAMIC?!1:t.type==CABLES.OP_PORT_TYPE_DYNAMIC||e.type==CABLES.OP_PORT_TYPE_DYNAMIC?!0:t.parent==e.parent?!1:t.canLink&&!t.canLink(e)?!1:e.canLink&&!e.canLink(t)?!1:!0:!1};var Ops={},CABLES=CABLES||{};CABLES.OP_PORT_TYPE_VALUE=0,CABLES.OP_PORT_TYPE_FUNCTION=1,CABLES.OP_PORT_TYPE_OBJECT=2,CABLES.OP_PORT_TYPE_TEXTURE=2,CABLES.OP_PORT_TYPE_ARRAY=3,CABLES.OP_PORT_TYPE_DYNAMIC=4,CABLES.OP_PORT_TYPE_STRING=5,CABLES.OP_VERSION_PREFIX="_v",CABLES.Op=function(){if(this.data={},this.objName="",this.portsOut=[],this.portsIn=[],this.portsInData=[],this.opId="",this.uiAttribs={},this.enabled=!0,this.patch=arguments[0],this.name=arguments[1],this.errors={},this._needsLinkedToWork=[],this._needsParentOp=null,this._shortOpName="",arguments[1]){if(this._shortOpName=arguments[1].split(".")[arguments[1].split(".").length-1],this._shortOpName.indexOf(CABLES.OP_VERSION_PREFIX)>0){var t=this._shortOpName.split(CABLES.OP_VERSION_PREFIX)[1];this._shortOpName=this._shortOpName.substring(0,this._shortOpName.length-(CABLES.OP_VERSION_PREFIX+t).length)}this.uiAttribs.title=this._shortOpName}this.id=arguments[2]||CABLES.uuid(),this.onAddPort=null,this.onCreate=null,this.onResize=null,this.onLoaded=null,this.onDelete=null,this.onUiAttrChange=null,this._eventCallbacks={},this._instances=null,this.preRender=null,this.init=null},CABLES.Op.prototype.clearUiAttrib=function(t){var e={};e.name=null,this.uiAttrib(e)},CABLES.Op.prototype.setTitle=function(t){var e=this.name!=t;this.name=t,this.uiAttr({title:t}),e&&this.fireEvent("onTitleChange",t)},CABLES.Op.prototype.setUiAttrib=CABLES.Op.prototype.uiAttr=function(t){this.uiAttribs||(this.uiAttribs={});for(var e in t)this.uiAttribs[e]=t[e];this.fireEvent("onUiAttribsChange",t)},CABLES.Op.prototype.getName=function(){return this.uiAttribs.name?this.uiAttribs.name:this.objName.split(".")},CABLES.Op.prototype.addOutPort=function(t){return t.direction=CABLES.PORT_DIR_OUT,t.parent=this,this.portsOut.push(t),this.onAddPort&&this.onAddPort(t),t},CABLES.Op.prototype.hasPort=function(t){for(var e=0;e<this.portsIn.length;e++)if(this.portsIn[i].getName()==t)return!0;return!1},CABLES.Op.prototype.hasDynamicPort=function(){var t=0;for(t=0;t<this.portsIn.length;t++){if(this.portsIn[t].type==CABLES.OP_PORT_TYPE_DYNAMIC)return!0;if("dyn"==this.portsIn[t].getName())return!0}for(t=0;t<this.portsOut.length;t++){if(this.portsOut[t].type==CABLES.OP_PORT_TYPE_DYNAMIC)return!0;if("dyn"==this.portsOut[t].getName())return!0}return!1},CABLES.Op.prototype.addInPort=function(t){if(!(t instanceof CABLES.Port))throw new Error("parameter is not a port!");return t.direction=CABLES.PORT_DIR_IN,t.parent=this,this.portsIn.push(t),this.onAddPort&&this.onAddPort(t),t},CABLES.Op.prototype.inFunction=CABLES.Op.prototype.inTrigger=function(t,e){var i=this.addInPort(new CABLES.Port(this,t,CABLES.OP_PORT_TYPE_FUNCTION));return void 0!==e&&i.set(e),i},CABLES.Op.prototype.inFunctionButton=CABLES.Op.prototype.inTriggerButton=function(t,e){var i=this.addInPort(new CABLES.Port(this,t,CABLES.OP_PORT_TYPE_FUNCTION,{display:"button"}));return void 0!==e&&i.set(e),i},CABLES.Op.prototype.inValueFloat=CABLES.Op.prototype.inValue=CABLES.Op.prototype.inFloat=function(t,e){var i=this.addInPort(new CABLES.Port(this,t,CABLES.OP_PORT_TYPE_VALUE));return void 0!==e&&(i.set(e),i.defaultValue=e),i},CABLES.Op.prototype.inValueBool=CABLES.Op.prototype.inBool=function(t,e){var i=this.addInPort(new CABLES.Port(this,t,CABLES.OP_PORT_TYPE_VALUE,{display:"bool"}));return void 0!==e&&(i.set(e),i.defaultValue=e),i},CABLES.Op.prototype.inValueString=function(t,e){var i=this.addInPort(new CABLES.Port(this,t,CABLES.OP_PORT_TYPE_VALUE,{type:"string"}));return i.value="",void 0!==e&&(i.set(e),i.defaultValue=e),i},CABLES.Op.prototype.inString=function(t,e){var i=this.addInPort(new CABLES.Port(this,t,CABLES.OP_PORT_TYPE_STRING,{type:"string"}));return e=e||"",i.value=e,i.set(e),i.defaultValue=e,i},CABLES.Op.prototype.inValueText=function(t,e){var i=this.addInPort(new CABLES.Port(this,t,CABLES.OP_PORT_TYPE_VALUE,{type:"string",display:"text"}));return i.value="",void 0!==e&&(i.set(e),i.defaultValue=e),i},CABLES.Op.prototype.inStringEditor=function(t,e,i){var s=this.addInPort(new CABLES.Port(this,t,CABLES.OP_PORT_TYPE_STRING,{type:"string",display:"editor",editorSyntax:i}));return s.value="",void 0!==e&&(s.set(e),s.defaultValue=e),s},CABLES.Op.prototype.inValueEditor=function(t,e,i){var s=this.addInPort(new CABLES.Port(this,t,CABLES.OP_PORT_TYPE_VALUE,{type:"string",display:"editor",editorSyntax:i}));return s.value="",void 0!==e&&(s.set(e),s.defaultValue=e),s},CABLES.Op.prototype.inValueSelect=CABLES.Op.prototype.inDropDown=function(t,e,i){var s=this.addInPort(new CABLES.Port(this,t,CABLES.OP_PORT_TYPE_VALUE,{display:"dropdown",hidePort:!0,values:e}));return void 0!==i&&(s.set(i),s.defaultValue=i),s},CABLES.Op.prototype.inSwitch=function(t,e,i){var s=this.addInPort(new CABLES.Port(this,t,CABLES.OP_PORT_TYPE_STRING,{display:"switch",hidePort:!0,type:"string",values:e}));return void 0!==i&&(s.set(i),s.defaultValue=i),s},CABLES.Op.prototype.inValueInt=CABLES.Op.prototype.inInt=function(t,e){var i=this.addInPort(new CABLES.Port(this,t,CABLES.OP_PORT_TYPE_VALUE,{increment:"integer"}));return void 0!==e&&(i.set(e),i.defaultValue=e),i},CABLES.Op.prototype.inFile=function(t,e,i){var s=this.addInPort(new CABLES.Port(this,t,CABLES.OP_PORT_TYPE_VALUE,{display:"file",filter:e}));return void 0!==i&&(s.set(i),s.defaultValue=i),s},CABLES.Op.prototype.inUrl=function(t,e,i){var s=this.addInPort(new CABLES.Port(this,t,CABLES.OP_PORT_TYPE_STRING,{display:"file",filter:e}));return void 0!==i&&(s.set(i),s.defaultValue=i),s},CABLES.Op.prototype.inTexture=function(t,e){var i=this.addInPort(new CABLES.Port(this,t,CABLES.OP_PORT_TYPE_OBJECT,{display:"texture",preview:!0}));return void 0!==e&&i.set(e),i},CABLES.Op.prototype.inObject=function(t,e,i){var s=this.addInPort(new CABLES.Port(this,t,CABLES.OP_PORT_TYPE_OBJECT,i));return void 0!==e&&s.set(e),s},CABLES.Op.prototype.inGradient=function(t,e){var i=this.addInPort(new CABLES.Port(this,t,CABLES.OP_PORT_TYPE_VALUE,{display:"gradient",hidePort:!0}));return void 0!==e&&i.set(e),i},CABLES.Op.prototype.inArray=function(t,e){var i=this.addInPort(new CABLES.Port(this,t,CABLES.OP_PORT_TYPE_ARRAY));return void 0!==e&&i.set(e),i},CABLES.Op.prototype.inValueSlider=CABLES.Op.prototype.inFloatSlider=function(t,e){var i=this.addInPort(new CABLES.Port(this,t,CABLES.OP_PORT_TYPE_VALUE,{display:"range"}));return void 0!==e&&(i.set(e),i.defaultValue=e),i},CABLES.Op.prototype.outFunction=CABLES.Op.prototype.outTrigger=function(t,e){var i=this.addOutPort(new CABLES.Port(this,t,CABLES.OP_PORT_TYPE_FUNCTION));return void 0!==e&&i.set(e),i},CABLES.Op.prototype.outValue=CABLES.Op.prototype.outNumber=function(t,e){var i=this.addOutPort(new CABLES.Port(this,t,CABLES.OP_PORT_TYPE_VALUE));return void 0!==e&&i.set(e),i},CABLES.Op.prototype.outValueBool=CABLES.Op.prototype.outBool=function(t,e){var i=this.addOutPort(new CABLES.Port(this,t,CABLES.OP_PORT_TYPE_VALUE,{display:"bool"}));return i.set(void 0!==e?e:!1),i},CABLES.Op.prototype.outValueString=function(t,e){var i=this.addOutPort(new CABLES.Port(this,t,CABLES.OP_PORT_TYPE_VALUE,{type:"string"}));return void 0!==e&&i.set(e),i},CABLES.Op.prototype.outString=function(t,e){var i=this.addOutPort(new CABLES.Port(this,t,CABLES.OP_PORT_TYPE_STRING,{type:"string"}));return i.set(void 0!==e?e:""),i},CABLES.Op.prototype.outObject=function(t,e){var i=this.addOutPort(new CABLES.Port(this,t,CABLES.OP_PORT_TYPE_OBJECT));return void 0!==e&&i.set(e),i.ignoreValueSerialize=!0,i},CABLES.Op.prototype.outArray=function(t,e){var i=this.addOutPort(new CABLES.Port(this,t,CABLES.OP_PORT_TYPE_ARRAY));return void 0!==e&&i.set(e),i.ignoreValueSerialize=!0,i},CABLES.Op.prototype.outTexture=function(t,e){var i=this.addOutPort(new CABLES.Port(this,t,CABLES.OP_PORT_TYPE_OBJECT,{preview:!0}));return void 0!==e&&i.set(e),i.ignoreValueSerialize=!0,i},CABLES.Op.prototype.inDynamic=function(t,e,i,s){var r=new CABLES.Port(this,t,CABLES.OP_PORT_TYPE_DYNAMIC,i);return r.shouldLink=function(t,i){if(e&&CABLES.UTILS.isArray(e)){for(var s=0;s<e.length;s++){if(t==this&&i.type===e[s])return!0;if(i==this&&t.type===e[s])return!0}return!1}return!0},this.addInPort(r),void 0!==s&&(r.set(s),r.defaultValue=s),r},CABLES.Op.prototype.printInfo=function(){for(var t=0;t<this.portsIn.length;t++)console.log("in: "+this.portsIn[t].getName());for(var e in this.portsOut)console.log("out: "+this.portsOut[e].getName())},CABLES.Op.prototype.getOutChilds=function(){var t=[];for(var e in this.portsOut)for(var i in this.portsOut[e].links)this.portsOut[e].type==CABLES.OP_PORT_TYPE_FUNCTION&&t.push(this.portsOut[e].links[i].portIn.parent);return t},CABLES.Op.prototype.markChilds=function(){this.marked=!0;for(var t in this.portsOut)for(var e in this.portsOut[t].links)this.portsOut[t].parent.marked=!0,this.portsOut[t].links[e].portIn.parent!=this&&this.portsOut[t].links[e].portIn.parent.markChilds()},CABLES.Op.prototype.deleteChilds=function(){var t=[];for(var e in this.portsOut)for(var i in this.portsOut[e].links)this.portsOut[e].links[i].portIn.parent!=this&&(this.portsOut[e].parent!=this&&t.push(this.portsOut[e].parent),t.push(this.portsOut[e].links[i].portIn.parent),this.portsOut[e].links[i].portIn.parent.deleteChilds());for(var s in t)this.patch.deleteOp(t[s].id)},CABLES.Op.prototype.removeLinks=function(){for(var t=0;t<this.portsIn.length;t++)this.portsIn[t].removeLinks();for(var e=0;e<this.portsOut.length;e++)this.portsOut[e].removeLinks()},CABLES.Op.prototype.countFittingPorts=function(t){var e=0;for(var i in this.portsOut)CABLES.Link.canLink(t,this.portsOut[i])&&e++;for(var s in this.portsIn)CABLES.Link.canLink(t,this.portsIn[s])&&e++;return e},CABLES.Op.prototype.findFittingPort=function(t){for(var e in this.portsOut)if(CABLES.Link.canLink(t,this.portsOut[e]))return this.portsOut[e];for(var i in this.portsIn)if(CABLES.Link.canLink(t,this.portsIn[i]))return this.portsIn[i]},CABLES.Op.prototype.getSerialized=function(){var t={};this.opId&&(t.opId=this.opId),t.objName=this.objName,t.id=this.id,t.uiAttribs=this.uiAttribs,this.uiAttribs.title==this._shortOpName&&delete this.uiAttribs.title,this.uiAttribs.hasOwnProperty("working")&&1==this.uiAttribs.working&&delete this.uiAttribs.working,t.portsIn=[],t.portsOut=[];for(var e=0;e<this.portsIn.length;e++)t.portsIn.push(this.portsIn[e].getSerialized());for(var i in this.portsOut)t.portsOut.push(this.portsOut[i].getSerialized());return t},CABLES.Op.prototype.getFirstOutPortByType=function(t){for(var e in this.portsOut)if(this.portsOut[e].type==t)return this.portsOut[e]},CABLES.Op.prototype.getPort=CABLES.Op.prototype.getPortByName=function(t){for(var e=0;e<this.portsIn.length;e++)if(this.portsIn[e].getName()==t)return this.portsIn[e];for(var i=0;i<this.portsOut.length;i++)if(this.portsOut[i].getName()==t)return this.portsOut[i]},CABLES.Op.prototype.getPortById=function(t){for(var e=0;e<this.portsIn.length;e++)if(this.portsIn[e].id==t)return this.portsIn[e];for(var i=0;i<this.portsOut.length;i++)if(this.portsOut[i].id==t)return this.portsOut[i]},CABLES.Op.prototype.updateAnims=function(){for(var t=0;t<this.portsIn.length;t++)this.portsIn[t].updateAnim()},CABLES.Op.prototype.log=function(){this.patch.silent||Function.prototype.apply.apply(console.log,[console,arguments])},CABLES.Op.prototype.error=function(){this.patch.silent||Function.prototype.apply.apply(console.error,[console,arguments])},CABLES.Op.prototype.warn=function(){this.patch.silent||Function.prototype.apply.apply(console.warn,[console,arguments])},CABLES.Op.prototype.undoUnLinkTemporary=function(){if(this.shakeLink&&this.shakeLink.remove(),this.shakeLink=null,this.oldLinks){for(var t=0;t<this.oldLinks.length;t++)this.patch.link(this.oldLinks[t]["in"].parent,this.oldLinks[t]["in"].getName(),this.oldLinks[t].out.parent,this.oldLinks[t].out.getName());this.oldLinks.length=0}},CABLES.Op.prototype.unLink=function(){for(var t=0;t<this.portsOut.length;t++)this.portsOut[t].removeLinks();for(var e=0;e<this.portsIn.length;e++)this.portsIn[e].removeLinks()},CABLES.Op.unLinkTempReLinkP1=null,CABLES.Op.unLinkTempReLinkP2=null,CABLES.Op.prototype.unLinkTemporary=function(){var t=!0,e=0;this.shakeLink=null,this.oldLinks=[],t&&this.portsIn.length>0&&this.portsIn[0].isLinked()&&this.portsOut.length>0&&this.portsOut[0].isLinked()&&this.portsIn[0].getType()==this.portsOut[0].getType()&&(CABLES.Op.unLinkTempReLinkP1=this.portsIn[0].links[0].getOtherPort(this.portsIn[0]),CABLES.Op.unLinkTempReLinkP2=this.portsOut[0].links[0].getOtherPort(this.portsOut[0]));for(var i=0;i<this.portsIn.length;i++)for(e=0;e<this.portsIn[i].links.length;e++)this.oldLinks.push({"in":this.portsIn[i].links[e].portIn,out:this.portsIn[i].links[e].portOut});for(var s=0;s<this.portsOut.length;s++)for(e=0;e<this.portsOut[s].links.length;e++)this.oldLinks.push({"in":this.portsOut[s].links[e].portIn,out:this.portsOut[s].links[e].portOut});this.unLink(),CABLES.Op.unLinkTempReLinkP1&&CABLES.Op.unLinkTempReLinkP2&&(this.shakeLink=this.patch.link(CABLES.Op.unLinkTempReLinkP1.parent,CABLES.Op.unLinkTempReLinkP1.getName(),CABLES.Op.unLinkTempReLinkP2.parent,CABLES.Op.unLinkTempReLinkP2.getName()))},CABLES.Op.prototype.profile=function(t){for(var e=0;e<this.portsIn.length;e++)this.portsIn[e]._onTriggered=this.portsIn[e]._onTriggeredProfiling},CABLES.Op.prototype.findParent=function(t){for(var e=0;e<this.portsIn.length;e++)if(this.portsIn[e].isLinked()){if(this.portsIn[e].links[0].portOut.parent.objName==t)return this.portsIn[e].links[0].portOut.parent;var i=null;if(i=this.portsIn[e].links[0].portOut.parent.findParent(t))return i}return null},CABLES.Op.prototype.cleanUp=function(){if(this._instances){for(var t=0;t<this._instances.length;t++)this._instances[t].onDelete&&this._instances[t].onDelete();this._instances.length=0}},CABLES.Op.prototype.instanced=function(t){if(0===this.patch.instancing.numCycles())return!1;var e=0,i=0;if(!this._instances||this._instances.length!=this.patch.instancing.numCycles()){for(this._instances||(this._instances=[]),console.log("creating instances of ",this.objName,this.patch.instancing.numCycles(),this._instances.length),this._instances.length=this.patch.instancing.numCycles(),e=0;e<this._instances.length;e++){this._instances[e]=this.patch.createOp(this.objName,!0),this._instances[e].instanced=function(){return!1},this._instances[e].uiAttr(this.uiAttribs);for(var s=0;s<this.portsOut.length;s++)this.portsOut[s].type==CABLES.OP_PORT_TYPE_FUNCTION&&(this._instances[e].getPortByName(this.portsOut[s].name).trigger=this.portsOut[s].trigger.bind(this.portsOut[s]))}for(i=0;i<this.portsIn.length;i++)this.portsIn[i].onChange=null,this.portsIn[i].onValueChanged=null}var r=null;for(i=0;i<this.portsIn.length;i++)(this.portsIn[i].type==CABLES.OP_PORT_TYPE_VALUE||this.portsIn[i].type==CABLES.OP_PORT_TYPE_ARRAY)&&this._instances[this.patch.instancing.index()].portsIn[i].set(this.portsIn[i].get()),this.portsIn[i].type==CABLES.OP_PORT_TYPE_FUNCTION;for(r&&r.onTriggered(),i=0;i<this.portsOut.length;i++)this.portsOut[i].type==CABLES.OP_PORT_TYPE_VALUE&&this.portsOut[i].set(this._instances[this.patch.instancing.index()].portsOut[i].get());return!0},CABLES.Op.prototype.initInstancable=function(){},CABLES.Op.prototype.setValues=function(t){for(var e in t){var i=this.getPortByName(e);i?i.set(t[e]):console.log("op.setValues: port not found:",e)}},CABLES.Op.prototype.error=function(t,e){this.errors[t]=e,null==e&&delete this.errors[t];var i="";for(var s in this.errors)i+="- "+this.errors[s]+"<br/>";this.uiAttr({error:i})},CABLES.Op.prototype.addListener=CABLES.Op.prototype.addEventListener=function(t,e){this._eventCallbacks[t]?this._eventCallbacks[t].push(e):this._eventCallbacks[t]=[e]},CABLES.Op.prototype.hasEventListener=function(t,e){if(t&&e){if(this._eventCallbacks[t]){var i=this._eventCallbacks[t].indexOf(e);return-1==i?!1:!0}}else console.log("hasListener: missing parameters")},CABLES.Op.prototype.removeEventListener=function(t,e){if(this._eventCallbacks[t]){var i=this._eventCallbacks[t].indexOf(e);-1==i?console.log("eventlistener "+t+" not found..."):this._eventCallbacks[t].slice(i)}},CABLES.Op.prototype.fireEvent=function(t,e){if(this._eventCallbacks[t])for(var i=0;i<this._eventCallbacks[t].length;i++)this._eventCallbacks[t][i]&&this._eventCallbacks[t][i](e);this.onUiAttrChange&&"onUiAttribsChange"==t&&this.onUiAttrChange(e)},CABLES.Op.prototype.setEnabled=function(t){this.enabled=t,this.fireEvent("onEnabledChange",t)},CABLES.Op.prototype.setPortGroup=function(t,e){for(var i=0;i<e.length;i++)e[i]&&e[i].setUiAttribs?e[i].setUiAttribs({group:t}):console.error("setPortGroup: invalid port!")},CABLES.Op.prototype.setUiAxisPorts=function(t,e,i){t&&t.setUiAttribs({axis:"X"}),e&&e.setUiAttribs({axis:"Y"}),i&&i.setUiAttribs({axis:"Z"})},CABLES.Op.prototype.removePort=function(t){for(var e=0;e<this.portsIn.length;e++)if(this.portsIn[e]==t)return this.portsIn.splice(e,1),this.fireEvent("onUiAttribsChange",{}),void this.fireEvent("onPortRemoved",{})},CABLES.Op.prototype.checkLinkTimeWarnings=function(){function t(e,i,s){for(var r=0;r<e.portsIn.length;r++)if(e.portsIn[r].type==i&&e.portsIn[r].isLinked())for(var n=e.portsIn[r],o=0;o<n.links.length;o++)if(n.links[o]){if(n.links[o].portOut.parent.objName.indexOf(s)>-1)return!0;if(t(n.links[o].portOut.parent,i,s))return!0}return!1}function e(t){return t.portsIn.length>0&&t.portsIn[0].type==CABLES.OP_PORT_TYPE_FUNCTION?!0:!1}var i=null,s=!0;if(s&&0==this.objName.indexOf("Ops.Gl.TextureEffects")&&e(this)&&-1==this.objName.indexOf("TextureEffects.ImageCompose")&&(s=t(this,CABLES.OP_PORT_TYPE_FUNCTION,"TextureEffects.ImageCompose"),s||(i=CABLES.UI.TEXTS.working_connected_to+"ImageCompose")),this._needsParentOp&&s&&(s=t(this,CABLES.OP_PORT_TYPE_OBJECT,this._needsParentOp),s||(i=CABLES.UI.TEXTS.working_connected_to+this._needsParentOp)),this._needsLinkedToWork.length>0)for(var r=0;r<this._needsLinkedToWork.length;r++){var n=this._needsLinkedToWork[r];n?n.isLinked()||(s=!1,i?i+=", ":i=CABLES.UI.TEXTS.working_connected_needs_connections_to,i+=""+n.name.toUpperCase()):console.warn("[needsLinkedToWork] port not found")}s?this.uiAttribs.working||this.setUiAttrib({working:!0,notWorkingMsg:null}):this.setUiAttrib({working:s,notWorkingMsg:i})},CABLES.Op.prototype._checkLinksNeededToWork=function(){},CABLES.Op.prototype.toWorkNeedsParent=function(t){CABLES.UI&&(this._needsParentOp=t)},CABLES.Op.prototype.toWorkPortsNeedToBeLinked=function(){if(CABLES.UI)for(var t=0;t<arguments.length;t++)-1==this._needsLinkedToWork.indexOf(arguments[t])&&this._needsLinkedToWork.push(arguments[t])},CABLES.Op.prototype.toWorkPortsNeedToBeLinkedReset=function(){CABLES.UI&&(this._needsLinkedToWork.length=0,this.checkLinkTimeWarnings())},CABLES.Op.prototype.refreshParams=function(){CABLES.UI&&gui&&gui.patch().refreshOpParams(this)},CABLES.Op.getNamespaceClassName=function(t){return t?t.startsWith("Ops.Gl")?"gl":t.startsWith("Ops.WebAudio")?"audio":t.startsWith("Ops.Devices")?"devices":t.startsWith("Ops.Html")?"html":t.startsWith("Ops.Sidebar")?"html":t.startsWith("Ops.Math")?"math":t.startsWith("Ops.User")?"user":"default":"default"},CABLES.Op.isSubpatchOp=function(t){return"Ops.Ui.Patch"==t||"Ops.Ui.SubPatch"==t};var CABLES=CABLES||{};CABLES.Patch=function(t){CABLES.EventTarget.apply(this),this.ops=[],this.settings={},this.timer=new CABLES.Timer,this.freeTimer=new CABLES.Timer,this.animFrameOps=[],this.animFrameCallbacks=[],this.gui=!1,this.silent=!1,this.profiler=null,this.onLoadStart=null,this.onLoadEnd=null,this.aborted=!1,this.loading=new CABLES.LoadingStatus(this),this._crashedOps=[],this._fps=0,this._fpsFrameCount=0,this._fpsMsCount=0,this._fpsStart=0,this._volumeListeners=[],this._paused=!1,this._frameNum=0,this.instancing=new CABLES.Instancing,this.onOneFrameRendered=null,this.namedTriggers={},this._origData=null,this._frameNext=0,this._frameInterval=0,this._lastFrameTime=0,this._frameWasdelayed=!0,this.config=t||{glCanvasResizeToWindow:!1,prefixAssetPath:"",silent:!1,onError:null,onFinishedLoading:null,onFirstFrameRendered:null,onPatchLoaded:null,fpsLimit:0},this.config.hasOwnProperty("doRequestAnimation")||(this.config.doRequestAnimation=!0),this.config.prefixAssetPath||(this.config.prefixAssetPath=""),this.config.masterVolume||(this.config.masterVolume=1),this._variables={},t&&t.variables&&(this._variables=t.variables||{}),this._variableListeners=[],this.vars={},t&&t.vars&&(this.vars=t.vars),this.cgl=new CGL.Context(this),this.cgl.setCanvas(this.config.glCanvasId||this.config.glCanvas||"glcanvas"),this.config.glCanvasResizeToWindow===!0&&this.cgl.setAutoResize("window"),this.config.glCanvasResizeToParent===!0&&this.cgl.setAutoResize("parent"),this.loading.setOnFinishedLoading(this.config.onFinishedLoading),this.cgl.aborted&&(this.aborted=!0),this.cgl.silent&&(this.silent=!0),this.freeTimer.play(),this.exec(),this.aborted||(this.config.patch?(this.deSerialize(this.config.patch),this.timer.play()):this.config.patchFile&&(CABLES.ajax(this.config.patchFile,function(t,e){var i=JSON.parse(e);if(t){return console.error("err",t),console.error("data",i),void console.error("data",i.msg)}this.deSerialize(i)}.bind(this)),this.timer.play())),console.log("made with https://cables.gl")},CABLES.Patch.prototype.isPlaying=function(){return!this._paused},CABLES.Patch.prototype.renderOneFrame=function(){this._paused=!0,this._renderOneFrame=!0,this.exec(),this._renderOneFrame=!1},CABLES.Patch.prototype.getFPS=function(){return this._fps},CABLES.Patch.prototype.pause=function(){this._paused=!0,this.freeTimer.pause()},CABLES.Patch.prototype.resume=function(){this._paused&&(this._paused=!1,this.freeTimer.play(),this.exec())},CABLES.Patch.prototype.setVolume=function(t){this.config.masterVolume=t;for(var e=0;e<this._volumeListeners.length;e++)this._volumeListeners[e].onMasterVolumeChanged(t)},CABLES.Patch.prototype.getFilePath=function(t){if(!t)return t;if(0===t.indexOf("https:")||0===t.indexOf("http:"))return t;t=t.replace("//","/");var e=this.config.prefixAssetPath+t+(this.config.suffixAssetPath||"");return e},CABLES.Patch.prototype.clear=function(){for(this.cgl.TextureEffectMesh=null,this.animFrameOps.length=0,this.timer=new CABLES.Timer;this.ops.length>0;)this.deleteOp(this.ops[0].id)},CABLES.Patch.getOpClass=function(t){var e=t.split("."),i=null;try{return 2==e.length?i=window[e[0]][e[1]]:3==e.length?i=window[e[0]][e[1]][e[2]]:4==e.length?i=window[e[0]][e[1]][e[2]][e[3]]:5==e.length?i=window[e[0]][e[1]][e[2]][e[3]][e[4]]:6==e.length?i=window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]]:7==e.length?i=window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]][e[6]]:8==e.length?i=window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]][e[6]][e[7]]:9==e.length?i=window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]][e[6]][e[7]][e[8]]:10==e.length&&(i=window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]][e[6]][e[7]][e[8]][e[9]]),i}catch(s){return null}},CABLES.Patch.prototype.createOp=function(t,e){var i=t.split("."),s=null,r="";try{if(-1==t.indexOf("Ops.")){var n=t;CABLES.OPS[n]?(r=CABLES.OPS[n].objName,s=new CABLES.OPS[n].f(this,r,e,n),s.opId=n):console.error("could not find op by id")}if(!s){r=t;var o=CABLES.Patch.getOpClass(r);if(!o)throw CABLES.UI&&CABLES.UI.MODAL.showError("unknown op","unknown op: "+r),console.error("unknown op: "+r),new Error("unknown op: "+r);if(2==i.length?s=new window[i[0]][i[1]](this,r,e):3==i.length?s=new window[i[0]][i[1]][i[2]](this,r,e):4==i.length?s=new window[i[0]][i[1]][i[2]][i[3]](this,r,e):5==i.length?s=new window[i[0]][i[1]][i[2]][i[3]][i[4]](this,r,e):6==i.length?s=new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]](this,r,e):7==i.length?s=new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]](this,r,e):8==i.length?s=new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]][i[7]](this,r,e):9==i.length?s=new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]][i[7]][i[8]](this,r,e):10==i.length?s=new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]][i[7]][i[8]][i[9]](this,r,e):console.log("parts.length",i.length),s){s.opId=null;for(var a in CABLES.OPS)CABLES.OPS[a].objName==r&&(s.opId=a)}}}catch(h){if(this._crashedOps.push(r),console.error("instancing error "+r,h),!CABLES.UI)throw CABLES.api&&CABLES.api.sendErrorReport(h),console.log(h),console.log(h.stacktrace),this.exitError("INSTANCE_ERR","instancing error "+r),"instancing error "+r;CABLES.UI.MODAL.showOpException(h,r)}return s&&(s.objName=r,s.patch=this),s},CABLES.Patch.prototype.addOp=function(t,e,i){var s=this.createOp(t,i);return s&&(s.uiAttr(e),s.onCreate&&s.onCreate(),s.hasOwnProperty("onAnimFrame")&&this.animFrameOps.push(s),s.hasOwnProperty("onMasterVolumeChanged")&&this._volumeListeners.push(s),this.ops.push(s),this.emitEvent("onOpAdd",s),s.init&&s.init()),s},CABLES.Patch.prototype.addOnAnimFrame=function(t){this.animFrameOps.push(t)},CABLES.Patch.prototype.removeOnAnimFrame=function(t){for(var e=0;e<this.animFrameOps.length;e++)if(this.animFrameOps[e]==t)return void this.animFrameOps.splice(e,1)},CABLES.Patch.prototype.addOnAnimFrameCallback=function(t){this.animFrameCallbacks.push(t)},CABLES.Patch.prototype.removeOnAnimCallback=function(t){for(var e=0;e<this.animFrameCallbacks.length;e++)if(this.animFrameCallbacks[e]==t)return void this.animFrameCallbacks.splice(e,1)},CABLES.Patch.prototype.deleteOp=function(t,e){for(var i in this.ops)if(this.ops[i].id==t){var s=this.ops[i],r=null,n=null;if(s){e&&this.ops[i].portsIn.length>0&&this.ops[i].portsIn[0].isLinked()&&this.ops[i].portsOut.length>0&&this.ops[i].portsOut[0].isLinked()&&this.ops[i].portsIn[0].getType()==this.ops[i].portsOut[0].getType()&&(r=this.ops[i].portsIn[0].links[0].getOtherPort(this.ops[i].portsIn[0]),n=this.ops[i].portsOut[0].links[0].getOtherPort(this.ops[i].portsOut[0]));var o=this.ops[i];o.removeLinks(),this.onDelete&&(console.log("deprecated this.onDelete",this.onDelete),this.onDelete(o)),this.emitEvent("onOpDelete",o),this.ops.splice(i,1),o.onDelete&&o.onDelete(),o.cleanUp(),null!==r&&null!==n&&this.link(r.parent,r.getName(),n.parent,n.getName())}}},CABLES.Patch.prototype.getFrameNum=function(){return this._frameNum},CABLES.Patch.prototype.renderFrame=function(t){this.timer.update(),this.freeTimer.update();for(var e=this.timer.getTime(),i=0;i<this.animFrameCallbacks.length;++i)this.animFrameCallbacks[i]&&this.animFrameCallbacks[i](e,this._frameNum);for(var i=0;i<this.animFrameOps.length;++i)this.animFrameOps[i].onAnimFrame&&this.animFrameOps[i].onAnimFrame(e);this._frameNum++,1==this._frameNum&&this.config.onFirstFrameRendered&&this.config.onFirstFrameRendered()},CABLES.Patch.prototype.exec=function(t){if(this._renderOneFrame||!this._paused&&!this.aborted){this.config.fpsLimit=this.config.fpsLimit||0,this.config.fpsLimit&&(this._frameInterval=1e3/this.config.fpsLimit);var e=CABLES.now(),i=e-this._frameNext;if(CABLES.UI&&(CABLES.UI.capturer&&CABLES.UI.capturer.capture(this.cgl.canvas),!this._renderOneFrame&&e-this._lastFrameTime>500&&0!==this._lastFrameTime&&!this._frameWasdelayed))return this._lastFrameTime=0,setTimeout(this.exec.bind(this),500),CABLES.UI&&$("#delayed").show(),void(this._frameWasdelayed=!0);if(this._renderOneFrame||0===this.config.fpsLimit||i>this._frameInterval||this._frameWasdelayed){var s=CABLES.now();this.renderFrame(),this._fpsMsCount+=CABLES.now()-s,this._frameInterval&&(this._frameNext=e-i%this._frameInterval)}this._frameWasdelayed&&(CABLES.UI&&$("#delayed").hide(),this._frameWasdelayed=!1),this._renderOneFrame&&this.onOneFrameRendered&&(this.onOneFrameRendered(),this._renderOneFrame=!1),CABLES.now()-this._fpsStart>=1e3&&this._fps!=this._fpsFrameCount&&(this._fps=this._fpsFrameCount,CABLES.UI&&(CABLES.UI.fpsElement||(CABLES.UI.fpsElement=$("#canvasInfoFPS")),CABLES.UI.fpsElement.html("| fps: "+this._fps+" | ms: "+Math.round(this._fpsMsCount/this._fpsFrameCount))),this._fpsFrameCount=0,this._fpsMsCount=0,this._fpsStart=CABLES.now()),this._lastFrameTime=CABLES.now(),this._fpsFrameCount++,this.config.doRequestAnimation&&requestAnimationFrame(this.exec.bind(this))}},CABLES.Patch.prototype.link=function(t,e,i,s){if(!t)return void console.log("link: op1 is null ");if(!i)return void console.log("link: op2 is null");var r=t.getPort(e),n=i.getPort(s);if(!r)return void console.warn("port not found! "+e+" ("+t.objName+")");if(!n)return void console.warn("port not found! "+s+" of "+i.name+" ("+i.objName+")");if(!r.shouldLink(r,n)||!n.shouldLink(r,n))return!1;if(CABLES.Link.canLink(r,n)){var o=new CABLES.Link(this);return o.link(r,n),this.emitEvent("onLink",r,n,o),o}},CABLES.Patch.prototype.serialize=function(t){var e={};e.ops=[],e.settings=this.settings;for(var i in this.ops)e.ops.push(this.ops[i].getSerialized());return t?e:JSON.stringify(e)},CABLES.Patch.prototype.getOpById=function(t){for(var e in this.ops)if(this.ops[e].id==t)return this.ops[e]},CABLES.Patch.prototype.getOpsByName=function(t){var e=[];for(var i in this.ops)this.ops[i].name==t&&e.push(this.ops[i]);return e},CABLES.Patch.prototype.getOpsByObjName=function(t){var e=[];for(var i in this.ops)this.ops[i].objName==t&&e.push(this.ops[i]);return e},CABLES.Patch.prototype.loadLib=function(t){CABLES.ajaxSync("/ui/libs/"+t+".js",function(t,e){var i=document.createElement("script");i.type="text/javascript",i.text=e,document.getElementsByTagName("head")[0].appendChild(i)},"GET")},CABLES.Patch.prototype.reloadOp=function(t,e){var i=0,s=[],r=[];for(var n in this.ops)this.ops[n].objName==t&&r.push(this.ops[n]);for(var n=0;n<r.length;n++){i++;var o=r[n];o.deleted=!0;var a=this,h=this.addOp(t,o.uiAttribs);s.push(h);var l,u;for(l in o.portsIn)if(0===o.portsIn[l].links.length){var c=h.getPort(o.portsIn[l].name);c?c.set(o.portsIn[l].get()):console.error("[reloadOp] could not set port "+o.portsIn[l].name+", propably renamed port ?")}else for(;o.portsIn[l].links.length;){var p=o.portsIn[l].links[0].portIn.name,d=o.portsIn[l].links[0].portOut.name,g=o.portsIn[l].links[0].portOut.parent;o.portsIn[l].links[0].remove(),u=a.link(h,p,g,d),u?u.setValue():console.log("[reloadOp] relink after op reload not successfull for port "+d)}for(l in o.portsOut)for(;o.portsOut[l].links.length;){var _=o.portsOut[l].links[0].portOut.name,f=o.portsOut[l].links[0].portIn.name,E=o.portsOut[l].links[0].portIn.parent;o.portsOut[l].links[0].remove(),u=a.link(h,_,E,f),u?u.setValue():console.log("relink after op reload not successfull for port "+f)}this.deleteOp(o.id)}e(i,s)},CABLES.Patch.prototype.getSubPatchOps=function(t){var e=[];for(var i in this.ops)this.ops[i].uiAttribs&&this.ops[i].uiAttribs.subPatch==t&&e.push(this.ops[i]);return e},CABLES.Patch.prototype.getSubPatchOp=function(t,e){for(var i in this.ops)if(this.ops[i].uiAttribs&&this.ops[i].uiAttribs.subPatch==t&&this.ops[i].objName==e)return this.ops[i];return!1},CABLES.Patch.prototype.deSerialize=function(t,e){function i(t,e,i,s){var n=!1;n||r.link(r.getOpById(t),i,r.getOpById(e),s)}if(!this.aborted){var s=this.loading.start("core","deserialize");this.onLoadStart&&this.onLoadStart(),this.namespace=t.namespace||"",this.name=t.name||"","string"==typeof t&&(t=JSON.parse(t));var r=this;this.settings=t.settings;var n=new CABLES.Requirements(this);for(var o in t.ops){var a=CABLES.now(),h=t.ops[o],l=null;if(l=h.opId?this.addOp(h.opId,h.uiAttribs,h.id):this.addOp(h.objName,h.uiAttribs,h.id),n.checkOp(l),l){e&&(l.id=CABLES.uuid()),l.portsInData=h.portsIn,l._origData=h;for(var u in h.portsIn){var c=h.portsIn[u],p=l.getPort(c.name);if(!p||"bool"!=p.uiAttribs.display&&"bool"!=p.uiAttribs.type||isNaN(c.value)||(c.value=!0===c.value),p&&void 0!==c.value&&p.type!=CABLES.OP_PORT_TYPE_TEXTURE&&p.set(c.value),p&&c&&c.animated&&p.setAnimated(c.animated),p&&c&&c.anim){p.anim||(p.anim=new CABLES.Anim),c.anim.loop&&(p.anim.loop=c.anim.loop);for(var d in c.anim.keys)p.anim.keys.push(new CABLES.ANIM.Key(c.anim.keys[d]));

}}for(var g in h.portsOut){var _=l.getPort(h.portsOut[g].name);_&&_.type!=CABLES.OP_PORT_TYPE_TEXTURE&&h.portsOut[g].hasOwnProperty("value")&&_.set(t.ops[o].portsOut[g].value)}}{Math.round(100*(CABLES.now()-a))/100}}for(var f in this.ops)this.ops[f].onLoadedValueSet&&(this.ops[f].onLoadedValueSet(this.ops[f]._origData),this.ops[f].onLoadedValueSet=null,this.ops[f]._origData=null);if(t.ops)for(o=0;o<t.ops.length;o++)if(t.ops[o].portsIn)for(var E=0;E<t.ops[o].portsIn.length;E++)if(t.ops[o].portsIn[E].links)for(var A=0;A<t.ops[o].portsIn[E].links.length;A++)t.ops[o].portsIn[E].links[A]&&i(t.ops[o].portsIn[E].links[A].objIn,t.ops[o].portsIn[E].links[A].objOut,t.ops[o].portsIn[E].links[A].portIn,t.ops[o].portsIn[E].links[A].portOut);for(var f in this.ops)this.ops[f].onLoaded&&(this.ops[f].onLoaded(),this.ops[f].onLoaded=null);for(var f in this.ops)this.ops[f].init&&(this.ops[f].init(),this.ops[f].init=null);if(this.config.variables)for(var m in this.config.variables)this.setVarValue(m,this.config.variables[m]);setTimeout(function(){this.loading.finished(s)}.bind(this),100),this.config.onPatchLoaded&&this.config.onPatchLoaded(),this.onLoadEnd&&this.onLoadEnd()}},CABLES.Patch.prototype.profile=function(t){this.profiler=new CABLES.Profiler;for(var e in this.ops)this.ops[e].profile(t)},CABLES.Patch.Variable=function(t,e){this._name=t,this._changeListeners=[],this.setValue(e)},CABLES.Patch.Variable.prototype.getValue=function(){return this._v},CABLES.Patch.Variable.prototype.getName=function(){return this._name},CABLES.Patch.Variable.prototype.setValue=function(t){this._v=t;for(var e=0;e<this._changeListeners.length;e++)this._changeListeners[e](t)},CABLES.Patch.Variable.prototype.addListener=function(t){this._changeListeners.push(t)},CABLES.Patch.Variable.prototype.removeListener=function(t){var e=this._changeListeners.indexOf(t);this._changeListeners.splice(e,1)},CABLES.Patch.prototype.setVariable=function(t,e){this._variables.hasOwnProperty(t)?this._variables[t].setValue(e):console.warn("variable "+t+" not found!")},CABLES.Patch.prototype.setVarValue=function(t,e){return this._variables.hasOwnProperty(t)?this._variables[t].setValue(e):(this._variables[t]=new CABLES.Patch.Variable(t,e),this.emitEvent("variablesChanged")),this._variables[t]},CABLES.Patch.prototype.getVarValue=function(t,e){return this._variables.hasOwnProperty(t)?this._variables[t].getValue():void 0},CABLES.Patch.prototype.getVar=function(t){return this._variables.hasOwnProperty(t)?this._variables[t]:void 0},CABLES.Patch.prototype.getVars=function(){return this._variables},CABLES.Patch.prototype.getVars=function(){return this._variables},CABLES.Patch.prototype.exitError=function(t,e){this&&this.config&&this.config.onError&&(this.config.onError(t,e),this.aborted=!0)},CABLES.Patch.prototype.preRenderOps=function(){console.log("prerendering...");var t=null;CABLES.StopWatch&&(t=new CABLES.StopWatch("prerendering"));for(var e=0;e<this.ops.length;e++)this.ops[e].preRender&&(this.ops[e].preRender(),console.log("prerender "+this.ops[e].objName));t&&t.stop("prerendering")},CABLES.Patch.prototype.dispose=function(){this.pause(),this.clear()},CABLES.PORT_DIR_IN=0,CABLES.PORT_DIR_OUT=1;var CABLES=CABLES||{};CABLES.Port=function(t,e,i,s){CABLES.EventTarget.apply(this),this.data={},this.direction=CABLES.PORT_DIR_IN,this.id=CABLES.generateUUID(),this.parent=t,this.links=[],this.value=0,this.name=e,this.type=i||CABLES.OP_PORT_TYPE_VALUE,this.uiAttribs=s||{},this.anim=null;this.defaultValue=null,this._uiActiveState=!0,this.ignoreValueSerialize=!1,this.onLinkChanged=null,this.crashed=!1,this._valueBeforeLink=null,this._lastAnimFrame=-1,this._animated=!1,this.onValueChanged=null,this.onTriggered=null,this.onUiActiveStateChange=null,this.changeAlways=!1,this._warnedDeprecated=!1,Object.defineProperty(this,"val",{get:function(){return this._warnedDeprecated=!0,this.get()},set:function(t){this.setValue(t),this._warnedDeprecated=!0}})},CABLES.Port.prototype.onAnimToggle=function(){},CABLES.Port.prototype._onAnimToggle=function(){this.onAnimToggle()},CABLES.Port.prototype.hidePort=function(){this.setUiAttribs({hidePort:!0})},CABLES.Port.prototype.remove=function(){this.removeLinks(),this.parent.removePort(this)},CABLES.Port.prototype.setUiAttribs=function(t){this.uiAttribs||(this.uiAttribs={});for(var e in t)this.uiAttribs[e]=t[e];this.emitEvent("onUiAttrChange",t)},CABLES.Port.prototype.get=function(){return this._animated&&this._lastAnimFrame!=this.parent.patch.getFrameNum()&&(this._lastAnimFrame=this.parent.patch.getFrameNum(),this.value=this.anim.getValue(this.parent.patch.timer.getTime()),oldAnimVal=this.value,this.forceChange()),this.value},CABLES.Port.prototype.set=CABLES.Port.prototype.setValue=function(t){if(void 0!==t&&this.parent.enabled&&!this.crashed&&(t!==this.value||this.changeAlways||this.type==CABLES.OP_PORT_TYPE_TEXTURE||this.type==CABLES.OP_PORT_TYPE_ARRAY)){if(this._animated)this.anim.setValue(this.parent.patch.timer.getTime(),t);else{try{this.value=t,this.forceChange()}catch(e){this.crashed=!0,this.setValue=function(t){},this.onTriggered=function(){},console.log("exception!"),console.error("onvaluechanged exception cought",e),console.log(e.stack),console.log("exception in: "+this.parent.name),gui&&gui.showOpCrash(this.parent),CABLES.UI&&CABLES.UI.MODAL.showException(e,this.parent)}CABLES.UI&&this.type==CABLES.OP_PORT_TYPE_TEXTURE&&gui.texturePreview().updateTexturePort(this)}if(this.direction==CABLES.PORT_DIR_OUT)for(var i=0;i<this.links.length;++i)this.links[i].setValue()}},CABLES.Port.prototype.updateAnim=function(){this._animated&&(this.value=this.get(),(oldAnimVal!=this.value||this.changeAlways)&&(oldAnimVal=this.value,this.forceChange()),oldAnimVal=this.value)},CABLES.Port.args=function(t){return(t+"").replace(/[\/][\/].*$/gm,"").replace(/\s+/g,"").replace(/[\/][*][^\/*]*[*][\/]/g,"").split("){",1)[0].replace(/^[^(]*[(]/,"").replace(/=[^,]+/g,"").split(",").filter(Boolean)},CABLES.Port.prototype.forceChange=function(){this.onValueChanged||this.onChange,this.onChange?this.onChange(this,this.value):this.onValueChanged&&this.onValueChanged(this,this.value)},CABLES.Port.prototype.getTypeString=function(){return this.type==CABLES.OP_PORT_TYPE_VALUE?"Number":this.type==CABLES.OP_PORT_TYPE_FUNCTION?"Trigger":this.type==CABLES.OP_PORT_TYPE_OBJECT?"Object":this.type==CABLES.OP_PORT_TYPE_DYNAMIC?"Dynamic":this.type==CABLES.OP_PORT_TYPE_ARRAY?"Array":this.type==CABLES.OP_PORT_TYPE_STRING?"String":"Unknown"},CABLES.Port.prototype.getSerialized=function(){var t={};if(t.name=this.getName(),this.ignoreValueSerialize||0!==this.links.length||this.type==CABLES.OP_PORT_TYPE_OBJECT&&this.value&&this.value.tex||(t.value=this.value),this._animated&&(t.animated=!0),this.anim&&(t.anim=this.anim.getSerialized()),"file"==this.uiAttribs.display&&(t.display=this.uiAttribs.display),this.direction==CABLES.PORT_DIR_IN&&this.links.length>0){t.links=[];for(var e in this.links)this.links[e].portIn&&this.links[e].portOut&&t.links.push(this.links[e].getSerialized())}return t},CABLES.Port.prototype.shouldLink=function(){return!0},CABLES.Port.prototype.removeLinks=function(){for(var t=0;this.links.length>0;){if(t++,t>5e3){console.warn("could not delete links... / infinite loop"),this.links.length=0;break}this.links[0].remove()}},CABLES.Port.prototype.removeLink=function(t){for(var e in this.links)this.links[e]==t&&this.links.splice(e,1);this.direction==CABLES.PORT_DIR_IN&&this.setValue(this.type==CABLES.OP_PORT_TYPE_VALUE?this._valueBeforeLink||0:this._valueBeforeLink||null),this.onLinkChanged&&this.onLinkChanged(),this.emitEvent("onLinkChanged")},CABLES.Port.prototype.getName=function(){return this.name},CABLES.Port.prototype.addLink=function(t){this._valueBeforeLink=this.value,this.links.push(t),this.onLinkChanged&&this.onLinkChanged(),this.emitEvent("onLinkChanged")},CABLES.Port.prototype.getLinkTo=function(t){for(var e in this.links)if(this.links[e].portIn==t||this.links[e].portOut==t)return this.links[e]},CABLES.Port.prototype.removeLinkTo=function(t){for(var e in this.links)if(this.links[e].portIn==t||this.links[e].portOut==t)return this.links[e].remove(),this.onLinkChanged&&this.onLinkChanged(),void this.emitEvent("onLinkChanged")},CABLES.Port.prototype.isLinkedTo=function(t){for(var e in this.links)if(this.links[e].portIn==t||this.links[e].portOut==t)return!0;return!1},CABLES.Port.prototype.trigger=function(){if(0!==this.links.length&&this.parent.enabled){var t=null;try{for(var e=0;e<this.links.length;++e)this.links[e].portIn&&(t=this.links[e].portIn,t._onTriggered()),this.links[e].activity()}catch(i){this.parent.enabled=!1,CABLES.UI&&(CABLES.UI.MODAL.showException(i,t.parent),window.gui&&gui.showOpCrash(t.parent)),console.log("exception!"),console.error("ontriggered exception cought",i),console.log(i.stack),console.log("exception in: "+t.parent.name)}}},CABLES.Port.prototype.call=function(){console.log("call deprecated - use trigger() "),this.trigger()},CABLES.Port.prototype.execute=function(){console.log("### execute port: "+this.getName(),this.goals.length)},CABLES.Port.prototype.setAnimated=function(t){this._animated!=t&&(this._animated=t,this._animated&&!this.anim&&(this.anim=new CABLES.Anim),this._onAnimToggle())},CABLES.Port.prototype.toggleAnim=function(t){this._animated=!this._animated,this._animated&&!this.anim&&(this.anim=new CABLES.Anim),this.setAnimated(this._animated),this._onAnimToggle()},CABLES.Port.prototype.getType=function(){return this.type},CABLES.Port.prototype.isLinked=function(){return this.links.length>0},CABLES.Port.prototype.isAnimated=function(){return this._animated},CABLES.Port.prototype.isHidden=function(){return this.uiAttribs.hidePort},CABLES.Port.prototype._onTriggered=function(){this.parent.updateAnims(),this.parent.enabled&&this.onTriggered&&this.onTriggered()},CABLES.Port.prototype._onTriggeredProfiling=function(){this.parent.updateAnims(),this.parent.patch.profiler.add("port",this),this.parent.enabled&&this.onTriggered&&this.onTriggered(),this.parent.patch.profiler.add("port",null)},CABLES.Port.prototype.onValueChange=function(t){this.onChange=t},CABLES.Port.prototype.getUiActiveState=function(){return this._uiActiveState},CABLES.Port.prototype.setUiActiveState=function(t){_uiActiveState=t,this.onUiActiveStateChange&&this.onUiActiveStateChange()},CABLES.Port.portTypeNumberToString=function(t){return t==CABLES.OP_PORT_TYPE_VALUE?"value":t==CABLES.OP_PORT_TYPE_FUNCTION?"function":t==CABLES.OP_PORT_TYPE_OBJECT?"object":t==CABLES.OP_PORT_TYPE_ARRAY?"array":t==CABLES.OP_PORT_TYPE_STRING?"string":t==CABLES.OP_PORT_TYPE_DYNAMIC?"dynamic":"unknown"},CABLES=CABLES||{},CABLES.Profiler=function(){var t={},e=null,i=0;this.getItems=function(){return t},this.clear=function(){t={}},this.add=function(s,r){null!==e&&(r&&r.id==e||t[e]&&(t[e].timeUsed+=performance.now()-i,(!t[e].peakTime||CABLES.now()-t[e].peakTime>5e3)&&(t[e].peak>1&&r&&console.log("PEAK ",r.parent.objName),t[e].peak=0,t[e].peakTime=CABLES.now()),t[e].peak=Math.max(t[e].peak,performance.now()-i))),null!==r?(t[r.id]||(t[r.id]={numTriggers:0,timeUsed:0}),t[r.id].numTriggers++,t[r.id].title=r.parent.name+" "+r.name,e=r.id,i=performance.now()):e=null},this.print=function(){console.log("--------");for(var e in t)console.log(t[e].title+": "+t[e].numTriggers+" / "+t[e].timeUsed)}},CABLES=CABLES||{},CABLES.EMBED=CABLES.EMBED||{},CABLES.EMBED.addPatch=function(t,e){var i=t,s=CABLES.generateUUID();if("string"==typeof t&&(s=t,i=document.getElementById(s),!i))return void console.error(s+" Polyshape Container Element not found!");var r=document.createElement("canvas");return r.id="glcanvas_"+s,r.width=i.clientWidth,r.height=i.clientHeight,window.addEventListener("resize",function(){this.setAttribute("width",i.clientWidth),this.height=i.clientHeight}.bind(r)),i.appendChild(r),e=e||{},e.glCanvasId=r.id,e.onError||(e.onError=function(t){console.log(t)}),CABLES.patch=new CABLES.Patch(e),r};var CABLES=CABLES||{};CABLES.GLGUI=CABLES.GLGUI||{},CABLES.GLGUI.LineDrawer=function(t,e){this._num=1e5,this._counter=0,this._positions=new Float32Array(3*this._num),this._colors=new Float32Array(4*this._num)},CABLES.GLGUI.RectInstancer=function(t,e){this._counter=0,this._num=1e5,this._needsRebuild=!0,this._positions=new Float32Array(3*this._num),this._colors=new Float32Array(4*this._num),this._sizes=new Float32Array(2*this._num),this._shader=new CGL.Shader(t,"rectinstancer"),this._shader.setSource("".endl()+"IN vec3 vPosition;".endl()+"IN vec3 instPos;".endl()+"IN vec4 instCol;".endl()+"IN vec2 instSize;".endl()+"OUT vec4 col;".endl()+"UNI float zoom,resX,resY,scrollX,scrollY;".endl()+"void main()".endl()+"{".endl()+"    vec3 pos=vPosition;".endl()+"    pos.xy*=instSize;".endl()+"    pos.x+=scrollX;".endl()+"    pos.y+=scrollY;".endl()+"    pos.x+=instPos.x;".endl()+"    pos.y+=instPos.y;".endl()+"    pos.y=0.0-pos.y;".endl()+"    col=instCol;".endl()+"    gl_Position = vec4(pos*(1.0/zoom),1.0);".endl()+"}","IN vec4 col;void main(){outColor=vec4(col.rgb,1.0);}"),this._uniZoom=new CGL.Uniform(this._shader,"f","zoom",0),this._uniResX=new CGL.Uniform(this._shader,"f","resX",500),this._uniResY=new CGL.Uniform(this._shader,"f","resY",500),this._uniscrollX=new CGL.Uniform(this._shader,"f","scrollX",0),this._uniscrollY=new CGL.Uniform(this._shader,"f","scrollY",0),this._geom=new CGL.Geometry("rectinstancer"),this._geom.vertices=new Float32Array([1,1,0,0,1,0,1,0,0,0,0,0]),this._geom.verticesIndices=new Float32Array([2,1,0,3,1,2]),this._mesh=new CGL.Mesh(t,this._geom),this._mesh.numInstances=this._num;var i=0;for(i=0;i<2*this._num;i++)this._sizes[i]=0;for(i=0;i<3*this._num;i++)this._positions[i]=0;for(i=0;i<4*this._num;i++)this._colors[i]=1},CABLES.GLGUI.RectInstancer.prototype.dispose=function(){},CABLES.GLGUI.RectInstancer.prototype.render=function(t,e,i,s,r){this._uniResX.set(t),this._uniResY.set(e),this._uniscrollX.set(i),this._uniscrollY.set(s),this._uniZoom.set(r),this._needsRebuild&&this.rebuild(),this._mesh.render(this._shader)},CABLES.GLGUI.RectInstancer.prototype.rebuild=function(){this._mesh.addAttribute("instPos",this._positions,3,{instanced:!0}),this._mesh.addAttribute("instCol",this._colors,4,{instanced:!0}),this._mesh.addAttribute("instSize",this._sizes,2,{instanced:!0}),this._needsRebuild=!1},CABLES.GLGUI.RectInstancer.prototype.getIndex=function(){return this._counter++,this._counter},CABLES.GLGUI.RectInstancer.prototype.setPosition=function(t,e,i){this._positions[3*t+0]=e,this._positions[3*t+1]=i,this._needsRebuild=!0},CABLES.GLGUI.RectInstancer.prototype.setSize=function(t,e,i){this._sizes[2*t+0]=e,this._sizes[2*t+1]=i,this._needsRebuild=!0},CABLES.GLGUI.RectInstancer.prototype.setColor=function(t,e,i,s){this._colors[4*t+0]=e,this._colors[4*t+1]=i,this._colors[4*t+2]=s,this._colors[4*t+3]=1,this._needsRebuild=!0},CABLES.GLGUI.GlRect=function(t,e){e=e||{},this._rectInstancer=t,this._attrIndex=t.getIndex(),this._parent=e.parent||null,this.childs=[]},CABLES.GLGUI.GlRect.prototype.addChild=function(t){this.childs.push(t)},CABLES.GLGUI.GlRect.prototype.setSize=function(t,e){this._rectInstancer.setSize(this._attrIndex,t,e)},CABLES.GLGUI.GlRect.prototype.setColor=function(t,e,i){this._rectInstancer.setColor(this._attrIndex,t,e,i)},CABLES.GLGUI.GlRect.prototype.setPosition=function(t,e){this.x=t,this.y=e;var i=this.x,s=this.y;this._parent&&(i+=this._parent.x,s+=this._parent.y),this._rectInstancer.setPosition(this._attrIndex,i,s);for(var r=0;r<this.childs.length;r++)this.childs[r].setPosition(this.childs[r].x,this.childs[r].y)},CABLES.GLGUI.OP_MIN_WIDTH=100,CABLES.GLGUI.GlOp=function(t,e){this._op=e,this._instancer=t,this._glRectBg=new CABLES.GLGUI.GlRect(t),this._glRectBg.setSize(100,30),this._glRectBg.setColor(.1,.1,.1),this._portRects=[],this.updatePosition();for(var i=0;i<this._op.portsIn.length;i++)this._setupPort(i,this._op.portsIn[i]);for(var i=0;i<this._op.portsOut.length;i++)this._setupPort(i,this._op.portsOut[i]);const s=10*Math.max(this._op.portsIn.length,this._op.portsOut.length);this._glRectBg.setSize(Math.max(CABLES.GLGUI.OP_MIN_WIDTH,s),30)},CABLES.GLGUI.GlOp.prototype.dispose=function(){this._glRectBg&&(this._glRectBg.setSize(0,0),this._glRectBg.setPosition(0,0));for(var t=0;t<this._portRects.length;t++)this._portRects[t].setSize(0,0),this._portRects[t].setPosition(0,0);this._op=null,this._portRects.length=0,this._glRectBg=null,this._instancer=null},CABLES.GLGUI.GlOp.prototype._setupPort=function(t,e){var i=new CABLES.GLGUI.GlRect(this._instancer,{parent:this._glRectBg});i.setSize(7,5),e.type==CABLES.OP_PORT_TYPE_VALUE?i.setColor(0,1,.7):e.type==CABLES.OP_PORT_TYPE_FUNCTION?i.setColor(1,1,0):e.type==CABLES.OP_PORT_TYPE_OBJECT?i.setColor(1,0,1):e.type==CABLES.OP_PORT_TYPE_ARRAY?i.setColor(0,.3,1):e.type==CABLES.OP_PORT_TYPE_STRING?i.setColor(1,.3,0):e.type==CABLES.OP_PORT_TYPE_DYNAMIC&&i.setColor(1,1,1);var s=0;1==e.direction&&(s=25),i.setPosition(10*t,s),this._glRectBg.addChild(i),this._portRects.push(i)},CABLES.GLGUI.GlOp.prototype.updatePosition=function(){return this._glRectBg?void this._glRectBg.setPosition(this._op.uiAttribs.translate.x,this._op.uiAttribs.translate.y):void console.log("no this._glRectBg")},CABLES.GLGUI.GlOp.prototype.getOp=function(){return this._op},CABLES.GLGUI.GlOp.prototype.update=function(){this.updatePosition()},CABLES.GLGUI.GlPatch=function(t){this._patch=t,this._glOps=[],this._rectInstancer=new CABLES.GLGUI.RectInstancer(this._patch.cgl),this._rectInstancer.rebuild(),t.addEventListener("onOpAdd",this.addOp.bind(this)),t.addEventListener("onOpDelete",this.deleteOp.bind(this))},CABLES.GLGUI.GlPatch.prototype.getOpAt=function(t,e){},CABLES.GLGUI.GlPatch.prototype.deleteOp=function(t){for(var e=0;e<this._glOps.length;e++)if(this._glOps[e].getOp()==t){var i=this._glOps[e];return this._glOps[e].getOp().removeEventListener("onUiAttribsChange",this._glOps[e].update),this._glOps.slice(e,1),void i.dispose()}},CABLES.GLGUI.GlPatch.prototype.addOp=function(t){console.log("OP ADDEDDDDDD");const e=new CABLES.GLGUI.GlOp(this._rectInstancer,t);this._glOps.push(e),t.addEventListener("onUiAttribsChange",e.update.bind(e))},CABLES.GLGUI.GlPatch.prototype.render=function(t,e,i,s,r){this._rectInstancer.render(t,e,i,s,r)},CABLES.GLGUI.GlPatch.prototype.dispose=function(){for(;this._glOps.length>0;)this._glOps[0].dispose(),this._glOps.splice(0,1);this._rectInstancer&&this._rectInstancer.dispose()},CABLES.GLGUI.GlPatch.prototype.reset=function(){if(this._rectInstancer=new CABLES.GLGUI.RectInstancer(this._patch.cgl),this._rectInstancer.rebuild(),this.dispose(),0==this._glOps.length)for(var t=0;t<this._patch.ops.length;t++)this.addOp(this._patch.ops[t]);for(var t=0;t<this._glOps.length;t++)this._glOps[t].updatePosition();this._rectInstancer.rebuild()};var CABLES=CABLES||{};CABLES.Instancing=function(){this._loops=[],this._indizes=[],this._index=0},CABLES.Instancing.prototype.pushLoop=function(t){this._loops.push(Math.abs(Math.floor(t))),this._indizes.push(this._index)},CABLES.Instancing.prototype.popLoop=function(){this._loops.pop(),this._index=this._indizes.pop(),0===this._loops.length&&(this._index=0)},CABLES.Instancing.prototype.numLoops=function(){return this._loops.length},CABLES.Instancing.prototype.numCycles=function(){if(0===this._loops.length)return 0;for(var t=this._loops[0],e=1;e<this._loops.length;e++)t*=this._loops[e];return t},CABLES.Instancing.prototype.inLoop=function(){return this._loops.length>0},CABLES.Instancing.prototype.increment=function(){this._index++},CABLES.Instancing.prototype.index=function(){return this._index},CABLES.LoadingStatus=function(t){this._loadingAssets={},this._cbFinished=[],this._percent=0,this._count=0,this._countFinished=0,this._order=0,this._startTime=0,this._patch=t},CABLES.LoadingStatus.prototype.setOnFinishedLoading=function(t){this._cbFinished.push(t)},CABLES.LoadingStatus.prototype.getNumAssets=function(){return this._countFinished},CABLES.LoadingStatus.prototype.getProgress=function(){return this._percent},CABLES.LoadingStatus.prototype.checkStatus=function(){this._countFinished=0,this._count=0;for(var t in this._loadingAssets)this._count++,this._loadingAssets[t].finished||this._countFinished++;if(this._percent=(this._count-this._countFinished)/this._count,CGL.onLoadingAssetsFinished&&(console.error("CGL.onLoadingAssetsFinished is deprecated, please use config parameter onFinishedLoading with scene/patch constructor"),setTimeout(this._cbFinished,200)),0===this._countFinished){for(var e=0;e<this._cbFinished.length;e++)setTimeout(this._cbFinished[e],200);this.print()}},CABLES.LoadingStatus.prototype.print=function(){if(!this._patch.silent){var t=[];for(var e in this._loadingAssets)t.push([this._loadingAssets[e].order,this._loadingAssets[e].type,this._loadingAssets[e].name,(this._loadingAssets[e].timeEnd-this._loadingAssets[e].timeStart)/1e3+"s"]);console.groupCollapsed("finished loading "+this._order+" assets in "+(Date.now()-this._startTime)/1e3+"s"),console.table(t),console.groupEnd()}},CABLES.LoadingStatus.prototype.finished=function(t){this._loadingAssets[t]&&(this._loadingAssets[t].finished=!0,this._loadingAssets[t].timeEnd=Date.now()),this.checkStatus()},CABLES.LoadingStatus.prototype.start=function(t,e){0==this._startTime&&(this._startTime=Date.now());var i=CABLES.generateUUID();return this._loadingAssets[i]={id:i,type:t,name:e,finished:!1,timeStart:Date.now(),order:this._order},this._order++,i},CABLES.htmlLine=function(t,e){function i(t,i,s,n){r=document.createElement("div");var o="border: 1px solid "+e+"; width: "+s+"px; height: 0px; -moz-transform: rotate("+n+"rad); -webkit-transform: rotate("+n+"rad); -o-transform: rotate("+n+"rad); -ms-transform: rotate("+n+"rad); position: absolute; top: "+i+"px; left: "+t+"px; ";return r.setAttribute("style",o),r.classList.add("gizmoline"),r}function s(t,e,i,s){r.style.width=i+"px",r.style.top=e+"px",r.style.left=t+"px",r.style["-moz-transform"]="rotate("+s+"rad)",r.style["-webkit-transform"]="rotate("+s+"rad)",r.style["-o-transform"]="rotate("+s+"rad)",r.style["-ms-transform"]="rotate("+s+"rad)"}var r=null;this.set=function(t,e,i,r){var n=t-i,o=e-r,a=Math.sqrt(n*n+o*o),h=(t+i)/2,l=(e+r)/2,u=h-a/2,c=l,p=Math.PI-Math.atan2(-o,n);s(u,c,a,p)},this.hide=function(){r&&(r.style.display="none")},this.show=function(){r&&(r.style.display="block")},t.appendChild(i(100,100,200,200)),this.hide()},CABLES.Gizmo=function(t){this._cgl=t,this._eleCenter=null,this._eleX=null,this._eleY=null,this._params=null,this._origValue=0,this._dragSum=0,this._dir=1},CABLES.Gizmo.prototype.getDir=function(t,e){var i=this._params.x-t,s=this._params.y-e,r=(i+s)/2;return 0>r?1:-1},CABLES.Gizmo.tempParams={},CABLES.Gizmo.prototype.set=function(t){function e(t){var e=s.getViewPort(),i=e[2]-(.5*e[2]-t[0]*e[2]*.5/t[2]),r=e[3]-(.5*e[3]+t[1]*e[3]*.5/t[2]);return{x:i,y:r}}function i(t,e,i,s){var r=i-t,n=s-e;return Math.sqrt(r*r+n*n)}if(!t)return this.setParams(t);var s=this._cgl;s.pushModelMatrix();var r=mat4.create(),n=vec3.create(),o=vec3.create(),a=vec3.create(),h=vec3.create(),l=vec3.create();mat4.translate(s.mvMatrix,s.mvMatrix,[t.posX.get(),t.posY.get(),t.posZ.get()]),mat4.multiply(r,s.vMatrix,s.mvMatrix),vec3.transformMat4(n,[0,0,0],r),vec3.transformMat4(o,n,s.pMatrix);var u=e(o);vec3.transformMat4(n,[1,0,0],r),vec3.transformMat4(a,n,s.pMatrix);var c=e(a),p=i(u.x,u.y,c.x,c.y);vec3.transformMat4(n,[0,1,0],r),vec3.transformMat4(a,n,s.pMatrix),c=e(a);var d=i(u.x,u.y,c.x,c.y);vec3.transformMat4(n,[0,0,1],r),vec3.transformMat4(a,n,s.pMatrix),c=e(a);var g=i(u.x,u.y,c.x,c.y),_=Math.max(g,Math.max(p,d)),f=1/(_+1e-8)*50;this._multi=f,vec3.transformMat4(n,[f,0,0],r),vec3.transformMat4(a,n,s.pMatrix),vec3.transformMat4(n,[0,f,0],r),vec3.transformMat4(h,n,s.pMatrix),vec3.transformMat4(n,[0,0,f],r),vec3.transformMat4(l,n,s.pMatrix);var E=e(a),A=e(h),m=e(l);s.popModelMatrix(),CABLES.Gizmo.tempParams.x=u.x,CABLES.Gizmo.tempParams.y=u.y,CABLES.Gizmo.tempParams.xx=E.x,CABLES.Gizmo.tempParams.xy=E.y,CABLES.Gizmo.tempParams.yx=A.x,CABLES.Gizmo.tempParams.yy=A.y,CABLES.Gizmo.tempParams.zx=m.x,CABLES.Gizmo.tempParams.zy=m.y,CABLES.Gizmo.tempParams.coord=o,CABLES.Gizmo.tempParams.coordX=a,CABLES.Gizmo.tempParams.coordY=h,CABLES.Gizmo.tempParams.coordZ=l,CABLES.Gizmo.tempParams.posX=t.posX,CABLES.Gizmo.tempParams.posY=t.posY,CABLES.Gizmo.tempParams.posZ=t.posZ,CABLES.Gizmo.tempParams.dist=f,this.setParams(CABLES.Gizmo.tempParams)},CABLES.Gizmo.prototype.setParams=function(t){if(this._params=t,!this._eleCenter){var e=this._cgl.canvas.parentElement;this._eleCenter=document.createElement("div"),this._eleCenter.id="gizmo",this._eleCenter.style.background="#fff",this._eleCenter.style.opacity="0.9",this._eleCenter.classList.add("gizmo"),e.appendChild(this._eleCenter),this._eleX=document.createElement("div"),this._eleX.id="gizmo",this._eleX.style.background="#f00",this._eleX.classList.add("gizmo"),e.appendChild(this._eleX),this._eleY=document.createElement("div"),this._eleY.id="gizmo",this._eleY.style.background="#0f0",this._eleY.classList.add("gizmo"),e.appendChild(this._eleY),this._eleZ=document.createElement("div"),this._eleZ.id="gizmo",this._eleZ.style.background="#00f",this._eleZ.classList.add("gizmo"),e.appendChild(this._eleZ),this.lineX=new CABLES.htmlLine(e,"#f00"),this.lineY=new CABLES.htmlLine(e,"#0f0"),this.lineZ=new CABLES.htmlLine(e,"#00f"),this._eleX.addEventListener("mousedown",function(){this._params&&(this._draggingPort=this._params.posX,this._origValue=this._params.posX.get(),this._dragSum=0,this.dragger(this._eleCenter),this._dir=this.getDir(this._params.xx,this._params.xy))}.bind(this)),this._eleY.addEventListener("mousedown",function(){this._params&&(this._draggingPort=this._params.posY,this._origValue=this._params.posY.get(),this._dragSum=0,this.dragger(this._eleCenter),this._dir=this.getDir(this._params.yx,this._params.yy))}.bind(this)),this._eleZ.addEventListener("mousedown",function(){this._params&&(this._draggingPort=this._params.posZ,this._origValue=this._params.posZ.get(),this._dragSum=0,this.dragger(this._eleCenter),this._dir=this.getDir(this._params.zx,this._params.zy))}.bind(this))}if(!t){var i=this;return void setTimeout(function(){i._eleCenter.style.display="none",i._eleX.style.display="none",i._eleZ.style.display="none",i._eleY.style.display="none",i.lineX.hide(),i.lineZ.hide(),i.lineY.hide()},1)}this.lineX.show(),this.lineZ.show(),this.lineY.show(),this._eleCenter.style.display="block",this._eleCenter.style.left=t.x+"px",this._eleCenter.style.top=t.y+"px",this._eleX.style.display="block",this._eleX.style.left=t.xx+"px",this._eleX.style.top=t.xy+"px",this._eleY.style.display="block",this._eleY.style.left=t.yx+"px",this._eleY.style.top=t.yy+"px",this._eleZ.style.display="block",this._eleZ.style.left=t.zx+"px",this._eleZ.style.top=t.zy+"px",this.lineX.set(t.x,t.y,t.xx,t.xy),this.lineY.set(t.x,t.y,t.yx,t.yy),this.lineZ.set(t.x,t.y,t.zx,t.zy)},CABLES.Gizmo.prototype.dragger=function(t){function e(t){}function i(i){CABLES.UI&&gui.setStateUnsaved(),o=!0,document.addEventListener("pointerlockchange",n,!1),document.addEventListener("mozpointerlockchange",n,!1),document.addEventListener("webkitpointerlockchange",n,!1),document.addEventListener("keydown",e,!1),t.requestPointerLock=t.requestPointerLock||t.mozRequestPointerLock||t.webkitRequestPointerLock,t.requestPointerLock&&t.requestPointerLock()}function s(t){CABLES.UI&&gui.setStateUnsaved(),o=!1,document.removeEventListener("pointerlockchange",n,!1),document.removeEventListener("mozpointerlockchange",n,!1),document.removeEventListener("webkitpointerlockchange",n,!1),document.removeEventListener("keydown",e,!1),document.exitPointerLock&&document.exitPointerLock(),$(document).unbind("mouseup",s),$(document).unbind("mousedown",i),document.removeEventListener("mousemove",r,!1),CABLES.UI&&gui.patch().showOpParams(a._draggingPort.parent)}function r(t){CABLES.UI&&gui.setStateUnsaved();var e=(t.movementY+t.movementX)*a._dir*((a._multi||1)/100);t.shiftKey&&(e*=.025),a._dragSum+=e,a._draggingPort.set(a._origValue+a._dragSum)}function n(e){document.pointerLockElement===t||document.mozPointerLockElement===t||document.webkitPointerLockElement===t?document.addEventListener("mousemove",r,!1):(a._draggingPort.set(a._origValue),s())}var o=!1,a=this;$(document).bind("mouseup",s),$(document).bind("mousedown",i)};var CABLES=CABLES||{};CABLES.PACO_CLEAR=0,CABLES.PACO_VALUECHANGE=1,CABLES.PACO_OP_DELETE=2,CABLES.PACO_UNLINK=3,CABLES.PACO_LINK=4,CABLES.PACO_LOAD=5,CABLES.PACO_OP_CREATE=6,CABLES.PACO_OP_ENABLE=7,CABLES.PACO_OP_DISABLE=8,CABLES.togglePacoRenderer=function(){var t=CABLES.UI.userSettings.get("pacoRenderer")||!1;CABLES.UI.userSettings.set("pacoRenderer",!t),document.location.reload()},CABLES.showPacoRenderer=function(){},CABLES.PatchConnectionReceiver=function(t,e,i){this._patch=t,this.connector=i?i:new CABLES.PatchConnectorBroadcastChannel,this.connector.receive(this)},CABLES.PatchConnectionReceiver.prototype._receive=function(t){var e={};if(e=t.event?t:JSON.parse(t.data),e.event==CABLES.PACO_OP_CREATE){console.log("op create: data.vars.objName");var i=this._patch.addOp(e.vars.objName);i.id=e.vars.opId}else if(e.event==CABLES.PACO_LOAD)console.log("load patch....."),this._patch.clear(),this._patch.deSerialize(e.vars.patch);else if(e.event==CABLES.PACO_CLEAR)this._patch.clear(),console.log("clear");else if(e.event==CABLES.PACO_OP_DELETE)console.log("op delete"),this._patch.deleteOp(e.vars.op,!0);else if(e.event==CABLES.PACO_OP_ENABLE){var i=this._patch.getOpById(e.vars.op);i&&(i.enabled=!0)}else if(e.event==CABLES.PACO_OP_DISABLE){var i=this._patch.getOpById(e.vars.op);i&&(i.enabled=!1)}else if(e.event==CABLES.PACO_UNLINK){var s=this._patch.getOpById(e.vars.op1),r=this._patch.getOpById(e.vars.op2),n=s.getPort(e.vars.port1),o=r.getPort(e.vars.port2);n.removeLinkTo(o)}else if(e.event==CABLES.PACO_LINK){var s=this._patch.getOpById(e.vars.op1),r=this._patch.getOpById(e.vars.op2);this._patch.link(s,e.vars.port1,r,e.vars.port2)}else if(e.event==CABLES.PACO_VALUECHANGE){var i=this._patch.getOpById(e.vars.op),a=i.getPort(e.vars.port);a.set(e.vars.v)}else console.log("unknown patchConnectionEvent!",t)},CABLES.PatchConnectionSender=function(t,e){this.connectors=[],this.connectors.push(new CABLES.PatchConnectorBroadcastChannel)},CABLES.PatchConnectionSender.prototype.send=function(t,e){for(var i=0;i<this.connectors.length;i++)this.connectors[i].send(t,e)},CABLES.PatchConnectorBroadcastChannel=function(){window.BroadcastChannel&&(this.bc=new BroadcastChannel("test_channel"))},CABLES.PatchConnectorBroadcastChannel.prototype.receive=function(t){this.bc&&(console.log("init"),this.bc.onmessage=t._receive.bind(t))},CABLES.PatchConnectorBroadcastChannel.prototype.send=function(t,e){if(this.bc){var i={};i.event=t,i.vars=e,this.bc.postMessage(JSON.stringify(i))}},CABLES.PatchConnectorSocketIO=function(){this._socket=io("localhost:5712"),console.log("socket io paco..."),this._socket.emit("channel",{name:"hund"}),this._socket.on("connect",function(){console.log("CONNECTED")}),this._socket.on("reconnect_error",function(){console.log("reconnect_error")}),this._socket.on("connect_error",function(){console.log("connect_error")}),this._socket.on("error",function(){console.log("socket error")})},CABLES.PatchConnectorSocketIO.prototype.receive=function(t){this._socket.on("event",function(e){console.log("socket io receive",e),t._receive(e.data)})},CABLES.PatchConnectorSocketIO.prototype.send=function(t,e){console.log("send socketio");var i={};i.event=t,i.vars=e,this._socket.emit("event",{msg:"paco event",event:t,data:i})};var CABLES=CABLES||{};CABLES.Requirements=function(t){this._patch=t,this.result=[]},CABLES.Requirements.MIDI=0,CABLES.Requirements.POINTERLOCK=1,CABLES.Requirements.WEBAUDIO=2,CABLES.Requirements.WEBGL2=3,CABLES.Requirements.infos=[],CABLES.Requirements.infos[CABLES.Requirements.POINTERLOCK]={title:"pointerLock",caniuse:"https://caniuse.com/#search=pointerlock"},CABLES.Requirements.infos[CABLES.Requirements.MIDI]={title:"midi API",caniuse:"https://caniuse.com/#search=midi"},CABLES.Requirements.infos[CABLES.Requirements.WEBAUDIO]={
title:"web audio",caniuse:"https://caniuse.com/#search=webaudio"},CABLES.Requirements.infos[CABLES.Requirements.WEBGL2]={title:"WebGL 2"},CABLES.Requirements.prototype.checkRequirement=function(t,e){switch(this.result=[],t){case CABLES.Requirements.WEBGL2:return e.patch.cgl.glVersion>=2;case CABLES.Requirements.POINTERLOCK:return"exitPointerLock"in document;case CABLES.Requirements.MIDI:return"MIDIAccess"in window;case CABLES.Requirements.WEBAUDIO:var i=!1;return window.audioContext&&(i=!0),!i&&("webkitAudioContext"in window||"AudioContext"in window)&&(i=!0),i}},CABLES.Requirements.prototype.checkOp=function(t){if(t&&t.requirements)for(var e=0;e<t.requirements.length;e++){var i=t.requirements[e];if(!this.result[i]){var s=this.checkRequirement(i,t);if(!s){t.patch.cgl&&t.patch.cgl.canvas&&t.patch.cgl.canvas.remove();var r=CABLES.Requirements.infos[i].title;throw CABLES.Requirements.infos[i].caniuse&&(r='<a href="'+CABLES.Requirements.infos[i].caniuse+'" target="_blank">'+CABLES.Requirements.infos[i].title+" ("+t.objName+")</a>"),"this browser does not meet requirement: "+CABLES.Requirements.infos[i].title+" ("+t.objName+")"}this.result[i]={success:s,info:CABLES.Requirements.infos[i]}}}};var CABLES=CABLES||{};CABLES.Variable=function(){var t=null,e=[];this.onChanged=function(t){e.push(t)},this.getValue=function(){return t},this.setValue=function(e){t=e,i()};var i=function(){for(var t=0;t<e.length;t++)e[t]()}},CABLES.internalNow=function(){return window.performance.now()},CABLES.now=function(){return CABLES.internalNow()},CABLES.Timer=function(){this._timeStart=CABLES.internalNow(),this._timeOffset=0,this._currentTime=0,this._lastTime=0,this._paused=!0,this._delay=0,this._eventsPaused=!1,this.overwriteTime=-1,this.cbPlayPause=[],this.cbTimeChange=[]},CABLES.Timer.prototype._getTime=function(){return this._lastTime=(CABLES.internalNow()-this._timeStart)/1e3,this._lastTime+this._timeOffset},CABLES.Timer.prototype._eventPlayPause=function(){if(!this._eventsPaused)for(var t in this.cbPlayPause)this.cbPlayPause[t]()},CABLES.Timer.prototype._eventTimeChange=function(){if(!this._eventsPaused)for(var t in this.cbTimeChange)this.cbTimeChange[t]()},CABLES.Timer.prototype.setDelay=function(t){this._delay=t,this._eventTimeChange()},CABLES.Timer.prototype.isPlaying=function(){return!this._paused},CABLES.Timer.prototype.update=function(){return this._paused?void 0:(this._currentTime=this._getTime(),this._currentTime)},CABLES.Timer.prototype.getMillis=function(){return 1e3*this.get()},CABLES.Timer.prototype.get=CABLES.Timer.prototype.getTime=function(){return this.overwriteTime>=0?this.overwriteTime-this._delay:this._currentTime-this._delay},CABLES.Timer.prototype.togglePlay=function(){this._paused?this.play():this.pause()},CABLES.Timer.prototype.setTime=function(t){0>t&&(t=0),this._timeStart=CABLES.internalNow(),this._timeOffset=t,this._currentTime=t,this._eventTimeChange()},CABLES.Timer.prototype.setOffset=function(t){this._currentTime+t<0?(this._timeStart=CABLES.internalNow(),this._timeOffset=0,this._currentTime=0):(this._timeOffset+=t,this._currentTime=this._lastTime+this._timeOffset),this._eventTimeChange()},CABLES.Timer.prototype.play=function(){this._timeStart=CABLES.internalNow(),this._paused=!1,this._eventPlayPause()},CABLES.Timer.prototype.pause=function(){this._timeOffset=this._currentTime,this._paused=!0,this._eventPlayPause()},CABLES.Timer.prototype.pauseEvents=function(t){this._eventsPaused=t},CABLES.Timer.prototype.onPlayPause=function(t){t&&"function"==typeof t&&this.cbPlayPause.push(t)},CABLES.Timer.prototype.onTimeChange=function(t){t&&"function"==typeof t&&this.cbTimeChange.push(t)},CABLES=CABLES||{},CABLES.WEBAUDIO=CABLES.WEBAUDIO||{},CABLES.WEBAUDIO.toneJsInitialized=!1,CABLES.WEBAUDIO.createAudioContext=function(t){return window.AudioContext=window.AudioContext||window.webkitAudioContext,window.AudioContext?(window.audioContext||(window.audioContext=new AudioContext),window.Tone&&!CABLES.WEBAUDIO.toneJsInitialized&&(Tone.setContext(window.audioContext),CABLES.WEBAUDIO.toneJsInitialized=!0),window.audioContext):void t.patch.config.onError("NO_WEBAUDIO","Web Audio is not supported in this browser.")},CABLES.WEBAUDIO.getAudioContext=function(){return window.audioContext},CABLES.WEBAUDIO.createAudioInPort=function(t,e,i,s){if(!t||!e||!i){var r="ERROR: createAudioInPort needs three parameters, op, portName and audioNode";throw t.log(r),new Error(r)}s||(s=0),t.webAudio=t.webAudio||{},t.webAudio.audioInPorts=t.webAudio.audioInPorts||[];var n=t.inObject(e);return n.webAudio={},n.webAudio.previousAudioInNode=null,n.webAudio.audioNode=i,t.webAudio.audioInPorts[e]=n,n.onChange=function(){var e=n.get();if(e)try{e.connect(n.webAudio.audioNode,0,s)}catch(i){throw t.log("Error: Failed to connect web audio node!",i),t.log("port.webAudio.audioNode",n.webAudio.audioNode),t.log("audioInNode: ",e),t.log("inputChannelIndex:",s),t.log("audioInNode.connect: ",e.connect),i}else if(n.webAudio.previousAudioInNode)try{n.webAudio.previousAudioInNode.disconnect(n.webAudio.audioNode,0,s)}catch(i){try{n.webAudio.previousAudioInNode.disconnect(n.webAudio.audioNode)}catch(i){throw t.log("Disconnecting audio node with in/out port index, as well as without in/out-port-index did not work ",i),i.printStackTrace&&i.printStackTrace(),i}}n.webAudio.previousAudioInNode=e},n},CABLES.WEBAUDIO.replaceNodeInPort=function(t,e,i){var s=t.webAudio.previousAudioInNode;if(s&&s.disconnect){try{s.disconnect(e)}catch(r){throw r.printStackTrace&&r.printStackTrace(),new Error("replaceNodeInPort: Could not disconnect old audio node. "+r.name+" "+r.message)}t.webAudio.audioNode=i;try{s.connect(i)}catch(r){throw r.printStackTrace&&r.printStackTrace(),new Error("replaceNodeInPort: Could not connect to new node. "+r.name+" "+r.message)}}},CABLES.WEBAUDIO.createAudioOutPort=function(t,e,i){if(!t||!e||!i){var s="ERROR: createAudioOutPort needs three parameters, op, portName and audioNode";throw t.log(s),new Error(s)}var r=t.outObject(e);return r.set(i),r},CABLES.WEBAUDIO.createAudioParamInPort=function(t,e,i,s,r){if(!t||!e||!i)return t.log("ERROR: createAudioParamInPort needs three parameters, op, portName and audioNode"),t&&t.name&&t.log("opname: ",t.name),t.log("portName",e),void t.log("audioNode: ",i);t.webAudio=t.webAudio||{},t.webAudio.audioInPorts=t.webAudio.audioInPorts||[];var n=t.inDynamic(e,[CABLES.OP_PORT_TYPE_VALUE,CABLES.OP_PORT_TYPE_OBJECT],s,r);return n.webAudio={},n.webAudio.previousAudioInNode=null,n.webAudio.audioNode=i,t.webAudio.audioInPorts[e]=n,n.onChange=function(){var e=n.get(),i=n.webAudio.audioNode,s=CABLES.WEBAUDIO.getAudioContext();if(void 0!=e)if("object"==typeof e&&e.connect){try{e.connect(i)}catch(r){throw t.log("Could not connect audio node: ",r),r.printStackTrace&&r.printStackTrace(),r}n.webAudio.previousAudioInNode=e}else{if(i._param&&i._param.minValue&&i._param.maxValue)if(e>=i._param.minValue&&e<=i._param.maxValue)try{i.setValueAtTime?i.setValueAtTime(e,s.currentTime):i.value=e}catch(r){throw t.log("Possible AudioParam problem with tone.js op: ",r),r.printStackTrace&&r.printStackTrace(),r}else t.log("Warning: The value for an audio parameter is out of range!");else if(i.minValue&&i.maxValue)if(e>=i.minValue&&e<=i.maxValue)try{i.setValueAtTime?i.setValueAtTime(e,s.currentTime):i.value=e}catch(r){throw t.log("AudioParam has minValue / maxValue defined, and value is in range, but setting the value failed! ",r),r.printStackTrace&&r.printStackTrace(),r}else t.log("Warning: The value for an audio parameter is out of range!");else try{i.setValueAtTime?i.setValueAtTime(e,s.currentTime):i.value=e}catch(r){throw t.log("Possible AudioParam problem (without minValue / maxValue): ",r),r.printStackTrace&&r.printStackTrace(),r}if(n.webAudio.previousAudioInNode&&n.webAudio.previousAudioInNode.disconnect){try{n.webAudio.previousAudioInNode.disconnect(i)}catch(r){throw t.log("Could not disconnect previous audio node: ",r),r}n.webAudio.previousAudioInNode=void 0}}else n.webAudio.previousAudioInNode},n},CABLES.WEBAUDIO.loadAudioFile=function(t,e,i,s){var r=CABLES.WEBAUDIO.createAudioContext(),n=t.loading.start("audio",e);CABLES.UI&&gui.jobs().start({id:"loadaudio"+n,title:" loading audio ("+e+")"});var o=new XMLHttpRequest;e&&(o.open("GET",e,!0),o.responseType="arraybuffer",o.onload=function(){t.loading.finished(n),CABLES.UI&&gui.jobs().finish("loadaudio"+n),r.decodeAudioData(o.response,i,s)},o.send())},CABLES.WEBAUDIO.isValidToneTime=function(t){try{{new Tone.Time(t)}}catch(e){return!1}return!0},CABLES.WEBAUDIO.isValidToneNote=function(t){try{Tone.Frequency(t)}catch(e){return!1}return!0};
//# sourceMappingURL=cables.min.js.map
"use strict";

var CABLES=CABLES||{};
CABLES.OPS=CABLES.OPS||{};

var Ops=Ops || {};
Ops.Gl=Ops.Gl || {};
Ops.Math=Ops.Math || {};
Ops.Trigger=Ops.Trigger || {};
Ops.Gl.Meshes=Ops.Gl.Meshes || {};
Ops.Gl.Shader=Ops.Gl.Shader || {};
Ops.Gl.Matrix=Ops.Gl.Matrix || {};
Ops.Gl.Textures=Ops.Gl.Textures || {};
Ops.Gl.Geometry=Ops.Gl.Geometry || {};
Ops.Gl.ShaderEffects=Ops.Gl.ShaderEffects || {};
Ops.Gl.TextureEffects=Ops.Gl.TextureEffects || {};
Ops.Gl.TextureEffects.Noise=Ops.Gl.TextureEffects.Noise || {};



// **************************************************************
// 
// Ops.Gl.MainLoop
// 
// **************************************************************

Ops.Gl.MainLoop = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments={};
const fpsLimit=op.inValue("FPS Limit",0);
const trigger=op.outTrigger("trigger");
const width=op.outValue("width");
const height=op.outValue("height");
const reduceLoadingFPS=op.inValueBool("Reduce FPS loading");
const clear=op.inValueBool("Clear",true);
const clearAlpha=op.inValueBool("ClearAlpha",true);
const fullscreen=op.inValueBool("Fullscreen Button",false);
const active=op.inValueBool("Active",true);
const hdpi=op.inValueBool("Hires Displays",false);

op.onAnimFrame=render;

hdpi.onChange=function()
{
    if(hdpi.get()) op.patch.cgl.pixelDensity=window.devicePixelRatio;
        else op.patch.cgl.pixelDensity=1;

    op.patch.cgl.updateSize();
    if(CABLES.UI) gui.setLayout();
};

active.onChange=function()
{
    op.patch.removeOnAnimFrame(op);

    if(active.get())
    {
        // op.patch.pause();
        // op.patch.removeOnAnimFrame(op);
        op.onAnimFrame=render;
        op.patch.addOnAnimFrame(op);
        console.log("adding again!");
    }


    // else op.patch.resume();

};


var cgl=op.patch.cgl;
var rframes=0;
var rframeStart=0;

if(!op.patch.cgl) op.uiAttr( { 'error': 'No webgl cgl context' } );

var identTranslate=vec3.create();
vec3.set(identTranslate, 0,0,0);
var identTranslateView=vec3.create();
vec3.set(identTranslateView, 0,0,-2);

fullscreen.onChange=updateFullscreenButton;
setTimeout(updateFullscreenButton,100);
var fsElement=null;

function updateFullscreenButton()
{
    function onMouseEnter()
    {
        if(fsElement)fsElement.style.display="block";
    }

    function onMouseLeave()
    {
        if(fsElement)fsElement.style.display="none";
    }

    op.patch.cgl.canvas.addEventListener('mouseleave', onMouseLeave);
    op.patch.cgl.canvas.addEventListener('mouseenter', onMouseEnter);

    if(fullscreen.get())
    {
        if(!fsElement)
        {
            fsElement = document.createElement('div');

            var container = op.patch.cgl.canvas.parentElement;
            if(container)container.appendChild(fsElement);

            fsElement.addEventListener('mouseenter', onMouseEnter);
            fsElement.addEventListener('click', function(e)
            {
                if(CABLES.UI && !e.shiftKey) gui.cycleRendererSize();
                    else
                    {
                        cgl.fullScreen();
                    }
            });
        }

        fsElement.style.padding="10px";
        fsElement.style.position="absolute";
        fsElement.style.right="5px";
        fsElement.style.top="5px";
        fsElement.style.width="20px";
        fsElement.style.height="20px";
        // fsElement.style.opacity="1.0";
        fsElement.style.cursor="pointer";
        fsElement.style['border-radius']="40px";
        fsElement.style.background="#444";
        fsElement.style["z-index"]="9999";
        fsElement.style.display="none";
        fsElement.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 490 490" style="width:20px;height:20px;" xml:space="preserve" width="512px" height="512px"><g><path d="M173.792,301.792L21.333,454.251v-80.917c0-5.891-4.776-10.667-10.667-10.667C4.776,362.667,0,367.442,0,373.333V480     c0,5.891,4.776,10.667,10.667,10.667h106.667c5.891,0,10.667-4.776,10.667-10.667s-4.776-10.667-10.667-10.667H36.416     l152.459-152.459c4.093-4.237,3.975-10.99-0.262-15.083C184.479,297.799,177.926,297.799,173.792,301.792z" fill="#FFFFFF"/><path d="M480,0H373.333c-5.891,0-10.667,4.776-10.667,10.667c0,5.891,4.776,10.667,10.667,10.667h80.917L301.792,173.792     c-4.237,4.093-4.354,10.845-0.262,15.083c4.093,4.237,10.845,4.354,15.083,0.262c0.089-0.086,0.176-0.173,0.262-0.262     L469.333,36.416v80.917c0,5.891,4.776,10.667,10.667,10.667s10.667-4.776,10.667-10.667V10.667C490.667,4.776,485.891,0,480,0z" fill="#FFFFFF"/><path d="M36.416,21.333h80.917c5.891,0,10.667-4.776,10.667-10.667C128,4.776,123.224,0,117.333,0H10.667     C4.776,0,0,4.776,0,10.667v106.667C0,123.224,4.776,128,10.667,128c5.891,0,10.667-4.776,10.667-10.667V36.416l152.459,152.459     c4.237,4.093,10.99,3.975,15.083-0.262c3.992-4.134,3.992-10.687,0-14.82L36.416,21.333z" fill="#FFFFFF"/><path d="M480,362.667c-5.891,0-10.667,4.776-10.667,10.667v80.917L316.875,301.792c-4.237-4.093-10.99-3.976-15.083,0.261     c-3.993,4.134-3.993,10.688,0,14.821l152.459,152.459h-80.917c-5.891,0-10.667,4.776-10.667,10.667s4.776,10.667,10.667,10.667     H480c5.891,0,10.667-4.776,10.667-10.667V373.333C490.667,367.442,485.891,362.667,480,362.667z" fill="#FFFFFF"/></g></svg>';
    }
    else
    {
        if(fsElement)
        {
            fsElement.style.display="none";
            fsElement.remove();
            fsElement=null;
        }
    }
}


fpsLimit.onChange=function()
{
    op.patch.config.fpsLimit=fpsLimit.get()||0;
};

op.onDelete=function()
{
    cgl.gl.clearColor(0,0,0,0);
    cgl.gl.clear(cgl.gl.COLOR_BUFFER_BIT | cgl.gl.DEPTH_BUFFER_BIT);


};


op.patch.loading.setOnFinishedLoading(function(cb)
{
    op.patch.config.fpsLimit=fpsLimit.get();
});



function render(time)
{
    if(!active.get())return;
    if(cgl.aborted || cgl.canvas.clientWidth===0 || cgl.canvas.clientHeight===0)return;

    if(op.patch.loading.getProgress()<1.0 && reduceLoadingFPS.get())
    {
        op.patch.config.fpsLimit=5;
    }

    if(cgl.canvasWidth==-1)
    {
        cgl.setCanvas(op.patch.config.glCanvasId);
        return;
    }

    if(cgl.canvasWidth!=width.get() || cgl.canvasHeight!=height.get())
    {
        // cgl.canvasWidth=cgl.canvas.clientWidth;
        width.set(cgl.canvasWidth);
        // cgl.canvasHeight=cgl.canvas.clientHeight;
        height.set(cgl.canvasHeight);
    }

    if(CABLES.now()-rframeStart>1000)
    {
        CGL.fpsReport=CGL.fpsReport||[];
        if(op.patch.loading.getProgress()>=1.0 && rframeStart!==0)CGL.fpsReport.push(rframes);
        rframes=0;
        rframeStart=CABLES.now();
    }
    CGL.MESH.lastShader=null;
    CGL.MESH.lastMesh=null;

    cgl.renderStart(cgl,identTranslate,identTranslateView);

    if(clear.get())
    {
        cgl.gl.clearColor(0,0,0,1);
        cgl.gl.clear(cgl.gl.COLOR_BUFFER_BIT | cgl.gl.DEPTH_BUFFER_BIT);
    }

    trigger.trigger();


    if(CGL.MESH.lastMesh)CGL.MESH.lastMesh.unBind();


    if(CGL.Texture.previewTexture)
    {
        if(!CGL.Texture.texturePreviewer) CGL.Texture.texturePreviewer=new CGL.Texture.texturePreview(cgl);
        CGL.Texture.texturePreviewer.render(CGL.Texture.previewTexture);
    }
    cgl.renderEnd(cgl);


    // cgl.printError('mainloop end');


    if(clearAlpha.get())
    {
        cgl.gl.clearColor(1, 1, 1, 1);
        cgl.gl.colorMask(false, false, false, true);
        cgl.gl.clear(cgl.gl.COLOR_BUFFER_BIT);
        cgl.gl.colorMask(true, true, true, true);
    }


    if(!cgl.frameStore.phong)cgl.frameStore.phong={};
    rframes++;
};


};

Ops.Gl.MainLoop.prototype = new CABLES.Op();
CABLES.OPS["b0472a1d-db16-4ba6-8787-f300fbdc77bb"]={f:Ops.Gl.MainLoop,objName:"Ops.Gl.MainLoop"};




// **************************************************************
// 
// Ops.Gl.Shader.BasicMaterial
// 
// **************************************************************

Ops.Gl.Shader.BasicMaterial = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments={shader_frag:"{{MODULES_HEAD}}\n\nIN vec2 texCoord;\n#ifdef HAS_TEXTURES\n    IN vec2 texCoordOrig;\n    #ifdef HAS_TEXTURE_DIFFUSE\n        UNI sampler2D tex;\n    #endif\n    #ifdef HAS_TEXTURE_OPACITY\n        UNI sampler2D texOpacity;\n   #endif\n#endif\nUNI float r;\nUNI float g;\nUNI float b;\nUNI float a;\n\nvoid main()\n{\n    {{MODULE_BEGIN_FRAG}}\n    vec4 col=vec4(r,g,b,a);\n\n    #ifdef HAS_TEXTURES\n        #ifdef HAS_TEXTURE_DIFFUSE\n\n           col=texture(tex,vec2(texCoord.x,(1.0-texCoord.y)));\n\n           #ifdef COLORIZE_TEXTURE\n               col.r*=r;\n               col.g*=g;\n               col.b*=b;\n           #endif\n        #endif\n\n        col.a*=a;\n        #ifdef HAS_TEXTURE_OPACITY\n            #ifdef TRANSFORMALPHATEXCOORDS\n                col.a*=texture(texOpacity,vec2(texCoordOrig.s,1.0-texCoordOrig.t)).g;\n            #endif\n            #ifndef TRANSFORMALPHATEXCOORDS\n                col.a*=texture(texOpacity,vec2(texCoord.s,1.0-texCoord.t)).g;\n            #endif\n       #endif\n\n    #endif\n\n    {{MODULE_COLOR}}\n\n    outColor = col;\n\n\n}\n",shader_vert:"{{MODULES_HEAD}}\n\nIN vec3 vPosition;\nIN vec3 attrVertNormal;\nIN vec2 attrTexCoord;\n\nOUT vec3 norm;\nOUT vec2 texCoord;\nOUT vec2 texCoordOrig;\n\nUNI mat4 projMatrix;\nUNI mat4 modelMatrix;\nUNI mat4 viewMatrix;\n\n#ifdef HAS_TEXTURES\n    #ifdef TEXTURE_REPEAT\n        UNI float diffuseRepeatX;\n        UNI float diffuseRepeatY;\n        UNI float texOffsetX;\n        UNI float texOffsetY;\n    #endif\n#endif\n\n\nvoid main()\n{\n    mat4 mMatrix=modelMatrix;\n    mat4 mvMatrix;\n    \n    texCoordOrig=attrTexCoord;\n    texCoord=attrTexCoord;\n    #ifdef HAS_TEXTURES\n        #ifdef TEXTURE_REPEAT\n            texCoord.x=texCoord.x*diffuseRepeatX+texOffsetX;\n            texCoord.y=texCoord.y*diffuseRepeatY+texOffsetY;\n        #endif\n    #endif\n\n    vec4 pos = vec4( vPosition, 1. );\n\n\n    #ifdef BILLBOARD\n       vec3 position=vPosition;\n       mvMatrix=viewMatrix*modelMatrix;\n\n       gl_Position = projMatrix * mvMatrix * vec4((\n           position.x * vec3(\n               mvMatrix[0][0],\n               mvMatrix[1][0],\n               mvMatrix[2][0] ) +\n           position.y * vec3(\n               mvMatrix[0][1],\n               mvMatrix[1][1],\n               mvMatrix[2][1]) ), 1.0);\n    #endif\n\n    {{MODULE_VERTEX_POSITION}}\n\n    #ifndef BILLBOARD\n        mvMatrix=viewMatrix * mMatrix;\n    #endif\n\n\n    #ifndef BILLBOARD\n        // gl_Position = projMatrix * viewMatrix * modelMatrix * pos;\n        gl_Position = projMatrix * mvMatrix * pos;\n    #endif\n}\n",};
const render=op.inTrigger("render"),
    trigger=op.outTrigger("trigger"),
    shaderOut=op.outObject("shader");

shaderOut.ignoreValueSerialize=true;
const cgl=op.patch.cgl;

var shader=new CGL.Shader(cgl,'BasicMaterial');
shader.setModules(['MODULE_VERTEX_POSITION','MODULE_COLOR','MODULE_BEGIN_FRAG']);
shader.bindTextures=bindTextures;
shader.setSource(attachments.shader_vert,attachments.shader_frag);
shaderOut.set(shader);

render.onTriggered=doRender;

var textureOpacity=null;
var textureOpacityUniform=null;


function bindTextures()
{
    if(diffuseTexture.get()) cgl.setTexture(0, diffuseTexture.get().tex);
    if(textureOpacity.get()) cgl.setTexture(1, textureOpacity.get().tex);
}

op.preRender=function()
{
    shader.bind();
    doRender();
};

function doRender()
{
    if(!shader)return;

    cgl.setShader(shader);
    shader.bindTextures();

    trigger.trigger();

    cgl.setPreviousShader();
}


{
    // rgba colors
    const r = op.inValueSlider("r", Math.random()),
        g = op.inValueSlider("g", Math.random()),
        b = op.inValueSlider("b", Math.random()),
        a = op.inValueSlider("a",1.0);
        r.setUiAttribs({ colorPick: true });



    a.uniform=new CGL.Uniform(shader,'f','a',a);
    b.uniform=new CGL.Uniform(shader,'f','b',b);
    r.uniform=new CGL.Uniform(shader,'f','r',r);
    g.uniform=new CGL.Uniform(shader,'f','g',g);

    op.setPortGroup('Color',[r,g,b,a]);

}

{
    // diffuse outTexture


    var diffuseTexture=op.inTexture("texture");
    var diffuseTextureUniform=null;
    shader.bindTextures=bindTextures;

    diffuseTexture.onChange=function()
    {
        if(diffuseTexture.get())
        {
            // if(diffuseTextureUniform!==null)return;
            // shader.addveUniform('texDiffuse');
            if(!shader.hasDefine('HAS_TEXTURE_DIFFUSE'))shader.define('HAS_TEXTURE_DIFFUSE');
            if(!diffuseTextureUniform)diffuseTextureUniform=new CGL.Uniform(shader,'t','texDiffuse',0);
            updateTexRepeat();
        }
        else
        {
            shader.removeUniform('texDiffuse');
            shader.removeDefine('HAS_TEXTURE_DIFFUSE');
            diffuseTextureUniform=null;
        }
    };
}

{
    // opacity texture
    textureOpacity=op.inTexture("textureOpacity");

    textureOpacity.onChange=function()
    {
        if(textureOpacity.get())
        {
            if(textureOpacityUniform!==null)return;
            shader.removeUniform('texOpacity');
            shader.define('HAS_TEXTURE_OPACITY');
            if(!textureOpacityUniform)textureOpacityUniform=new CGL.Uniform(shader,'t','texOpacity',1);
        }
        else
        {
            shader.removeUniform('texOpacity');
            shader.removeDefine('HAS_TEXTURE_OPACITY');
            textureOpacityUniform=null;
        }
    };

}

op.colorizeTexture=op.inValueBool("colorizeTexture");
op.colorizeTexture.set(false);
op.colorizeTexture.onChange=function()
{
    if(op.colorizeTexture.get()) shader.define('COLORIZE_TEXTURE');
        else shader.removeDefine('COLORIZE_TEXTURE');
};

op.doBillboard=op.inValueBool("billboard");
op.doBillboard.set(false);

op.doBillboard.onChange=function()
{
    if(op.doBillboard.get()) shader.define('BILLBOARD');
        else shader.removeDefine('BILLBOARD');
};

var texCoordAlpha=op.inValueBool("Opacity TexCoords Transform",false);

texCoordAlpha.onChange=function()
{
    if(texCoordAlpha.get()) shader.define('TRANSFORMALPHATEXCOORDS');
        else shader.removeDefine('TRANSFORMALPHATEXCOORDS');

};

var preMultipliedAlpha=op.inValueBool("preMultiplied alpha");

function updateTexRepeat()
{
    if(!diffuseRepeatXUniform)
    {
        diffuseRepeatXUniform=new CGL.Uniform(shader,'f','diffuseRepeatX',diffuseRepeatX);
        diffuseRepeatYUniform=new CGL.Uniform(shader,'f','diffuseRepeatY',diffuseRepeatY);
        diffuseOffsetXUniform=new CGL.Uniform(shader,'f','texOffsetX',diffuseOffsetX);
        diffuseOffsetYUniform=new CGL.Uniform(shader,'f','texOffsetY',diffuseOffsetY);
    }

    diffuseRepeatXUniform.setValue(diffuseRepeatX.get());
    diffuseRepeatYUniform.setValue(diffuseRepeatY.get());
    diffuseOffsetXUniform.setValue(diffuseOffsetX.get());
    diffuseOffsetYUniform.setValue(diffuseOffsetY.get());
}

{
    // texture coords

    var diffuseRepeatX=op.inValueFloat("diffuseRepeatX",1);
    var diffuseRepeatY=op.inValueFloat("diffuseRepeatY",1);
    var diffuseOffsetX=op.inValueFloat("Tex Offset X");
    var diffuseOffsetY=op.inValueFloat("Tex Offset Y");

    op.setPortGroup('Transform Texture',[diffuseRepeatX,diffuseRepeatY,diffuseOffsetX,diffuseOffsetY]);

    diffuseRepeatX.onChange=updateTexRepeat;
    diffuseRepeatY.onChange=updateTexRepeat;
    diffuseOffsetY.onChange=updateTexRepeat;
    diffuseOffsetX.onChange=updateTexRepeat;

    var diffuseRepeatXUniform=null;
    var diffuseRepeatYUniform=null;
    var diffuseOffsetXUniform=null;
    var diffuseOffsetYUniform=null;

    shader.define('TEXTURE_REPEAT');

    diffuseOffsetX.set(0);
    diffuseOffsetY.set(0);
    diffuseRepeatX.set(1);
    diffuseRepeatY.set(1);
}


updateTexRepeat();


};

Ops.Gl.Shader.BasicMaterial.prototype = new CABLES.Op();
CABLES.OPS["85ae5cfa-5eca-4dd8-8b30-850ac34f7cd5"]={f:Ops.Gl.Shader.BasicMaterial,objName:"Ops.Gl.Shader.BasicMaterial"};




// **************************************************************
// 
// Ops.Gl.Matrix.Scale
// 
// **************************************************************

Ops.Gl.Matrix.Scale = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments={};
const
    render=op.inTrigger("render"),
    scale=op.inValueFloat("scale",1.0),
    trigger=op.outTrigger("trigger");

const cgl=op.patch.cgl;
const vScale=vec3.create();

scale.onChange=scaleChanged;
scaleChanged();

render.onTriggered=function()
{
    cgl.pushModelMatrix();
    mat4.scale(cgl.mMatrix,cgl.mMatrix, vScale);
    trigger.trigger();
    cgl.popModelMatrix();
};

function scaleChanged()
{
    var s=scale.get();
    vec3.set(vScale, s,s,s);
}



};

Ops.Gl.Matrix.Scale.prototype = new CABLES.Op();
CABLES.OPS["50e7f565-0cdb-47ca-912b-87c04e2f00e3"]={f:Ops.Gl.Matrix.Scale,objName:"Ops.Gl.Matrix.Scale"};




// **************************************************************
// 
// Ops.Gl.Shader.PointMaterial
// 
// **************************************************************

Ops.Gl.Shader.PointMaterial = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments={shader_frag:"\n{{MODULES_HEAD}}\n\nIN vec2 texCoord;\n#ifdef HAS_TEXTURES\n\n   #ifdef HAS_TEXTURE_DIFFUSE\n       UNI sampler2D diffTex;\n   #endif\n   #ifdef HAS_TEXTURE_MASK\n       UNI sampler2D texMask;\n   #endif\n#endif\nUNI float r;\nUNI float g;\nUNI float b;\nUNI float a;\n\n#ifdef VERTEX_COLORS\n    IN vec3 vertexColor;\n#endif\n\nvoid main()\n{\n    {{MODULE_BEGIN_FRAG}}\n\n    vec4 col=vec4(r,g,b,a);\n\n    #ifdef HAS_TEXTURES\n\n        #ifdef HAS_TEXTURE_MASK\n            float mask=texture(texMask,vec2(gl_PointCoord.x,(1.0-gl_PointCoord.y))).r;\n        #endif\n\n        #ifdef HAS_TEXTURE_DIFFUSE\n\n            #ifdef LOOKUP_TEXTURE\n                col=texture(diffTex,texCoord);\n            #endif\n            #ifndef LOOKUP_TEXTURE\n                col=texture(diffTex,vec2(gl_PointCoord.x,(1.0-gl_PointCoord.y)));\n            #endif\n\n            #ifdef COLORIZE_TEXTURE\n              col.r*=r;\n              col.g*=g;\n              col.b*=b;\n            #endif\n        #endif\n        col.a*=a;\n    #endif\n\n    {{MODULE_COLOR}}\n\n    #ifdef MAKE_ROUND\n        if ((gl_PointCoord.x-0.5)*(gl_PointCoord.x-0.5) + (gl_PointCoord.y-0.5)*(gl_PointCoord.y-0.5) > 0.25) discard; //col.a=0.0;\n    #endif\n\n    #ifdef VERTEX_COLORS\n        col.rgb*=vertexColor;\n    #endif\n\n\n    #ifdef HAS_TEXTURE_MASK\n        col.a=mask;\n    #endif\n\n\n    // #ifdef RANDOMIZE_COLOR\n        // col.rgb*=fract(sin(dot(texCoord.xy ,vec2(12.9898,78.233))) * 43758.5453);\n    // #endif\n\n\n\n    outColor = col;\n}\n",shader_vert:"{{MODULES_HEAD}}\nIN vec3 vPosition;\nIN vec2 attrTexCoord;\nIN vec3 attrVertNormal;\n\n#ifdef VERTEX_COLORS\n    IN vec3 attrVertColor;\n    OUT vec3 vertexColor;\n#endif\n\nOUT vec3 norm;\n#ifdef HAS_TEXTURES\n    OUT vec2 texCoord;\n#endif\n\nUNI mat4 projMatrix;\nUNI mat4 modelMatrix;\nUNI mat4 viewMatrix;\n\nUNI float pointSize;\nUNI vec3 camPos;\n\nUNI float canvasWidth;\nUNI float canvasHeight;\nUNI float camDistMul;\n\nUNI float randomSize;\n\nIN float attrVertIndex;\n\n\nfloat rand(float n){return fract(sin(n) * 43758.5453123);}\n\n#define POINTMATERIAL\n\nvoid main()\n{\n    float psMul=sqrt(canvasWidth/canvasHeight)+0.00000000001;\n    float sizeMultiply=1.0;\n\n    #ifdef VERTEX_COLORS\n        vertexColor=attrVertColor;\n    #endif\n\n    #ifdef HAS_TEXTURES\n        texCoord=attrTexCoord;\n    #endif\n\n    mat4 mMatrix=modelMatrix;\n\n    vec4 pos = vec4( vPosition, 1. );\n\n    {{MODULE_VERTEX_POSITION}}\n\n    vec4 model=mMatrix * pos;\n\n    psMul+=rand(attrVertIndex)*randomSize;\n\n    psMul*=sizeMultiply;\n\n    #ifndef SCALE_BY_DISTANCE\n        gl_PointSize = pointSize * psMul;\n    #endif\n    #ifdef SCALE_BY_DISTANCE\n        float cameraDist = distance(model.xyz, camPos);\n        gl_PointSize = (pointSize / cameraDist) * psMul;\n    #endif\n\n    gl_Position = projMatrix * viewMatrix * model;\n}\n",};
const cgl=op.patch.cgl;

const
    render=op.inTrigger("render"),
    pointSize=op.inValueFloat("PointSize",3),
    randomSize=op.inValue("Random Size",3),
    makeRound=op.inValueBool("Round",true),
    doScale=op.inValueBool("Scale by Distance",false),
    r = op.inValueSlider("r", Math.random()),
    g = op.inValueSlider("g", Math.random()),
    b = op.inValueSlider("b", Math.random()),
    a = op.inValueSlider("a",1),
    preMultipliedAlpha=op.inValueBool("preMultiplied alpha"),
    vertCols=op.inBool("Vertex Colors",false),
    texture=op.inTexture("texture"),
    textureMask=op.inTexture("Texture Mask"),
    colorizeTexture=op.inValueBool("colorizeTexture",false),
    textureLookup=op.inValueBool("texture Lookup",false),
    trigger=op.outTrigger('trigger'),
    shaderOut=op.outObject("shader");

op.setPortGroup("Texture",[textureLookup,textureMask,texture,colorizeTexture]);
op.setPortGroup("Color",[r,g,b,a,preMultipliedAlpha,vertCols]);
op.setPortGroup("Size",[pointSize,randomSize,makeRound,doScale]);
r.setUiAttribs({ colorPick: true });

const shader=new CGL.Shader(cgl,'PointMaterial');
shader.setModules(['MODULE_VERTEX_POSITION','MODULE_COLOR','MODULE_BEGIN_FRAG']);
shader.define('MAKE_ROUND');

const
    uniPointSize=new CGL.Uniform(shader,'f','pointSize',pointSize),
    uniRandomSize=new CGL.Uniform(shader,'f','randomSize',randomSize),
    runiform=new CGL.Uniform(shader,'f','r',r),
    guniform=new CGL.Uniform(shader,'f','g',g),
    buniform=new CGL.Uniform(shader,'f','b',b),
    auniform=new CGL.Uniform(shader,'f','a',a),
    uniWidth=new CGL.Uniform(shader,'f','canvasWidth',cgl.canvasWidth),
    uniHeight=new CGL.Uniform(shader,'f','canvasHeight',cgl.canvasHeight);

shaderOut.set(shader);
shader.setSource(attachments.shader_vert,attachments.shader_frag);
shader.glPrimitive=cgl.gl.POINTS;
shader.bindTextures=bindTextures;
shaderOut.ignoreValueSerialize=true;

render.onTriggered=doRender;

var textureUniform=null;
var textureMaskUniform=null;

op.preRender=function()
{
    if(shader)shader.bind();
    doRender();
};

function bindTextures()
{
    if(texture.get()) cgl.setTexture(0,texture.get().tex);
    if(textureMask.get()) cgl.setTexture(1,textureMask.get().tex);
}

function doRender()
{
    uniWidth.setValue(cgl.canvasWidth);
    uniHeight.setValue(cgl.canvasHeight);

    cgl.setShader(shader);
    bindTextures();
    if(preMultipliedAlpha.get())cgl.gl.blendFunc(cgl.gl.ONE, cgl.gl.ONE_MINUS_SRC_ALPHA);

    trigger.trigger();
    if(preMultipliedAlpha.get())cgl.gl.blendFunc(cgl.gl.SRC_ALPHA,cgl.gl.ONE_MINUS_SRC_ALPHA);

    cgl.setPreviousShader();
}

doScale.onChange=function()
{
    shader.toggleDefine('SCALE_BY_DISTANCE',doScale.get());
};

makeRound.onChange=function()
{
    shader.toggleDefine('MAKE_ROUND',makeRound.get());
};

colorizeTexture.onChange=function()
{
    shader.toggleDefine('COLORIZE_TEXTURE',colorizeTexture.get());
};

textureLookup.onChange=function()
{
    shader.toggleDefine('LOOKUP_TEXTURE',textureLookup.get());
};

vertCols.onChange=function()
{
    shader.toggleDefine('VERTEX_COLORS',vertCols.get());
};

texture.onChange=function()
{
    if(texture.get())
    {
        if(textureUniform!==null)return;
        shader.removeUniform('diffTex');
        shader.define('HAS_TEXTURE_DIFFUSE');
        textureUniform=new CGL.Uniform(shader,'t','diffTex',0);
    }
    else
    {
        shader.removeUniform('diffTex');
        shader.removeDefine('HAS_TEXTURE_DIFFUSE');
        textureUniform=null;
    }
};

textureMask.onChange=function()
{
    if(textureMask.get())
    {
        if(textureMaskUniform!==null)return;
        shader.removeUniform('texMask');
        shader.define('HAS_TEXTURE_MASK');
        textureMaskUniform=new CGL.Uniform(shader,'t','texMask',1);
    }
    else
    {
        shader.removeUniform('texMask');
        shader.removeDefine('HAS_TEXTURE_MASK');
        textureMaskUniform=null;
    }
};



};

Ops.Gl.Shader.PointMaterial.prototype = new CABLES.Op();
CABLES.OPS["f86a4a07-00ee-4f68-8839-e02d51d1cd2f"]={f:Ops.Gl.Shader.PointMaterial,objName:"Ops.Gl.Shader.PointMaterial"};




// **************************************************************
// 
// Ops.Gl.Shader.WireframeMaterial
// 
// **************************************************************

Ops.Gl.Shader.WireframeMaterial = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments={wireframe_frag:"IN vec3 barycentric;\nUNI float width;\nUNI float opacity;\nUNI float r,g,b;\nUNI float fr,fg,fb;\nIN vec3 norm;\n\nfloat edgeFactor()\n{\n    vec3 d = fwidth(barycentric);\n    vec3 a3 = smoothstep(vec3(0.0), d*width*4.0, barycentric);\n    return min(min(a3.x, a3.y), a3.z);\n}\n\nvoid main()\n{\n    vec4 col;\n\n    #ifdef WIREFRAME_FILL\n        float v=opacity*(1.0-edgeFactor())*0.95;\n        vec3 wire = vec3(fr, fg, fb);\n        col.rgb = vec3(r, g, b);\n        col.rgb = mix(wire,col.rgb,v);\n        col.a = opacity;\n    #endif\n\n    #ifndef WIREFRAME_FILL\n       col = vec4(r,g,b, opacity*(1.0-edgeFactor())*0.95);\n    #endif\n    \n    // col=vec4(barycentric,1.0);\n    \n    outColor=col;\n\n}",wireframe_vert:"{{MODULES_HEAD}}\n\nIN vec3 vPosition;\nIN vec3 attrBarycentric;\nUNI mat4 projMatrix;\nUNI mat4 modelMatrix;\nUNI mat4 viewMatrix;\nOUT vec3 barycentric;\nIN vec2 attrTexCoord;\nOUT vec2 texCoord;\n\nIN vec3 attrVertNormal;\nOUT vec3 norm;\n\nvoid main()\n{\n    norm=attrVertNormal;\n    texCoord=attrTexCoord;\n    barycentric=attrBarycentric;\n    vec4 pos = vec4( vPosition, 1. );\n    {{MODULE_VERTEX_POSITION}}\n    gl_Position = projMatrix * viewMatrix * modelMatrix * pos;\n}\n",};
var cgl=op.patch.cgl;

var render=op.inTrigger("render");
var trigger=op.outTrigger('trigger');

var enableDepth=op.inValueBool("enable depth testing",true);

var fill=op.inValueBool("fill",true);

function setDefines()
{
    if(shader)
        if(fill.get()) shader.define('WIREFRAME_FILL');
            else shader.removeDefine('WIREFRAME_FILL');
}
fill.onChange=function()
{
    setDefines();
};

var w=op.inValueSlider("width",0.25);
w.onChange=function(){ uniformWidth.setValue(w.get()); };

var opacity=op.inValueSlider("opacity",1);
opacity.onChange=function(){ uniformOpacity.setValue(opacity.get()); };

if(cgl.glVersion==1 && !cgl.gl.getExtension('OES_standard_derivatives') )
{
    op.uiAttr( { 'error': 'no oes standart derivatives!' } );
}
else
{
    op.uiAttr( { 'error': null } );
}

var doRender=function()
{
    // if(true!==enableDepth.get()) cgl.gl.disable(cgl.gl.DEPTH_TEST);
        // else cgl.gl.enable(cgl.gl.DEPTH_TEST);
    cgl.pushDepthTest(enableDepth.get());

    cgl.setShader(shader);
    trigger.trigger();
    cgl.setPreviousShader();

    // if(true!==enableDepth.get()) cgl.gl.enable(cgl.gl.DEPTH_TEST);
    cgl.popDepthTest();

};

var shader=new CGL.Shader(cgl,'Wireframe Material');

if(cgl.glVersion>1)shader.glslVersion=300;
var uniformWidth=new CGL.Uniform(shader,'f','width',w.get());
var uniformOpacity=new CGL.Uniform(shader,'f','opacity',opacity.get());

if(cgl.glVersion==1)shader.enableExtension('OES_standard_derivatives');

shader.setSource(attachments.wireframe_vert||'',attachments.wireframe_frag||'');
shader.setModules(['MODULE_VERTEX_POSITION','MODULE_COLOR','MODULE_BEGIN_FRAG']);
shader.wireframe=true;
setDefines();

{
    // diffuse color

    var r=op.inValueSlider("diffuse r",Math.random());
    r.setUiAttribs({ colorPick: true });
    r.onChange=function()
    {
        if(!r.uniform) r.uniform=new CGL.Uniform(shader,'f','r',r.get());
        else r.uniform.setValue(r.get());
    };

    var g=op.inValueSlider("diffuse g",Math.random());
    g.onChange=function()
    {
        if(!g.uniform) g.uniform=new CGL.Uniform(shader,'f','g',g.get());
        else g.uniform.setValue(g.get());
    };

    var b=op.inValueSlider("diffuse b",Math.random());
    b.onChange=function()
    {
        if(!b.uniform) b.uniform=new CGL.Uniform(shader,'f','b',b.get());
        else b.uniform.setValue(b.get());
    };

}

{
    // diffuse color

    var fr=op.inValueSlider("Fill R",Math.random());
    fr.setUiAttribs({colorPick : true});
    fr.uniform=new CGL.Uniform(shader,'f','fr',fr);

    var fg=op.inValueSlider("Fill G",Math.random());
    fg.uniform=new CGL.Uniform(shader,'f','fg',fg);

    var fb=op.inValueSlider("Fill B",Math.random());
    fb.uniform=new CGL.Uniform(shader,'f','fb',fb);
}

render.onTriggered=doRender;

doRender();


};

Ops.Gl.Shader.WireframeMaterial.prototype = new CABLES.Op();
CABLES.OPS["e5d64a7d-b161-4f85-907e-e10a34691733"]={f:Ops.Gl.Shader.WireframeMaterial,objName:"Ops.Gl.Shader.WireframeMaterial"};




// **************************************************************
// 
// Ops.Gl.ShaderEffects.ExplodeDividedMesh
// 
// **************************************************************

Ops.Gl.ShaderEffects.ExplodeDividedMesh = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments={explode_divided_mesh_vert:"UNI float MOD_dist;\n\nUNI float MOD_x;\nUNI float MOD_y;\nUNI float MOD_z;\n\nUNI float MOD_posx;\nUNI float MOD_posy;\nUNI float MOD_posz;\nUNI float MOD_size;\n\nUNI float MOD_mulx;\nUNI float MOD_muly;\nUNI float MOD_mulz;\n\nfloat MOD_rand(vec2 co)\n{\n    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n\nvec4 MOD_deform(vec4 pos,vec3 normal,float index)\n{\n    index=floor(index/3.0);\n\n    vec4 p=abs(pos);\n    p.x+=MOD_x+0.01;\n    p.y+=MOD_y+0.01;\n    p.z+=MOD_z+0.01;\n    \n    vec4 pp=vec4(normal*(MOD_rand(vec2(index)) * MOD_dist-MOD_dist/2.0),1.0) * p;\n    \n    #ifdef ABSOLUTE\n        pp=abs(pp);\n    #endif\n\n    pp.x*=MOD_mulx;\n    pp.y*=MOD_muly;\n    pp.z*=MOD_mulz;\n    \n    \n    float MOD_falloff=0.2;\n    float distMul=distance(vec3(MOD_posx,MOD_posy,MOD_posz),pos.xyz);\n    distMul=1.0-smoothstep(MOD_falloff*MOD_size,MOD_size,distMul);\n\n    \n    \n    pos.xyz += distMul*pp.xyz;\n    \n    return pos;\n}\n",};

var cgl=op.patch.cgl;

op.render=op.inTrigger("render");
op.trigger=op.outTrigger("trigger");

var inDistance=op.inValue("Distance",1);
var inAbsolute=op.inValueBool("Absolute",false);

{
    var x=op.inValue("add x");
    var y=op.inValue("add y");
    var z=op.inValue("add z");

    var mulx=op.inValue("mul x",1);
    var muly=op.inValue("mul y",1);
    var mulz=op.inValue("mul z",1);

    var posx=op.inValue("x");
    var posy=op.inValue("y");
    var posz=op.inValue("z");
}

var inSize=op.inValue("Size",1);

var shader=null;

var srcHeadVert=attachments.explode_divided_mesh_vert;

var srcBodyVert=''
    .endl()+'pos=MOD_deform(pos,attrVertNormal,attrVertIndex);'
    .endl();

var moduleVert=null;

function removeModule()
{
    if(shader && moduleVert) shader.removeModule(moduleVert);
    shader=null;
}

var absoluteChanged=false;

inAbsolute.onChange=function()
{
    absoluteChanged=true;
};

op.render.onLinkChanged=removeModule;

op.render.onTriggered=function()
{
    if(!cgl.getShader())
    {
         op.trigger.trigger();
         return;
    }

    if(CABLES.UI && gui.patch().isCurrentOp(op))
        gui.setTransformGizmo(
            {
                posX:posx,
                posY:posy,
                posZ:posz
            });

    if(cgl.getShader()!=shader)
    {
        if(shader) removeModule();
        shader=cgl.getShader();

        moduleVert=shader.addModule(
            {
                title:op.objName,
                name:'MODULE_VERTEX_POSITION',
                srcHeadVert:srcHeadVert,
                srcBodyVert:srcBodyVert
            });

        inDistance.uniform=new CGL.Uniform(shader,'f',moduleVert.prefix+'dist',inDistance);

        x.uniform=new CGL.Uniform(shader,'f',moduleVert.prefix+'x',x);
        y.uniform=new CGL.Uniform(shader,'f',moduleVert.prefix+'y',y);
        z.uniform=new CGL.Uniform(shader,'f',moduleVert.prefix+'z',z);

        mulx.uniform=new CGL.Uniform(shader,'f',moduleVert.prefix+'mulx',mulx);
        muly.uniform=new CGL.Uniform(shader,'f',moduleVert.prefix+'muly',muly);
        mulz.uniform=new CGL.Uniform(shader,'f',moduleVert.prefix+'mulz',mulz);

        posx.uniform=new CGL.Uniform(shader,'f',moduleVert.prefix+'posx',posx);
        posy.uniform=new CGL.Uniform(shader,'f',moduleVert.prefix+'posy',posy);
        posz.uniform=new CGL.Uniform(shader,'f',moduleVert.prefix+'posz',posz);

        inSize.uniform=new CGL.Uniform(shader,'f',moduleVert.prefix+'size',inSize);
    }

    if(absoluteChanged)
    {
        absoluteChanged=false;
        if(inAbsolute.get()) shader.define("ABSOLUTE");
            else shader.removeDefine("ABSOLUTE");

    }

    if(!shader)return;

    op.trigger.trigger();
};















};

Ops.Gl.ShaderEffects.ExplodeDividedMesh.prototype = new CABLES.Op();
CABLES.OPS["b6d933cf-1ef8-41d6-95c1-593be0b4be90"]={f:Ops.Gl.ShaderEffects.ExplodeDividedMesh,objName:"Ops.Gl.ShaderEffects.ExplodeDividedMesh"};




// **************************************************************
// 
// Ops.Gl.RenderGeometry
// 
// **************************************************************

Ops.Gl.RenderGeometry = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments={};
const
    render=op.inTrigger('render'),
    geometry=op.inObject("Geometry"),
    updateAll=op.inValueBool('Update All',true),
    updateFaces=op.inValueBool('Update Face Indices',false),
    updateVerts=op.inValueBool('Update Vertices',false),
    updateTexcoords=op.inValueBool('Update Texcoords',false),
    vertNums=op.inValueBool('Vertex Numbers',true),
    trigger=op.outTrigger('trigger');

geometry.ignoreValueSerialize=true;

vertNums.onChange=
    geometry.onChange=update;

var mesh=null;

render.onTriggered=function()
{
    if(mesh) mesh.render(op.patch.cgl.getShader());
    trigger.trigger();
};


function update()
{
    var geom=geometry.get();
    if(geom)
    {
        if(mesh)mesh.dispose();
        if(!mesh)
        {
            mesh=new CGL.Mesh(op.patch.cgl,geom);
            mesh.addVertexNumbers=vertNums.get();
            mesh.setGeom(geom);
        }

        if(updateFaces.get() || updateAll.get())
            mesh.setVertexIndices(geom.verticesIndices);

        if(updateTexcoords.get() || updateAll.get())
            mesh.updateTexCoords(geom);

        if(updateVerts.get() || updateAll.get())
            mesh.updateVertices(geom);

        mesh.addVertexNumbers=vertNums.get();

        if(updateAll.get())
        {
            if(geom.hasOwnProperty('tangents') && geom.tangents && geom.tangents.length>0) mesh.setAttribute('attrTangent',geom.tangents,3);
            if(geom.hasOwnProperty('biTangents') && geom.biTangents && geom.biTangents.length>0) mesh.setAttribute('attrBiTangent',geom.biTangents,3);
        }
    }
    else
    {
        mesh=null;
    }
}



};

Ops.Gl.RenderGeometry.prototype = new CABLES.Op();
CABLES.OPS["40fa6f13-ee0e-4386-a86b-711e1fbcf1bc"]={f:Ops.Gl.RenderGeometry,objName:"Ops.Gl.RenderGeometry"};




// **************************************************************
// 
// Ops.Gl.Geometry.GeometryUnIndex
// 
// **************************************************************

Ops.Gl.Geometry.GeometryUnIndex = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments={};
const
    geometry=op.inObject("Geometry"),
    result=op.outObject("Result");

geometry.onChange=function()
{
    var geom=geometry.get();

    if(geom)
    {
        if(!geom.isIndexed())
        {
            result.set(geom);
            return;
        }

        var newGeom=geom.copy();
        newGeom.unIndex();
        result.set(newGeom);
    }
    else result.set(null);

};

};

Ops.Gl.Geometry.GeometryUnIndex.prototype = new CABLES.Op();
CABLES.OPS["b0b2430c-5206-4d1f-a0a6-bc5d79a29027"]={f:Ops.Gl.Geometry.GeometryUnIndex,objName:"Ops.Gl.Geometry.GeometryUnIndex"};




// **************************************************************
// 
// Ops.Gl.Meshes.CablesLogo
// 
// **************************************************************

Ops.Gl.Meshes.CablesLogo = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments={};
const render=op.inTrigger('render');
const scale=op.inValue("Scale",1);
const trigger=op.outTrigger('trigger');
const geomOut=op.outObject('Geometry');

const verts=[14.4166,163.754,0,18.4809,210.763,0,54.9491,204.346,0,42.7849,158.762,0,22.5453,257.772,0,67.1133,249.93,0,109.532,234.597,0,89.7001,191.777,0,69.8685,148.956,0,121.577,173.384,0,94.8187,134.563,0,148.336,212.204,0,185.332,186.28,0,150.011,149.481,0,116.915,116.086,0,174.431,120.383,0,135.438,94.0268,0,213.424,146.739,0,241.515,107.197,0,193.515,87.7918,0,149.882,69.1061,0,205.939,53.4095,0,159.743,42.0425,0,252.134,64.7765,0,259.112,21.5601,0,211.953,17.6223,0,164.793,13.6845,0,211.807,-19.1835,0,164.803,-15.1197,0,258.81,-23.2474,0,251.027,-67.8259,0,205.438,-55.6602,0,159.849,-43.4946,0,192.786,-90.46,0,150.007,-70.5651,0,235.565,-110.355,0,213.005,-149.583,0,174.326,-122.559,0,135.648,-95.5346,0,150.535,-150.933,0,117.14,-117.606,0,183.929,-184.259,0,149.313,-213.406,0,122.21,-174.782,0,95.1064,-136.159,0,90.1486,-193.307,0,70.1663,-150.569,0,110.131,-236.046,0,67.6335,-251.595,0,55.3747,-206.031,0,43.116,-160.467,0,18.9111,-212.474,0,14.7512,-165.479,0,23.071,-259.469,0,-22.1816,-259.545,0,-18.1173,-212.536,0,-14.0529,-165.527,0,-54.5854,-206.119,0,-42.4212,-160.536,0,-66.7496,-251.703,0,-108.973,-236.672,0,-89.239,-193.701,0,-69.5049,-150.73,0,-120.824,-175.76,0,-94.4551,-136.336,0,-147.193,-215.185,0,-183.41,-190.469,0,-148.964,-152.339,0,-116.552,-117.859,0,-173.286,-123.476,0,-135.074,-95.8,0,-211.498,-151.152,0,-239.586,-111.835,0,-192.467,-90.79,0,-149.518,-70.8793,0,-205.184,-55.8988,0,-159.38,-43.8157,0,-250.988,-67.9818,0,-258.553,-23.6913,0,-211.491,-19.5745,0,-164.429,-15.4577,0,-211.443,17.4104,0,-164.439,13.3465,0,-258.446,21.4742,0,-250.664,66.0527,0,-205.075,53.8871,0,-159.486,41.7214,0,-192.423,88.6869,0,-149.644,68.7919,0,-235.201,108.582,0,-212.641,147.81,0,-173.962,120.786,0,-135.284,93.7614,0,-150.171,149.16,0,-116.777,115.833,0,-183.566,182.486,0,-148.949,211.632,0,-121.846,173.009,0,-94.7427,134.385,0,-89.7849,191.534,0,-69.8026,148.796,0,-109.767,234.272,0,-67.2698,249.822,0,-55.011,204.258,0,-42.7523,158.694,0,-18.5474,210.7,0,-14.3875,163.705,0,-22.7074,257.695,0,22.5453,257.772,0,18.4809,210.763,0,14.4166,163.754,0,256.822,264.163,0,296.476,236.296,0,276.952,212.586,0,276.952,212.586,0,240.805,244.919,0,256.822,264.163,0,336.13,208.429,0,313.099,180.253,0,276.952,212.586,0,276.952,212.586,0,296.476,236.296,0,336.13,208.429,0,288.309,152.686,0,255.898,189.327,0,313.099,180.253,0,223.486,225.968,0,240.805,244.919,0,285.635,306.513,0,328.243,283.496,0,313.087,259.335,0,313.087,259.335,0,271.643,284.706,0,285.635,306.513,0,370.852,260.478,0,354.53,233.964,0,313.087,259.335,0,313.087,259.335,0,328.243,283.496,0,370.852,260.478,0,336.13,208.429,0,296.476,236.296,0,354.53,233.964,0,336.13,208.429,0,256.822,264.163,0,271.643,284.706,0,296.476,236.296,0,256.822,264.163,0,311.134,352.806,0,357.268,338.992,0,343.405,310.57,0,343.405,310.57,0,299.162,329.55,0,311.134,352.806,0,403.403,325.177,0,387.649,291.589,0,343.405,310.57,0,343.405,310.57,0,357.268,338.992,0,403.403,325.177,0,370.852,260.478,0,328.243,283.496,0,387.649,291.589,0,370.852,260.478,0,285.635,306.513,0,299.162,329.55,0,328.243,283.496,0,285.635,306.513,0,328.173,398.813,0,377.479,395.259,0,368.527,367.195,0,368.527,367.195,0,320.46,375.27,0,328.173,398.813,0,426.784,391.705,0,416.594,359.12,0,368.527,367.195,0,368.527,367.195,0,377.479,395.259,0,426.784,391.705,0,403.403,325.177,0,357.268,338.992,0,416.594,359.12,0,403.403,325.177,0,311.134,352.806,0,320.46,375.27,0,357.268,338.992,0,311.134,352.806,0,341.169,453.101,0,389.523,451.215,0,384.421,423.263,0,384.421,423.263,0,335.304,425.309,0,341.169,453.101,0,437.877,449.328,0,433.538,421.218,0,384.421,423.263,0,384.421,423.263,0,389.523,451.215,0,437.877,449.328,0,426.784,391.705,0,377.479,395.259,0,433.538,421.218,0,426.784,391.705,0,328.173,398.813,0,335.304,425.309,0,377.479,395.259,0,328.173,398.813,0,347.768,502.233,0,394.824,501.411,0,392.954,479.119,0,392.954,479.119,0,345.086,480.533,0,347.768,502.233,0,441.88,500.589,0,440.822,477.705,0,392.954,479.119,0,392.954,479.119,0,394.824,501.411,0,441.88,500.589,0,437.877,449.328,0,389.523,451.215,0,440.822,477.705,0,437.877,449.328,0,341.169,453.101,0,345.086,480.533,0,389.523,451.215,0,341.169,453.101,0,352.384,517.252,0,394.985,517.267,0,395.241,512.525,0,395.241,512.525,0,349.927,512.83,0,352.384,517.252,0,437.585,517.282,0,440.555,512.22,0,395.241,512.525,0,395.241,512.525,0,394.985,517.267,0,437.585,517.282,0,441.88,500.589,0,394.824,501.411,0,440.555,512.22,0,441.88,500.589,0,347.768,502.233,0,349.927,512.83,0,394.824,501.411,0,347.768,502.233,0,360.098,522.975,0,394.737,522.834,0,394.834,520.442,0,394.834,520.442,0,355.961,520.425,0,360.098,522.975,0,429.375,522.693,0,433.707,520.459,0,394.834,520.442,0,394.834,520.442,0,394.737,522.834,0,429.375,522.693,0,437.585,517.282,0,394.985,517.267,0,433.707,520.459,0,437.585,517.282,0,355.961,520.425,0,394.834,520.442,0,394.985,517.267,0,352.384,517.252,0,185.332,186.28,0,204.761,206.303,0,234.697,167.64,0,213.424,146.739,0,264.633,128.977,0,241.515,107.197,0,-255.099,-268.612,0,-294.753,-240.745,0,-275.229,-217.035,0,-275.229,-217.035,0,-239.082,-249.368,0,-255.099,-268.612,0,-334.408,-212.878,0,-311.376,-184.702,0,-275.229,-217.035,0,-275.229,-217.035,0,-294.753,-240.745,0,-334.408,-212.878,0,-286.56,-157.158,0,-254.149,-193.771,0,-311.376,-184.702,0,-221.739,-230.385,0,-239.082,-249.368,0,-283.912,-310.962,0,-326.521,-287.944,0,-311.364,-263.784,0,-311.364,-263.784,0,-269.92,-289.154,0,-283.912,-310.962,0,-369.129,-264.927,0,-352.807,-238.413,0,-311.364,-263.784,0,-311.364,-263.784,0,-326.521,-287.944,0,-369.129,-264.927,0,-334.408,-212.878,0,-294.753,-240.745,0,-352.807,-238.413,0,-334.408,-212.878,0,-255.099,-268.612,0,-269.92,-289.154,0,-294.753,-240.745,0,-255.099,-268.612,0,-309.411,-357.255,0,-355.546,-343.44,0,-341.683,-315.018,0,-341.683,-315.018,0,-297.439,-333.999,0,-309.411,-357.255,0,-401.681,-329.626,0,-385.927,-296.038,0,-341.683,-315.018,0,-341.683,-315.018,0,-355.546,-343.44,0,-401.681,-329.626,0,-369.129,-264.927,0,-326.521,-287.944,0,-385.927,-296.038,0,-369.129,-264.927,0,-283.912,-310.962,0,-297.439,-333.999,0,-326.521,-287.944,0,-283.912,-310.962,0,-326.45,-403.262,0,-375.756,-399.708,0,-366.804,-371.644,0,-366.804,-371.644,0,-318.737,-379.718,0,-326.45,-403.262,0,-425.061,-396.154,0,-414.871,-363.569,0,-366.804,-371.644,0,-366.804,-371.644,0,-375.756,-399.708,0,-425.061,-396.154,0,-401.681,-329.626,0,-355.546,-343.44,0,-414.871,-363.569,0,-401.681,-329.626,0,-309.411,-357.255,0,-318.737,-379.718,0,-355.546,-343.44,0,-309.411,-357.255,0,-339.446,-457.55,0,-387.8,-455.663,0,-382.698,-427.712,0,-382.698,-427.712,0,-333.581,-429.758,0,-339.446,-457.55,0,-436.154,-453.776,0,-431.815,-425.666,0,-382.698,-427.712,0,-382.698,-427.712,0,-387.8,-455.663,0,-436.154,-453.776,0,-425.061,-396.154,0,-375.756,-399.708,0,-431.815,-425.666,0,-425.061,-396.154,0,-326.45,-403.262,0,-333.581,-429.758,0,-375.756,-399.708,0,-326.45,-403.262,0,-346.045,-506.682,0,-393.101,-505.86,0,-391.232,-483.568,0,-391.232,-483.568,0,-343.363,-484.982,0,-346.045,-506.682,0,-440.157,-505.037,0,-439.1,-482.153,0,-391.232,-483.568,0,-391.232,-483.568,0,-393.101,-505.86,0,-440.157,-505.037,0,-436.154,-453.776,0,-387.8,-455.663,0,-439.1,-482.153,0,-436.154,-453.776,0,-339.446,-457.55,0,-343.363,-484.982,0,-387.8,-455.663,0,-339.446,-457.55,0,-350.661,-521.701,0,-393.262,-521.716,0,-393.518,-516.974,0,-393.518,-516.974,0,-348.204,-517.279,0,-350.661,-521.701,0,-435.862,-521.731,0,-438.832,-516.669,0,-393.518,-516.974,0,-393.518,-516.974,0,-393.262,-521.716,0,-435.862,-521.731,0,-440.157,-505.037,0,-393.101,-505.86,0,-438.832,-516.669,0,-440.157,-505.037,0,-346.045,-506.682,0,-348.204,-517.279,0,-393.101,-505.86,0,-346.045,-506.682,0,-358.375,-527.424,0,-393.014,-527.283,0,-393.111,-524.891,0,-393.111,-524.891,0,-354.238,-524.874,0,-358.375,-527.424,0,-427.653,-527.142,0,-431.985,-524.908,0,-393.111,-524.891,0,-393.111,-524.891,0,-393.014,-527.283,0,-427.653,-527.142,0,-435.862,-521.731,0,-393.262,-521.716,0,-431.985,-524.908,0,-435.862,-521.731,0,-354.238,-524.874,0,-393.111,-524.891,0,-393.262,-521.716,0,-350.661,-521.701,0,-183.41,-190.469,0,-202.939,-210.621,0,-232.873,-172.071,0,-211.498,-151.152,0,-262.807,-133.52,0,-239.586,-111.835,0];
const indices=[0,1,2,2,3,0,2,1,4,4,5,2,6,7,2,2,5,6,8,3,2,2,7,8,6,11,9,9,7,6,8,7,9,9,10,8,12,13,9,9,11,12,14,10,9,9,13,14,12,17,15,15,13,12,14,13,15,15,16,14,18,19,15,15,17,18,20,16,15,15,19,20,18,23,21,21,19,18,20,19,21,21,22,20,24,25,21,21,23,24,26,22,21,21,25,26,24,29,27,27,25,24,26,25,27,27,28,26,30,31,27,27,29,30,32,28,27,27,31,32,30,35,33,33,31,30,32,31,33,33,34,32,36,37,33,33,35,36,38,34,33,33,37,38,36,41,39,39,37,36,38,37,39,39,40,38,42,43,39,39,41,42,44,40,39,39,43,44,42,47,45,45,43,42,44,43,45,45,46,44,48,49,45,45,47,48,50,46,45,45,49,50,48,53,51,51,49,48,50,49,51,51,52,50,54,55,51,51,53,54,56,52,51,51,55,56,54,59,57,57,55,54,56,55,57,57,58,56,60,61,57,57,59,60,62,58,57,57,61,62,60,65,63,63,61,60,62,61,63,63,64,62,66,67,63,63,65,66,68,64,63,63,67,68,66,71,69,69,67,66,68,67,69,69,70,68,72,73,69,69,71,72,74,70,69,69,73,74,72,77,75,75,73,72,74,73,75,75,76,74,78,79,75,75,77,78,80,76,75,75,79,80,78,83,81,81,79,78,80,79,81,81,82,80,84,85,81,81,83,84,86,82,81,81,85,86,84,89,87,87,85,84,86,85,87,87,88,86,90,91,87,87,89,90,92,88,87,87,91,92,90,95,93,93,91,90,92,91,93,93,94,92,96,97,93,93,95,96,98,94,93,93,97,98,96,101,99,99,97,96,98,97,99,99,100,98,102,103,99,99,101,102,104,100,99,99,103,104,102,107,105,105,103,102,104,103,105,105,106,104,108,109,105,105,107,108,110,106,105,105,109,110,111,112,113,123,124,113,113,125,123,126,127,113,113,124,126,123,272,270,270,124,123,126,124,270,270,269,126,268,269,270,270,271,268,273,271,270,270,272,273,114,115,116,117,118,119,120,121,122,128,129,130,130,142,143,131,132,133,140,141,131,134,135,136,136,146,147,137,138,139,144,145,137,148,149,150,150,162,163,151,152,153,160,161,151,154,155,156,156,166,167,157,158,159,164,165,157,168,169,170,170,182,183,171,172,173,180,181,171,174,175,176,176,186,187,177,178,179,184,185,177,188,189,190,190,202,203,191,192,193,200,201,191,194,195,196,196,206,207,197,198,199,204,205,197,208,209,210,210,222,223,211,212,213,220,221,211,214,215,216,216,226,227,217,218,219,224,225,217,228,229,230,228,264,250,230,242,243,248,249,250,250,262,263,231,232,233,240,241,231,234,235,236,236,246,247,237,238,239,244,245,237,251,252,253,260,261,251,254,255,256,257,258,259,265,266,267,274,275,276,286,287,276,276,288,286,289,290,276,276,287,289,286,435,433,433,287,286,289,287,433,433,432,289,431,432,433,433,434,431,436,434,433,433,435,436,277,278,279,280,281,282,283,284,285,291,292,293,293,305,306,294,295,296,303,304,294,297,298,299,299,309,310,300,301,302,307,308,300,311,312,313,313,325,326,314,315,316,323,324,314,317,318,319,319,329,330,320,321,322,327,328,320,331,332,333,333,345,346,334,335,336,343,344,334,337,338,339,339,349,350,340,341,342,347,348,340,351,352,353,353,365,366,354,355,356,363,364,354,357,358,359,359,369,370,360,361,362,367,368,360,371,372,373,373,385,386,374,375,376,383,384,374,377,378,379,379,389,390,380,381,382,387,388,380,391,392,393,391,427,413,393,405,406,411,412,413,413,425,426,394,395,396,403,404,394,397,398,399,399,409,410,400,401,402,407,408,400,414,415,416,423,424,414,417,418,419,420,421,422,428,429,430];

var geom=new CGL.Geometry();
var mesh=null;
scale.onChange=build;
build();

function build()
{
    var sc=scale.get();
    var vertices=verts.slice(0);

    for(var i=0;i<vertices.length;i++) vertices[i]=vertices[i]/1000*sc;

    geom.vertices=vertices;
    geom.mapTexCoords2d();
    geom.verticesIndices=indices;
    geom.tangents=vertices.map(function(v,i){return i%3==0?1:0});
    geom.biTangents=vertices.map(function(v,i){return i%3==1?1:0});
    geom.vertexNormals=vertices.map(function(v,i){return i%3==2?1:0});
    geomOut.set(null);
    geomOut.set(geom);

    if(!mesh)mesh=new CGL.Mesh(op.patch.cgl,geom);
        else mesh.setGeom(geom);
}

render.onTriggered=function()
{
    mesh.render(op.patch.cgl.getShader());
    trigger.trigger();
};



};

Ops.Gl.Meshes.CablesLogo.prototype = new CABLES.Op();
CABLES.OPS["d53b5d7b-99b5-420e-b5a1-2d7c2c1f1ebb"]={f:Ops.Gl.Meshes.CablesLogo,objName:"Ops.Gl.Meshes.CablesLogo"};




// **************************************************************
// 
// Ops.Gl.Shader.MatCapMaterialNew
// 
// **************************************************************

Ops.Gl.Shader.MatCapMaterialNew = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments={matcap_frag:"\n{{MODULES_HEAD}}\n\nIN vec3 norm;\nIN vec2 texCoord;\nUNI sampler2D tex;\nIN vec2 vNorm;\nUNI mat4 viewMatrix;\n\nUNI float repeatX;\nUNI float repeatY;\nUNI float opacity;\n\nUNI float r;\nUNI float g;\nUNI float b;\n\nIN vec3 e;\n\n\n\n#ifdef HAS_DIFFUSE_TEXTURE\n   UNI sampler2D texDiffuse;\n#endif\n\n#ifdef USE_SPECULAR_TEXTURE\n   UNI sampler2D texSpec;\n   UNI sampler2D texSpecMatCap;\n#endif\n\n#ifdef HAS_AO_TEXTURE\n    UNI sampler2D texAo;\n    UNI float aoIntensity;\n#endif\n\n#ifdef HAS_NORMAL_TEXTURE\n   IN vec3 vBiTangent;\n   IN vec3 vTangent;\n\n   UNI sampler2D texNormal;\n   UNI mat4 normalMatrix;\n\n   vec2 vNormt;\n#endif\n\n#ifdef CALC_SSNORMALS\n    // from https://www.enkisoftware.com/devlogpost-20150131-1-Normal_generation_in_the_pixel_shader\n    IN vec3 eye_relative_pos;\n#endif\n\n\nconst float normalScale=0.4;\n\nconst vec2 invAtan = vec2(0.1591, 0.3183);\nvec2 sampleSphericalMap(vec3 direction)\n{\n    vec2 uv = vec2(atan(direction.z, direction.x), asin(direction.y));\n    uv *= invAtan;\n    uv += 0.5;\n    return uv;\n}\n\n\nvoid main()\n{\n    vec2 vnOrig=vNorm;\n    vec2 vn=vNorm;\n\n\n\n    #ifdef HAS_TEXTURES\n        vec2 texCoords=texCoord;\n        {{MODULE_BEGIN_FRAG}}\n    #endif\n\n    #ifdef CALC_SSNORMALS\n    \tvec3 dFdxPos = dFdx( eye_relative_pos );\n    \tvec3 dFdyPos = dFdy( eye_relative_pos );\n    \tvec3 ssn = normalize( cross(dFdxPos,dFdyPos ));\n\n        vec3 rr = reflect( e, ssn );\n        float ssm = 2. * sqrt(\n            pow(rr.x, 2.0)+\n            pow(rr.y, 2.0)+\n            pow(rr.z + 1.0, 2.0)\n        );\n\n\n        vn = (rr.xy / ssm + 0.5);\n\n        vn.t=clamp(vn.t, 0.0, 1.0);\n        vn.s=clamp(vn.s, 0.0, 1.0);\n\n        // float dst = dot(abs(coord-center), vec2(1.0));\n        // float aaf = fwidth(dst);\n        // float alpha = smoothstep(radius - aaf, radius, dst);\n\n    #endif\n\n   #ifdef HAS_NORMAL_TEXTURE\n        vec3 tnorm=texture( texNormal, vec2(texCoord.x*repeatX,texCoord.y*repeatY) ).xyz * 2.0 - 1.0;\n\n        tnorm = normalize(tnorm*normalScale);\n\n        vec3 tangent;\n        vec3 binormal;\n\n        #ifdef CALC_TANGENT\n            vec3 c1 = cross(norm, vec3(0.0, 0.0, 1.0));\n//            vec3 c2 = cross(norm, vec3(0.0, 1.0, 0.0));\n//            if(length(c1)>length(c2)) tangent = c2;\n//                else tangent = c1;\n            tangent = c1;\n            tangent = normalize(tangent);\n            binormal = cross(norm, tangent);\n            binormal = normalize(binormal);\n        #endif\n\n        #ifndef CALC_TANGENT\n            tangent=normalize(vTangent);\n//            tangent.y*=-13.0;\n//            binormal=vBiTangent*norm;\n//            binormal.z*=-1.0;\n//            binormal=normalize(binormal);\n            binormal=normalize( cross( normalize(norm), normalize(vBiTangent) ));\n        // vBinormal = normalize( cross( vNormal, vTangent ) * tangent.w );\n\n        #endif\n\n        tnorm=normalize(tangent*tnorm.x + binormal*tnorm.y + norm*tnorm.z);\n\n        // vec3 n = normalize( mat3(normalMatrix) * (norm+tnorm*normalScale) );\n        vec3 n = normalize( mat3(normalMatrix) * (norm+tnorm*normalScale) );\n\n        vec3 re = reflect( e, n );\n        float m = 2. * sqrt(\n            pow(re.x, 2.0)+\n            pow(re.y, 2.0)+\n            pow(re.z + 1.0, 2.0)\n        );\n\n        vn = (re.xy / m + 0.5);\n\n    #endif\n\n    vn.t=clamp(vn.t, 0.0, 1.0);\n    vn.s=clamp(vn.s, 0.0, 1.0);\n\n\n    vec4 col = texture( tex, vn );\n\n    #ifdef HAS_DIFFUSE_TEXTURE\n        col = col*texture( texDiffuse, vec2(texCoords.x*repeatX,texCoords.y*repeatY));\n    #endif\n\n    col.r*=r;\n    col.g*=g;\n    col.b*=b;\n\n\n    #ifdef HAS_AO_TEXTURE\n        col = col*\n            mix(\n                vec4(1.0,1.0,1.0,1.0),\n                texture( texAo, vec2(texCoords.x*repeatX,texCoords.y*repeatY)),\n                aoIntensity\n                );\n    #endif\n\n    #ifdef USE_SPECULAR_TEXTURE\n        vec4 spec = texture( texSpecMatCap, vn );\n        spec*= texture( texSpec, vec2(texCoords.x*repeatX,texCoords.y*repeatY) );\n        col+=spec;\n    #endif\n\n    col.a*=opacity;\n\n    {{MODULE_COLOR}}\n\n    outColor = col;\n\n}",matcap_vert:"\nIN vec3 vPosition;\nIN vec2 attrTexCoord;\nIN vec3 attrVertNormal;\nIN float attrVertIndex;\n   IN vec3 attrTangent;\n   IN vec3 attrBiTangent;\n\n#ifdef HAS_NORMAL_TEXTURE\n\n   OUT vec3 vBiTangent;\n   OUT vec3 vTangent;\n#endif\n\nOUT vec2 texCoord;\nOUT vec3 norm;\nUNI mat4 projMatrix;\nUNI mat4 modelMatrix;\nUNI mat4 viewMatrix;\n\nOUT vec2 vNorm;\nOUT vec3 e;\n\n#ifndef INSTANCING\n    UNI mat4 normalMatrix;\n#endif\n\n\n{{MODULES_HEAD}}\n\n#ifdef CALC_SSNORMALS\n    // from https://www.enkisoftware.com/devlogpost-20150131-1-Normal_generation_in_the_pixel_shader\n    OUT vec3 eye_relative_pos;\n    UNI vec3 camPos;\n#endif\n\n\n\nvoid main()\n{\n    texCoord=attrTexCoord;\n    norm=attrVertNormal;\n    mat4 mMatrix=modelMatrix;\n    mat4 mvMatrix;\n    vec3 tangent=attrTangent;\n    vec3 bitangent=attrBiTangent;\n\n    #ifdef HAS_NORMAL_TEXTURE\n        vTangent=attrTangent;\n        vBiTangent=attrBiTangent;\n    #endif\n\n    vec4 pos = vec4( vPosition, 1. );\n\n    {{MODULE_VERTEX_POSITION}}\n\n\n    mvMatrix= viewMatrix * mMatrix;\n\n    #ifdef INSTANCING\n        mat4 normalMatrix=mvMatrix;//inverse(transpose(mvMatrix));\n    #endif\n\n\n    mat3 wmMatrix=mat3(mMatrix);\n    // mat3 newNormalMatrix=mat3(\n    //     normalize( wmMatrix*tangent ),\n    //     normalize( wmMatrix*bitangent ),\n    //     normalize( wmMatrix*norm )\n    // );\n\n    e = normalize( vec3( mvMatrix * pos ) );\n    vec3 n = normalize( mat3(normalMatrix) * norm );\n\n\n    // mat3 nMatrix = transpose(inverse(mat3(mMatrix)));\n    // vec3 n = normalize( mat3(nMatrix) * norm );\n    // norm=n;\n\n    vec3 r = reflect( e, n );\n\n\n\n\n    float m = 2. * sqrt(\n        pow(r.x, 2.0)+\n        pow(r.y, 2.0)+\n        pow(r.z + 1.0, 2.0)\n    );\n    vNorm = r.xy / m + 0.5;\n\n    #ifdef DO_PROJECT_COORDS_XY\n       texCoord=(projMatrix * mvMatrix*pos).xy*0.1;\n    #endif\n\n    #ifdef DO_PROJECT_COORDS_YZ\n       texCoord=(projMatrix * mvMatrix*pos).yz*0.1;\n    #endif\n\n    #ifdef DO_PROJECT_COORDS_XZ\n        texCoord=(projMatrix * mvMatrix*pos).xz*0.1;\n    #endif\n\n    #ifdef CALC_SSNORMALS\n        eye_relative_pos = (mvMatrix * pos ).xyz - camPos;\n    #endif\n\n\n\n   gl_Position = projMatrix * mvMatrix * pos;\n\n}",};
const render=op.inTrigger("render");
const textureMatcap=op.inTexture('MatCap');
const textureDiffuse=op.inTexture('Diffuse');
const textureNormal=op.inTexture('Normal');
const textureSpec=op.inTexture('Specular');
const textureSpecMatCap=op.inTexture('Specular MatCap');
const textureAo=op.inTexture('AO Texture');
const r=op.inValueSlider('r',1);
const g=op.inValueSlider('g',1);
const b=op.inValueSlider('b',1);
const pOpacity=op.inValueSlider("Opacity",1);
const aoIntensity=op.inValueSlider("AO Intensity",1.0);
const repeatX=op.inValue("Repeat X",1);
const repeatY=op.inValue("Repeat Y",1);
const calcTangents = op.inValueBool("calc normal tangents",true);
const projectCoords=op.inValueSelect('projectCoords',['no','xy','yz','xz'],'no');
const ssNormals=op.inValueBool("Screen Space Normals");
const next=op.outTrigger("trigger");
const shaderOut=op.outObject("Shader");

r.setUiAttribs({colorPick:true});
op.setPortGroup("Texture maps",[textureDiffuse,textureNormal,textureSpec,textureSpecMatCap,textureAo,]);
op.setPortGroup("Color",[r,g,b,pOpacity]);

const cgl=op.patch.cgl;
const shader=new CGL.Shader(cgl,'MatCapMaterialNew');
var uniOpacity=new CGL.Uniform(shader,'f','opacity',pOpacity);

shader.setModules(['MODULE_VERTEX_POSITION','MODULE_COLOR','MODULE_BEGIN_FRAG']);
shader.bindTextures=bindTextures;
shader.setSource(attachments.matcap_vert,attachments.matcap_frag);
shaderOut.set(shader);

var textureMatcapUniform=null;
var textureDiffuseUniform=null;
var textureNormalUniform=null;
var textureSpecUniform=null;
var textureSpecMatCapUniform=null;
var textureAoUniform=null;
var repeatXUniform=new CGL.Uniform(shader,'f','repeatX',repeatX);
var repeatYUniform=new CGL.Uniform(shader,'f','repeatY',repeatY);
var aoIntensityUniform=new CGL.Uniform(shader,'f','aoIntensity',aoIntensity);
b.uniform=new CGL.Uniform(shader,'f','b',b);
g.uniform=new CGL.Uniform(shader,'f','g',g);
r.uniform=new CGL.Uniform(shader,'f','r',r);


calcTangents.onChange=updateDefines;
updateDefines();
updateMatcap();

function updateDefines()
{
    if(calcTangents.get()) shader.define('CALC_TANGENT');
        else shader.removeDefine('CALC_TANGENT');

}

ssNormals.onChange=function()
{
    if(ssNormals.get())
    {
        if(cgl.glVersion<2)
        {
            cgl.gl.getExtension('OES_standard_derivatives');
            shader.enableExtension('GL_OES_standard_derivatives');
        }

        shader.define('CALC_SSNORMALS');
    }
    else shader.removeDefine('CALC_SSNORMALS');
};

projectCoords.onChange=function()
{
    shader.removeDefine('DO_PROJECT_COORDS_XY');
    shader.removeDefine('DO_PROJECT_COORDS_YZ');
    shader.removeDefine('DO_PROJECT_COORDS_XZ');

    if(projectCoords.get()=='xy') shader.define('DO_PROJECT_COORDS_XY');
    else if(projectCoords.get()=='yz') shader.define('DO_PROJECT_COORDS_YZ');
    else if(projectCoords.get()=='xz') shader.define('DO_PROJECT_COORDS_XZ');
};

textureMatcap.onChange=updateMatcap;

function updateMatcap()
{
    if(textureMatcap.get())
    {
        if(textureMatcapUniform!==null)return;
        shader.removeUniform('tex');
        textureMatcapUniform=new CGL.Uniform(shader,'t','tex',0);
    }
    else
    {
        if(!CGL.defaultTextureMap)
        {
            var pixels=new Uint8Array(256*4);
            for(var x=0;x<16;x++)
            {
                for(var y=0;y<16;y++)
                {
                    var c=y*16;
                    c*=Math.min(1,(x+y/3)/8);
                    pixels[(x+y*16)*4+0]=pixels[(x+y*16)*4+1]=pixels[(x+y*16)*4+2]=c;
                    pixels[(x+y*16)*4+3]=255;
                }
            }

            CGL.defaultTextureMap=new CGL.Texture(cgl);
            CGL.defaultTextureMap.initFromData(pixels,16,16);
        }
        textureMatcap.set(CGL.defaultTextureMap);

        shader.removeUniform('tex');
        textureMatcapUniform=new CGL.Uniform(shader,'t','tex',0);
    }
}

textureDiffuse.onChange=function()
{
    if(textureDiffuse.get())
    {
        if(textureDiffuseUniform!==null)return;
        shader.define('HAS_DIFFUSE_TEXTURE');
        shader.removeUniform('texDiffuse');
        textureDiffuseUniform=new CGL.Uniform(shader,'t','texDiffuse',1);
    }
    else
    {
        shader.removeDefine('HAS_DIFFUSE_TEXTURE');
        shader.removeUniform('texDiffuse');
        textureDiffuseUniform=null;
    }
};

textureNormal.onChange=function()
{
    if(textureNormal.get())
    {
        if(textureNormalUniform!==null)return;
        shader.define('HAS_NORMAL_TEXTURE');
        shader.removeUniform('texNormal');
        textureNormalUniform=new CGL.Uniform(shader,'t','texNormal',2);
    }
    else
    {
        shader.removeDefine('HAS_NORMAL_TEXTURE');
        shader.removeUniform('texNormal');
        textureNormalUniform=null;
    }
};

textureAo.onChange=function()
{
    if(textureAo.get())
    {
        if(textureAoUniform!==null)return;
        shader.define('HAS_AO_TEXTURE');
        shader.removeUniform('texAo');
        textureAoUniform=new CGL.Uniform(shader,'t','texAo',5);
    }
    else
    {
        shader.removeDefine('HAS_AO_TEXTURE');
        shader.removeUniform('texAo');
        textureAoUniform=null;
    }
};

textureSpec.onChange=textureSpecMatCap.onChange=function()
{
    if(textureSpec.get() && textureSpecMatCap.get())
    {
        if(textureSpecUniform!==null)return;
        shader.define('USE_SPECULAR_TEXTURE');
        shader.removeUniform('texSpec');
        shader.removeUniform('texSpecMatCap');
        textureSpecUniform=new CGL.Uniform(shader,'t','texSpec',3);
        textureSpecMatCapUniform=new CGL.Uniform(shader,'t','texSpecMatCap',4);
    }
    else
    {
        shader.removeDefine('USE_SPECULAR_TEXTURE');
        shader.removeUniform('texSpec');
        shader.removeUniform('texSpecMatCap');
        textureSpecUniform=null;
        textureSpecMatCapUniform=null;
    }
};

function bindTextures()
{
    if(textureMatcap.get())     cgl.setTexture(0,textureMatcap.get().tex);
    if(textureDiffuse.get())    cgl.setTexture(1,textureDiffuse.get().tex);
    if(textureNormal.get())     cgl.setTexture(2,textureNormal.get().tex);
    if(textureSpec.get())       cgl.setTexture(3,textureSpec.get().tex);
    if(textureSpecMatCap.get()) cgl.setTexture(4,textureSpecMatCap.get().tex);
    if(textureAo.get())         cgl.setTexture(5,textureAo.get().tex);
};

op.onDelete=function()
{
    if(CGL.defaultTextureMap)
    {
        CGL.defaultTextureMap.delete();
        CGL.defaultTextureMap=null;
    }
};

op.preRender=function()
{
    shader.bind();
};

render.onTriggered=function()
{
    shader.bindTextures=bindTextures;
    cgl.setShader(shader);
    next.trigger();
    cgl.setPreviousShader();
};



};

Ops.Gl.Shader.MatCapMaterialNew.prototype = new CABLES.Op();
CABLES.OPS["7857ee9e-6d60-4c30-9bc0-dfdddf2b47ad"]={f:Ops.Gl.Shader.MatCapMaterialNew,objName:"Ops.Gl.Shader.MatCapMaterialNew"};




// **************************************************************
// 
// Ops.Gl.Textures.ColorTexture
// 
// **************************************************************

Ops.Gl.Textures.ColorTexture = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments={};
const r = op.inValueSlider("r", Math.random());
const g = op.inValueSlider("g", Math.random());
const b = op.inValueSlider("b", Math.random());
const a = op.inValueSlider("a", 1.0);
const texOut=op.outTexture("texture_out");

r.setUiAttribs({ colorPick: true });
const cgl=op.patch.cgl;

var fb=null;

r.onChange=
    g.onChange=
    b.onChange=
    a.onChange=render;

render();

function render()
{
    if(!fb)
    {
        if(cgl.glVersion==1) fb=new CGL.Framebuffer(cgl,4,4);
            else fb=new CGL.Framebuffer2(cgl,4,4);
        fb.setFilter(CGL.Texture.FILTER_MIPMAP);
    }

    fb.renderStart();
    cgl.gl.clearColor(r.get(),g.get(),b.get(),a.get());
    cgl.gl.clear(cgl.gl.COLOR_BUFFER_BIT);
    fb.renderEnd();

    texOut.set(fb.getTextureColor());
}

};

Ops.Gl.Textures.ColorTexture.prototype = new CABLES.Op();
CABLES.OPS["59b94270-0364-4c0f-a9fc-ba2561696a23"]={f:Ops.Gl.Textures.ColorTexture,objName:"Ops.Gl.Textures.ColorTexture"};




// **************************************************************
// 
// Ops.Trigger.TimedSequence
// 
// **************************************************************

Ops.Trigger.TimedSequence = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments={};
const exe=op.inTrigger("exe");
const current=op.inValueInt("current",0);
const overwriteTime=op.inValueBool("overwriteTime");
const ignoreInSubPatch=op.inValueBool("ignoreInSubPatch",false);
const triggerAlways=op.outTrigger("triggerAlways");
const outNames=op.outArray("Names",[]);
const currentKeyTime=op.outValue("currentKeyTime");
const outCurrent=op.outValue("Current");
var triggers=[];

for(var i=0;i<32;i++)
{
    var p=op.outTrigger("trigger "+i);
    p.onLinkChanged=updateNames;
    triggers.push( p );
}

function updateNames()
{
    var names=[];
    for(var i=0;i<triggers.length;i++)
        if(triggers[i].isLinked()) names.push(triggers[i].links[0].getOtherPort(triggers[i]).parent.uiAttribs.title);
            else names.push("none");

    outNames.set(names);
}

op.onLoaded=updateNames;

var lastUiValue=-1;

exe.onTriggered=doTrigger;

function doTrigger(_time)
{
    var spl=0;

    var outIndex=Math.round(current.get()-0.5);

    if(window.gui)
    {

        if(current.get()!=lastUiValue)
        {
            lastUiValue=current.get();
            for(spl=0;spl<triggers.length;spl++)
            {
                if(spl==lastUiValue) triggers[spl].setUiActiveState(true);
                    else triggers[spl].setUiActiveState(false);
            }
        }
    }

    if(current.anim)
    {
        var time=_time;
        if(_time===undefined) time=current.parent.patch.timer.getTime();

        currentKeyTime.set(time-current.anim.getKey(time).time);

        if(current.isAnimated())
        {
            if(overwriteTime.get())
            {
                current.parent.patch.timer.overwriteTime=currentKeyTime.get();  // todo  why current ? why  not self ?
            }
        }
    }

    if(op.patch.gui && ignoreInSubPatch.get() )
    {
        for(var i=0;i<triggers.length;i++)
        {
            for(spl=0;spl<triggers[i].links.length;spl++)
            {
                if(triggers[i].links[spl])
                {
                    if(triggers[i].links[spl].portIn.parent.patchId)
                    {
                        if(gui.patch().getCurrentSubPatch() == triggers[i].links[spl].portIn.parent.patchId.get())
                        {
                            op.patch.timer.overwriteTime=-1;
                            triggers[i].trigger();
                            return;
                        }
                    }
                }
            }
        }
    }


    if(outIndex>=0 && outIndex<triggers.length)
    {
        outCurrent.set(outIndex);
        triggers[outIndex].trigger();
    }

    op.patch.timer.overwriteTime=-1;
    triggerAlways.trigger();
}


};

Ops.Trigger.TimedSequence.prototype = new CABLES.Op();
CABLES.OPS["73c892c9-3e81-4ddc-952a-fbe6bf00ef2c"]={f:Ops.Trigger.TimedSequence,objName:"Ops.Trigger.TimedSequence"};




// **************************************************************
// 
// Ops.Trigger.TriggerCounter
// 
// **************************************************************

Ops.Trigger.TriggerCounter = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments={};
const
    exe=op.inTriggerButton("exe"),
    reset=op.inTriggerButton("reset"),
    trigger=op.outTrigger("trigger"),
    num=op.outValue("timesTriggered");

op.toWorkPortsNeedToBeLinked(exe);

var n=0;

exe.onTriggered= function()
{
    n++;
    num.set(n);
    trigger.trigger();
};

reset.onTriggered= function()
{
    n=0;
    num.set(n);
};

};

Ops.Trigger.TriggerCounter.prototype = new CABLES.Op();
CABLES.OPS["e640619f-235c-4543-bbf8-b358e0283180"]={f:Ops.Trigger.TriggerCounter,objName:"Ops.Trigger.TriggerCounter"};




// **************************************************************
// 
// Ops.Trigger.Interval
// 
// **************************************************************

Ops.Trigger.Interval = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments={};
var interval=op.inValue('interval');
var trigger=op.outTrigger('trigger');
var active=op.inValueBool("Active",true);

active.onChange=function()
{
    if(!active.get())
    {
        clearTimeout(timeOutId);
        timeOutId=-1;
    }
    else exec();
};

interval.set(1000);
var timeOutId=-1;

function exec()
{
    if(!active.get())return;
    if(timeOutId!=-1)return;

    timeOutId=setTimeout(function()
    {
        timeOutId=-1;
        trigger.trigger();
        exec();
    },
    interval.get() );
}

interval.onChange=exec;

exec();

};

Ops.Trigger.Interval.prototype = new CABLES.Op();
CABLES.OPS["3e9bae10-38af-4e36-9fcc-35faeeaf57f8"]={f:Ops.Trigger.Interval,objName:"Ops.Trigger.Interval"};




// **************************************************************
// 
// Ops.Math.Modulo
// 
// **************************************************************

Ops.Math.Modulo = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments={};

const result=op.outValue("result");
const number1=op.inValueFloat("number1");
const number2=op.inValueFloat("number2");
const pingpong=op.inValueBool("pingpong");

var doPingPong=false;

number1.onChange=exec;
number2.onChange=exec;

number1.set(1);
number2.set(2);

pingpong.onChange=updatePingPong;

function exec()
{
    var n2=number2.get();
    var n1=number1.get();

    if(doPingPong)
    {
        var r=n1 % n2*2;
        if(r>n2) result.set( n2 * 2.0-r );
            else result.set(r);
        return;
    }
    else
    {
        var re=n1 % n2;
        if(re!=re) re=0;
        result.set(re);
    }
}

function updatePingPong()
{
    doPingPong=pingpong.get();
}


};

Ops.Math.Modulo.prototype = new CABLES.Op();
CABLES.OPS["ebc13b25-3705-4265-8f06-5f985b6a7bb1"]={f:Ops.Math.Modulo,objName:"Ops.Math.Modulo"};




// **************************************************************
// 
// Ops.Gl.Render2Texture
// 
// **************************************************************

Ops.Gl.Render2Texture = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments={};
const cgl=op.patch.cgl;

const
    render=op.inTrigger('render'),
    useVPSize=op.inValueBool("use viewport size",true),
    width=op.inValueInt("texture width",512),
    height=op.inValueInt("texture height",512),
    tfilter=op.inSwitch("filter",['nearest','linear','mipmap'],'linear'),
    msaa=op.inSwitch("MSAA",["none","2x","4x","8x"],"none"),
    trigger=op.outTrigger('trigger'),
    tex=op.outTexture("texture"),
    texDepth=op.outTexture("textureDepth"),
    fpTexture=op.inValueBool("HDR"),
    depth=op.inValueBool("Depth",true),
    clear=op.inValueBool("Clear",true);

var fb=null;
var reInitFb=true;
tex.set(CGL.Texture.getEmptyTexture(cgl));

op.setPortGroup('Alignment',[useVPSize,width,height,tfilter]);


// todo why does it only work when we render a mesh before>?>?????
// only happens with matcap material with normal map....

useVPSize.onChange=updateVpSize;
function updateVpSize()
{
    if(useVPSize.get())
    {
        width.setUiAttribs({greyout:true});
        height.setUiAttribs({greyout:true});
    }
    else
    {
        width.setUiAttribs({greyout:false});
        height.setUiAttribs({greyout:false});
    }
}


function initFbLater()
{
    reInitFb=true;
}

fpTexture.onChange=
    depth.onChange=
    clear.onChange=
    tfilter.onChange=
    msaa.onChange=initFbLater;

function doRender()
{
    if(!fb || reInitFb)
    {
        if(fb) fb.delete();
        if(cgl.glVersion>=2)
        {
            var ms=true;
            var msSamples=4;

            if(msaa.get()=="none")
            {
                msSamples=0;
                ms=false;
            }
            if(msaa.get()=="2x")msSamples=2;
            if(msaa.get()=="4x")msSamples=4;
            if(msaa.get()=="8x")msSamples=8;

            fb=new CGL.Framebuffer2(cgl,8,8,
            {
                isFloatingPointTexture:fpTexture.get(),
                multisampling:ms,
                depth:depth.get(),
                multisamplingSamples:msSamples,
                clear:clear.get()
            });
        }
        else
        {
            fb=new CGL.Framebuffer(cgl,8,8,{isFloatingPointTexture:fpTexture.get()});
        }

        if(tfilter.get()=='nearest') fb.setFilter(CGL.Texture.FILTER_NEAREST);
            else if(tfilter.get()=='linear') fb.setFilter(CGL.Texture.FILTER_LINEAR);
            else if(tfilter.get()=='mipmap') fb.setFilter(CGL.Texture.FILTER_MIPMAP);

        texDepth.set(fb.getTextureDepth());
        reInitFb=false;
    }

    if(useVPSize.val)
    {
        width.set( cgl.getViewPort()[2] );
        height.set( cgl.getViewPort()[3] );
    }

    if(fb.getWidth()!=Math.ceil(width.get()) || fb.getHeight()!=Math.ceil(height.get()) )
    {
        fb.setSize(
            Math.max(1,Math.ceil(width.get())),
            Math.max(1,Math.ceil(height.get())) );
    }

    fb.renderStart(cgl);

    trigger.trigger();
    fb.renderEnd(cgl);

    cgl.resetViewPort();

    tex.set( fb.getTextureColor() );
}


render.onTriggered=doRender;
op.preRender=doRender;


updateVpSize();

};

Ops.Gl.Render2Texture.prototype = new CABLES.Op();
CABLES.OPS["d01fa820-396c-4cb5-9d78-6b14762852af"]={f:Ops.Gl.Render2Texture,objName:"Ops.Gl.Render2Texture"};




// **************************************************************
// 
// Ops.Sequence
// 
// **************************************************************

Ops.Sequence = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments={};

const exe=op.inTrigger("exe");
const exes=[];
const triggers=[];
const num=16;
exe.onTriggered=triggerAll;

function triggerAll()
{
    for(var i=0;i<triggers.length;i++) triggers[i].trigger();
}

for(var i=0;i<num;i++)
{
    triggers.push( op.outTrigger("trigger "+i));

    if(i<num-1)
    {
        var newExe=op.inTrigger("exe "+i);
        newExe.onTriggered=triggerAll;
        exes.push( newExe );
    }
}

};

Ops.Sequence.prototype = new CABLES.Op();
CABLES.OPS["a466bc1f-06e9-4595-8849-bffb9fe22f99"]={f:Ops.Sequence,objName:"Ops.Sequence"};




// **************************************************************
// 
// Ops.Gl.TextureEffects.ImageCompose
// 
// **************************************************************

Ops.Gl.TextureEffects.ImageCompose = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments={};
const render=op.inTrigger("render");
const useVPSize=op.addInPort(new CABLES.Port(op,"use viewport size",CABLES.OP_PORT_TYPE_VALUE,{ display:'bool' }));
const width=op.inValueInt("width");
const height=op.inValueInt("height");

const tfilter=op.inSwitch("filter",['nearest','linear','mipmap'],"linear");
const twrap=op.inValueSelect("wrap",['clamp to edge','repeat','mirrored repeat']);
const fpTexture=op.inValueBool("HDR");

const trigger=op.outTrigger("trigger");
const texOut=op.outTexture("texture_out");

const bgAlpha=op.inValueSlider("Background Alpha",1);
const outRatio=op.outValue("Aspect Ratio");

op.setPortGroup("Texture Size",[useVPSize,width,height]);
op.setPortGroup("Texture Settings",[twrap,tfilter,fpTexture]);



const cgl=op.patch.cgl;
texOut.set(CGL.Texture.getEmptyTexture(cgl));
var effect=null;
var tex=null;

var w=8,h=8;
var prevViewPort=[0,0,0,0];
var reInitEffect=true;

var bgFrag=''
    .endl()+'uniform float a;'
    .endl()+'void main()'
    .endl()+'{'
    .endl()+'   outColor= vec4(0.0,0.0,0.0,a);'
    .endl()+'}';
var bgShader=new CGL.Shader(cgl,'imgcompose bg');
bgShader.setSource(bgShader.getDefaultVertexShader(),bgFrag);
var uniBgAlpha=new CGL.Uniform(bgShader,'f','a',bgAlpha);

var selectedFilter=CGL.Texture.FILTER_LINEAR;
var selectedWrap=CGL.Texture.WRAP_CLAMP_TO_EDGE;

function initEffect()
{
    if(effect)effect.delete();
    if(tex)tex.delete();

    effect=new CGL.TextureEffect(cgl,{"isFloatingPointTexture":fpTexture.get()});

    tex=new CGL.Texture(cgl,
        {
            "name":"image compose",
            "isFloatingPointTexture":fpTexture.get(),
            "filter":selectedFilter,
            "wrap":selectedWrap,
            "width": Math.ceil(width.get()),
            "height": Math.ceil(height.get()),
        });

    effect.setSourceTexture(tex);
    texOut.set(CGL.Texture.getEmptyTexture(cgl));
    // texOut.set(effect.getCurrentSourceTexture());

    // texOut.set(effect.getCurrentSourceTexture());

    reInitEffect=false;

    // op.log("reinit effect");
    // tex.printInfo();
}

fpTexture.onChange=function()
{
    reInitEffect=true;

    // var e1=cgl.gl.getExtension('EXT_color_buffer_float');
    // var e2=cgl.gl.getExtension('EXT_float_blend');

};

function updateResolution()
{
    if(!effect)initEffect();

    if(useVPSize.get())
    {
        w=cgl.getViewPort()[2];
        h=cgl.getViewPort()[3];
    }
    else
    {
        w=Math.ceil(width.get());
        h=Math.ceil(height.get());
    }

    if((w!=tex.width || h!= tex.height) && (w!==0 && h!==0))
    {
        height.set(h);
        width.set(w);
        tex.setSize(w,h);
        outRatio.set(w/h);
        effect.setSourceTexture(tex);
        // texOut.set(null);
        texOut.set(CGL.Texture.getEmptyTexture(cgl));
        texOut.set(tex);
    }

    if(texOut.get())
        if(!texOut.get().isPowerOfTwo() )
        {
            if(!op.uiAttribs.hint)
                op.uiAttr(
                    {
                        hint:'texture dimensions not power of two! - texture filtering will not work.',
                        warning:null
                    });
        }
        else
        if(op.uiAttribs.hint)
        {
            op.uiAttr({hint:null,warning:null}); //todo only when needed...
        }

}


function updateSizePorts()
{
    if(useVPSize.get())
    {
        width.setUiAttribs({greyout:true});
        height.setUiAttribs({greyout:true});
    }
    else
    {
        width.setUiAttribs({greyout:false});
        height.setUiAttribs({greyout:false});
    }
}


useVPSize.onChange=function()
{
    updateSizePorts();
    if(useVPSize.get())
    {
        width.onChange=null;
        height.onChange=null;
    }
    else
    {
        width.onChange=updateResolution;
        height.onChange=updateResolution;
    }
    updateResolution();

};


op.preRender=function()
{
    doRender();
    bgShader.bind();
};


var doRender=function()
{
    if(!effect || reInitEffect)
    {
        initEffect();
    }
    var vp=cgl.getViewPort();
    prevViewPort[0]=vp[0];
    prevViewPort[1]=vp[1];
    prevViewPort[2]=vp[2];
    prevViewPort[3]=vp[3];


    cgl.gl.blendFunc(cgl.gl.SRC_ALPHA, cgl.gl.ONE_MINUS_SRC_ALPHA);
    // cgl.gl.blendFunc(cgl.gl.SRC_ALPHA,cgl.gl.ONE_MINUS_SRC_ALPHA);



    updateResolution();

    cgl.currentTextureEffect=effect;
    effect.setSourceTexture(tex);

    effect.startEffect();

    // render background color...
    cgl.setShader(bgShader);
    cgl.currentTextureEffect.bind();
    cgl.setTexture(0, cgl.currentTextureEffect.getCurrentSourceTexture().tex );
    cgl.currentTextureEffect.finish();
    cgl.setPreviousShader();

    trigger.trigger();

    texOut.set(effect.getCurrentSourceTexture());
    // texOut.set(effect.getCurrentTargetTexture());


    // if(effect.getCurrentSourceTexture.filter==CGL.Texture.FILTER_MIPMAP)
    // {
    //         this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, effect.getCurrentSourceTexture.tex);
    //         effect.getCurrentSourceTexture.updateMipMap();
    //     // else
    //     // {
    //     //     this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, this._textureSource.tex);;
    //     //     this._textureSource.updateMipMap();
    //     // }

    //     this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null);
    // }

    effect.endEffect();

    cgl.setViewPort(prevViewPort[0],prevViewPort[1],prevViewPort[2],prevViewPort[3]);


    cgl.gl.blendFunc(cgl.gl.SRC_ALPHA,cgl.gl.ONE_MINUS_SRC_ALPHA);

    cgl.currentTextureEffect=null;
};


function onWrapChange()
{
    if(twrap.get()=='repeat') selectedWrap=CGL.Texture.WRAP_REPEAT;
    if(twrap.get()=='mirrored repeat') selectedWrap=CGL.Texture.WRAP_MIRRORED_REPEAT;
    if(twrap.get()=='clamp to edge') selectedWrap=CGL.Texture.WRAP_CLAMP_TO_EDGE;

    reInitEffect=true;
    updateResolution();
}

twrap.set('repeat');
twrap.onChange=onWrapChange;


function onFilterChange()
{
    if(tfilter.get()=='nearest') selectedFilter=CGL.Texture.FILTER_NEAREST;
    if(tfilter.get()=='linear')  selectedFilter=CGL.Texture.FILTER_LINEAR;
    if(tfilter.get()=='mipmap')  selectedFilter=CGL.Texture.FILTER_MIPMAP;

    reInitEffect=true;
    updateResolution();
    // effect.setSourceTexture(tex);
    // updateResolution();
}

tfilter.set('linear');
tfilter.onChange=onFilterChange;

useVPSize.set(true);
render.onTriggered=doRender;
op.preRender=doRender;


width.set(640);
height.set(360);
onFilterChange();
onWrapChange();
updateSizePorts();

};

Ops.Gl.TextureEffects.ImageCompose.prototype = new CABLES.Op();
CABLES.OPS["5c04608d-1e42-4e36-be00-1be4a81fc309"]={f:Ops.Gl.TextureEffects.ImageCompose,objName:"Ops.Gl.TextureEffects.ImageCompose"};




// **************************************************************
// 
// Ops.Gl.TextureEffects.DrawImage
// 
// **************************************************************

Ops.Gl.TextureEffects.DrawImage = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments={drawimage_frag:"#ifdef HAS_TEXTURES\n  IN vec2 texCoord;\n  UNI sampler2D tex;\n  UNI sampler2D image;\n#endif\n\nIN mat3 transform;\nUNI float rotate;\n\n{{CGL.BLENDMODES}}\n\n#ifdef HAS_TEXTUREALPHA\n   UNI sampler2D imageAlpha;\n#endif\n\nUNI float amount;\n\nvoid main()\n{\n   vec4 blendRGBA=vec4(0.0,0.0,0.0,1.0);\n   #ifdef HAS_TEXTURES\n       vec2 tc=texCoord;\n\n       #ifdef TEX_FLIP_X\n           tc.x=1.0-tc.x;\n       #endif\n       #ifdef TEX_FLIP_Y\n           tc.y=1.0-tc.y;\n       #endif\n\n       #ifdef TEX_TRANSFORM\n           vec3 coordinates=vec3(tc.x, tc.y,1.0);\n           tc=(transform * coordinates ).xy;\n       #endif\n\n       blendRGBA=texture(image,tc);\n\n       vec3 blend=blendRGBA.rgb;\n       vec4 baseRGBA=texture(tex,texCoord);\n       vec3 base=baseRGBA.rgb;\n\n       vec3 colNew=_blend(base,blend);\n\n       #ifdef REMOVE_ALPHA_SRC\n           blendRGBA.a=1.0;\n       #endif\n\n       #ifdef HAS_TEXTUREALPHA\n           vec4 colImgAlpha=texture(imageAlpha,texCoord);\n           float colImgAlphaAlpha=colImgAlpha.a;\n\n           #ifdef ALPHA_FROM_LUMINANCE\n               vec3 gray = vec3(dot(vec3(0.2126,0.7152,0.0722), colImgAlpha.rgb ));\n               colImgAlphaAlpha=(gray.r+gray.g+gray.b)/3.0;\n           #endif\n\n           blendRGBA.a=colImgAlphaAlpha*blendRGBA.a;\n\n           #ifdef INVERT_ALPHA\n           blendRGBA.a=1.0-blendRGBA.a;\n           #endif\n       #endif\n\n\n   #endif\n\n   blendRGBA.rgb=mix( colNew, base ,1.0-blendRGBA.a*amount);\n   blendRGBA.a=1.0;\n\n\n   outColor= blendRGBA;\n}",drawimage_vert:"IN vec3 vPosition;\nIN vec2 attrTexCoord;\nIN vec3 attrVertNormal;\nOUT vec2 texCoord;\nOUT vec3 norm;\nUNI mat4 projMatrix;\nUNI mat4 mvMatrix;\n\nUNI float posX;\nUNI float posY;\nUNI float scale;\nUNI float rotate;\n\nOUT mat3 transform;\n\nvoid main()\n{\n    texCoord=attrTexCoord;\n    norm=attrVertNormal;\n\n    #ifdef TEX_TRANSFORM\n    vec3 coordinates=vec3(attrTexCoord.x, attrTexCoord.y,1.0);\n    float angle = radians( rotate );\n    vec2 scale= vec2(scale,scale);\n    vec2 translate= vec2(posX,posY);\n\n    transform = mat3(   scale.x * cos( angle ), scale.x * sin( angle ), 0.0,\n                        - scale.y * sin( angle ), scale.y * cos( angle ), 0.0,\n                        - 0.5 * scale.x * cos( angle ) + 0.5 * scale.y * sin( angle ) - 0.5 * translate.x*2.0 + 0.5,  - 0.5 * scale.x * sin( angle ) - 0.5 * scale.y * cos( angle ) - 0.5 * translate.y*2.0 + 0.5, 1.0);\n    #endif\n\n    gl_Position = projMatrix * mvMatrix * vec4(vPosition,  1.0);\n}",};
var render=op.inTrigger('render');
var amount=op.inFloatSlider("amount");
var blendMode=CGL.TextureEffect.AddBlendSelect(op,"blendMode");

var image=op.inTexture("image");

var imageAlpha=op.inTexture("imageAlpha");
var alphaSrc=op.inValueSelect("alphaSrc",['alpha channel','luminance']);
var removeAlphaSrc=op.inValueBool("removeAlphaSrc");

var invAlphaChannel=op.inValueBool("invert alpha channel");
var trigger=op.outTrigger('trigger');

op.toWorkPortsNeedToBeLinked(image);

blendMode.set('normal');
var cgl=op.patch.cgl;
var shader=new CGL.Shader(cgl,'drawimage');

amount.set(1.0);

render.onTriggered=doRender;

shader.setSource(attachments.drawimage_vert,attachments.drawimage_frag);
var textureUniform=new CGL.Uniform(shader,'t','tex',0);
var textureDisplaceUniform=new CGL.Uniform(shader,'t','image',1);
var textureAlpha=new CGL.Uniform(shader,'t','imageAlpha',2);

invAlphaChannel.onChange=function()
{
    if(invAlphaChannel.get()) shader.define('INVERT_ALPHA');
        else shader.removeDefine('INVERT_ALPHA');
};

removeAlphaSrc.onChange=function()
{
    if(removeAlphaSrc.get()) shader.define('REMOVE_ALPHA_SRC');
        else shader.removeDefine('REMOVE_ALPHA_SRC');
};
removeAlphaSrc.set(true);

alphaSrc.onChange=function()
{
    if(alphaSrc.get()=='luminance') shader.define('ALPHA_FROM_LUMINANCE');
        else shader.removeDefine('ALPHA_FROM_LUMINANCE');
};

alphaSrc.set("alpha channel");


{
    //
    // texture flip
    //
    var flipX=op.inValueBool("flip x");
    var flipY=op.inValueBool("flip y");

    flipX.onChange=function()
    {
        if(flipX.get()) shader.define('TEX_FLIP_X');
            else shader.removeDefine('TEX_FLIP_X');
    };

    flipY.onChange=function()
    {
        if(flipY.get()) shader.define('TEX_FLIP_Y');
            else shader.removeDefine('TEX_FLIP_Y');
    };
}

{
    //
    // texture transform
    //
    var scale=op.inValueFloat("scale");
    var posX=op.inValueFloat("pos x");
    var posY=op.inValueFloat("pos y");
    var rotate=op.inValueFloat("rotate");

    scale.set(1.0);

    var uniScale=new CGL.Uniform(shader,'f','scale',scale.get());
    var uniPosX=new CGL.Uniform(shader,'f','posX',posX.get());
    var uniPosY=new CGL.Uniform(shader,'f','posY',posY.get());
    var uniRotate=new CGL.Uniform(shader,'f','rotate',rotate.get());

    function updateTransform()
    {
        if(scale.get()!=1.0 || posX.get()!=0.0 || posY.get()!=0.0 || rotate.get()!=0.0 )
        {
            if(!shader.hasDefine('TEX_TRANSFORM')) shader.define('TEX_TRANSFORM');
            uniScale.setValue( parseFloat(scale.get()) );
            uniPosX.setValue( posX.get() );
            uniPosY.setValue( posY.get() );
            uniRotate.setValue( rotate.get() );
        }
        else
        {
            // shader.removeDefine('TEX_TRANSFORM');
        }
    }

    scale.onChange=updateTransform;
    posX.onChange=updateTransform;
    posY.onChange=updateTransform;
    rotate.onChange=updateTransform;
}

CGL.TextureEffect.setupBlending(op,shader,blendMode,amount);


var amountUniform=new CGL.Uniform(shader,'f','amount',amount);
var oldHadImageAlpha=false;

// op.preRender=function()
// {
//     doRender();
// };


function doRender()
{
    // if(!CGL.TextureEffect.checkOpInEffect(op)) return;

    if(imageAlpha.get() && !oldHadImageAlpha || !imageAlpha.get() && oldHadImageAlpha)
    {
        if(imageAlpha.get() && imageAlpha.get().tex)
        {
            console.log("HAS TEX ALPHA!");
            shader.define('HAS_TEXTUREALPHA');
            oldHadImageAlpha=true;
        }
        else
        {
            shader.removeDefine('HAS_TEXTUREALPHA');
            oldHadImageAlpha=false;
        }
    }

    if(image.get() && image.get().tex && amount.get()>0.0)
    {
        cgl.setShader(shader);
        cgl.currentTextureEffect.bind();

        cgl.setTexture(0, cgl.currentTextureEffect.getCurrentSourceTexture().tex );

        if(image.get() && image.get().tex) cgl.setTexture(1, image.get().tex );
            else cgl.setTexture(1, null);

        if(imageAlpha.get() && imageAlpha.get().tex) cgl.setTexture(2, imageAlpha.get().tex );
            else cgl.setTexture(2,null);

        cgl.currentTextureEffect.finish();
        cgl.setPreviousShader();
    }

    trigger.trigger();
}



};

Ops.Gl.TextureEffects.DrawImage.prototype = new CABLES.Op();
CABLES.OPS["8248b866-9492-48c8-897d-3097c6fe6fe8"]={f:Ops.Gl.TextureEffects.DrawImage,objName:"Ops.Gl.TextureEffects.DrawImage"};




// **************************************************************
// 
// Ops.Gl.TextureEffects.Pixelate
// 
// **************************************************************

Ops.Gl.TextureEffects.Pixelate = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments={pixelate_frag:"IN vec2 texCoord;\nUNI sampler2D tex;\nUNI sampler2D multiplierTex;\nUNI float amount;\nUNI float amountX;\nUNI float amountY;\n\n{{CGL.BLENDMODES}}\n\nvoid main()\n{\n    vec4 col=vec4(1.0,0.0,0.0,1.0);\n\n    float x=1.0/amountX;\n    float y=1.0/amountY;\n\n    #ifdef PIXELATE_TEXTURE\n    x += texture(multiplierTex,texCoord).r*0.1;//*0.1\n    y += texture(multiplierTex,texCoord).r*0.1;//*0.1\n    #endif\n\n    vec2 coord = vec2(x*floor(texCoord.x/x), y*floor(texCoord.y/y));\n\n    col=texture(tex,coord);\n    vec4 base=texture(tex,texCoord);\n\n    outColor=cgl_blend(base,col,amount);\n}",};
const render=op.inTrigger('render');
const multiplierTex = op.inTexture("Multiplier");
const blendMode=CGL.TextureEffect.AddBlendSelect(op,"Blend Mode","normal");
const amount=op.inValueSlider("Amount",1);
const amountX=op.inValue("width",320.0);
const amountY=op.inValue("height",180.0);
const trigger=op.outTrigger('trigger');

const cgl=op.patch.cgl;
const shader=new CGL.Shader(cgl);

shader.setSource(shader.getDefaultVertexShader(),attachments.pixelate_frag);

const textureUniform=new CGL.Uniform(shader,'t','tex',0);
const textureMultiplierUniform=new CGL.Uniform(shader,'t','multiplierTex',1);
const amountUniform =new CGL.Uniform(shader,'f','amount',amount);
const amountXUniform=new CGL.Uniform(shader,'f','amountX',0.0);
const amountYUniform=new CGL.Uniform(shader,'f','amountY',0.0);

amountX.onChange=function()
{
    amountXUniform.setValue(amountX.get());
};

amountY.onChange=function()
{
    amountYUniform.setValue(amountY.get());
};
multiplierTex.onChange = function()
{
    shader.toggleDefine('PIXELATE_TEXTURE',multiplierTex.isLinked());
};

CGL.TextureEffect.setupBlending(op,shader,blendMode,amount);

render.onTriggered=function()
{
    if(!CGL.TextureEffect.checkOpInEffect(op)) return;

    cgl.setShader(shader);
    cgl.currentTextureEffect.bind();

    cgl.setTexture(0, cgl.currentTextureEffect.getCurrentSourceTexture().tex );

    if(multiplierTex.get()) cgl.setTexture(1, multiplierTex.get().tex );

    cgl.currentTextureEffect.finish();
    cgl.setPreviousShader();

    trigger.trigger();
};



};

Ops.Gl.TextureEffects.Pixelate.prototype = new CABLES.Op();
CABLES.OPS["c76d3d21-e6d8-4b6c-af3d-0f0a5ecbdaa8"]={f:Ops.Gl.TextureEffects.Pixelate,objName:"Ops.Gl.TextureEffects.Pixelate"};




// **************************************************************
// 
// Ops.Gl.Meshes.FullscreenRectangle
// 
// **************************************************************

Ops.Gl.Meshes.FullscreenRectangle = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments={shader_frag:"\nUNI sampler2D tex;\nIN vec2 texCoord;\n\nvoid main()\n{\n   outColor= texture(tex,vec2(texCoord.x,(1.0-texCoord.y)));\n}\n",shader_vert:"{{MODULES_HEAD}}\n\nIN vec3 vPosition;\nUNI mat4 projMatrix;\nUNI mat4 mvMatrix;\n\nOUT vec2 texCoord;\nIN vec2 attrTexCoord;\n\nvoid main()\n{\n   vec4 pos=vec4(vPosition,  1.0);\n\n   texCoord=attrTexCoord;\n\n   gl_Position = projMatrix * mvMatrix * pos;\n}\n",};
const
    render=op.inTrigger('render'),
    centerInCanvas=op.inValueBool("Center in Canvas"),
    flipY=op.inValueBool("Flip Y"),
    inTexture=op.inTexture("Texture"),
    trigger=op.outTrigger('trigger');

const cgl=op.patch.cgl;
var mesh=null;
var geom=new CGL.Geometry("fullscreen rectangle");
var x=0,y=0,z=0,w=0,h=0;

centerInCanvas.onChange=rebuild;
flipY.onChange=rebuild;

const shader=new CGL.Shader(cgl,'fullscreenrectangle');
shader.setModules(['MODULE_VERTEX_POSITION','MODULE_COLOR','MODULE_BEGIN_FRAG']);

shader.setSource(attachments.shader_vert,attachments.shader_frag);
shader.fullscreenRectUniform=new CGL.Uniform(shader,'t','tex',0);

var useShader=false;
var updateShaderLater=true;
render.onTriggered=doRender;

op.toWorkPortsNeedToBeLinked(render);

inTexture.onChange=function()
{
    updateShaderLater=true;
};

function updateShader()
{
    var tex=inTexture.get();
    if(tex) useShader=true;
        else useShader=false;
}

op.preRender=function()
{
    updateShader();
    // if(useShader)
    {
        shader.bind();
        if(mesh)mesh.render(shader);
        doRender();
    }
};

function doRender()
{
    if( cgl.getViewPort()[2]!=w || cgl.getViewPort()[3]!=h ||!mesh ) rebuild();

    if(updateShaderLater) updateShader();

    cgl.pushPMatrix();
    mat4.identity(cgl.pMatrix);
    mat4.ortho(cgl.pMatrix, 0, w,h, 0, -10.0, 1000);

    cgl.pushModelMatrix();
    mat4.identity(cgl.mMatrix);

    cgl.pushViewMatrix();
    mat4.identity(cgl.vMatrix);

    if(centerInCanvas.get())
    {
        var x=0;
        var y=0;
        if(w<cgl.canvasWidth) x=(cgl.canvasWidth-w)/2;
        if(h<cgl.canvasHeight) y=(cgl.canvasHeight-h)/2;

        cgl.setViewPort(x,y,w,h);
    }

    if(useShader)
    {
        if(inTexture.get())
        {
            cgl.setTexture(0,inTexture.get().tex);
            // cgl.gl.bindTexture(cgl.gl.TEXTURE_2D, inTexture.get().tex);
        }

        mesh.render(shader);
    }
    else
    {
        mesh.render(cgl.getShader());
    }

    cgl.gl.clear(cgl.gl.DEPTH_BUFFER_BIT);

    cgl.popPMatrix();
    cgl.popModelMatrix();
    cgl.popViewMatrix();

    trigger.trigger();
}


function rebuild()
{
    const currentViewPort=cgl.getViewPort();

    if(currentViewPort[2]==w && currentViewPort[3]==h && mesh)return;

    var xx=0,xy=0;

    w=currentViewPort[2];
    h=currentViewPort[3];

    geom.vertices = new Float32Array([
         xx+w, xy+h,  0.0,
         xx,   xy+h,  0.0,
         xx+w, xy,    0.0,
         xx,   xy,    0.0
    ]);

    if(flipY.get())
        geom.setTexCoords( new Float32Array([
             1.0, 0.0,
             0.0, 0.0,
             1.0, 1.0,
             0.0, 1.0
        ]));
    else
        geom.setTexCoords(new Float32Array([
             1.0, 1.0,
             0.0, 1.0,
             1.0, 0.0,
             0.0, 0.0
        ]));

    geom.verticesIndices = new Float32Array([
        2, 1, 0,
        3, 1, 2
    ]);


    geom.vertexNormals=new Float32Array([
        0,0,1,
        0,0,1,
        0,0,1,
        0,0,1,
        ]);
    geom.tangents=new Float32Array([
        -1,0,0,
        -1,0,0,
        -1,0,0,
        -1,0,0]);
    geom.biTangents==new Float32Array([
        0,-1,0,
        0,-1,0,
        0,-1,0,
        0,-1,0]);

                // norms.push(0,0,1);
                // tangents.push(-1,0,0);
                // biTangents.push(0,-1,0);


    if(!mesh) mesh=new CGL.Mesh(cgl,geom);
        else mesh.setGeom(geom);
}


};

Ops.Gl.Meshes.FullscreenRectangle.prototype = new CABLES.Op();
CABLES.OPS["255bd15b-cc91-4a12-9b4e-53c710cbb282"]={f:Ops.Gl.Meshes.FullscreenRectangle,objName:"Ops.Gl.Meshes.FullscreenRectangle"};




// **************************************************************
// 
// Ops.Gl.TextureEffects.Blur
// 
// **************************************************************

Ops.Gl.TextureEffects.Blur = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments={blur_frag:"IN vec2 texCoord;\nUNI sampler2D tex;\nUNI float dirX;\nUNI float dirY;\nUNI float amount;\n\n#ifdef HAS_MASK\n    UNI sampler2D imageMask;\n#endif\n\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main()\n{\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float am=amount;\n    #ifdef HAS_MASK\n        am=amount*texture(imageMask,texCoord).r;\n        if(am<=0.02)\n        {\n            outColor=texture(tex, texCoord);\n            return;\n        }\n    #endif\n\n   vec2 delta=vec2(dirX*am*0.01,dirY*am*0.01);\n\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n\n    #ifdef MOBILE\n        offset = 0.1;\n    #endif\n\n    #if defined(FASTBLUR) && !defined(MOBILE)\n        const float range=5.0;\n    #else\n        const float range=20.0;\n    #endif\n\n    for (float t = -range; t <= range; t+=1.0)\n    {\n        float percent = (t + offset - 0.5) / range;\n        float weight = 1.0 - abs(percent);\n        vec4 smpl = texture(tex, texCoord + delta * percent);\n\n        smpl.rgb *= smpl.a;\n\n        color += smpl * weight;\n        total += weight;\n    }\n\n    outColor= color / total;\n\n    outColor.rgb /= outColor.a + 0.00001;\n\n\n\n}\n",};
const render=op.inTrigger('render');
const trigger=op.outTrigger('trigger');
const amount=op.inValueFloat("amount");
const direction=op.inSwitch("direction",['both','vertical','horizontal'],'both');
const fast=op.inValueBool("Fast",true);
const cgl=op.patch.cgl;

amount.set(10);

var shader=new CGL.Shader(cgl);

shader.define("FASTBLUR");

fast.onChange=function()
{
    if(fast.get()) shader.define("FASTBLUR");
    else shader.removeDefine("FASTBLUR");
};

shader.setSource(shader.getDefaultVertexShader(),attachments.blur_frag);
var textureUniform=new CGL.Uniform(shader,'t','tex',0);

var uniDirX=new CGL.Uniform(shader,'f','dirX',0);
var uniDirY=new CGL.Uniform(shader,'f','dirY',0);

var uniWidth=new CGL.Uniform(shader,'f','width',0);
var uniHeight=new CGL.Uniform(shader,'f','height',0);

var uniAmount=new CGL.Uniform(shader,'f','amount',amount.get());
amount.onChange=function(){ uniAmount.setValue(amount.get()); };

var textureAlpha=new CGL.Uniform(shader,'t','imageMask',1);



var dir=0;

direction.onChange=function()
{
    if(direction.get()=='both')dir=0;
    if(direction.get()=='horizontal')dir=1;
    if(direction.get()=='vertical')dir=2;
};

var mask=op.inTexture("mask");

mask.onChange=function()
{
    if(mask.get() && mask.get().tex) shader.define('HAS_MASK');
        else shader.removeDefine('HAS_MASK');
};



render.onTriggered=function()
{
    if(!CGL.TextureEffect.checkOpInEffect(op)) return;

    cgl.setShader(shader);

    uniWidth.setValue(cgl.currentTextureEffect.getCurrentSourceTexture().width);
    uniHeight.setValue(cgl.currentTextureEffect.getCurrentSourceTexture().height);

    // first pass
    if(dir===0 || dir==2)
    {

        cgl.currentTextureEffect.bind();
        cgl.setTexture(0, cgl.currentTextureEffect.getCurrentSourceTexture().tex );


        if(mask.get() && mask.get().tex)
        {
            cgl.setTexture(1, mask.get().tex );
            // cgl.gl.bindTexture(cgl.gl.TEXTURE_2D, mask.get().tex );
        }


        uniDirX.setValue(0.0);
        uniDirY.setValue(1.0);

        cgl.currentTextureEffect.finish();
    }

    // second pass
    if(dir===0 || dir==1)
    {

        cgl.currentTextureEffect.bind();
        cgl.setTexture(0, cgl.currentTextureEffect.getCurrentSourceTexture().tex );


        if(mask.get() && mask.get().tex)
        {
            cgl.setTexture(1, mask.get().tex );
            // cgl.gl.bindTexture(cgl.gl.TEXTURE_2D, mask.get().tex );
        }

        uniDirX.setValue(1.0);
        uniDirY.setValue(0.0);

        cgl.currentTextureEffect.finish();
    }

    cgl.setPreviousShader();
    trigger.trigger();
};


};

Ops.Gl.TextureEffects.Blur.prototype = new CABLES.Op();
CABLES.OPS["54f26f53-f637-44c1-9bfb-a2f2b722e998"]={f:Ops.Gl.TextureEffects.Blur,objName:"Ops.Gl.TextureEffects.Blur"};




// **************************************************************
// 
// Ops.Gl.TextureEffects.Scroll
// 
// **************************************************************

Ops.Gl.TextureEffects.Scroll = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments={scroll_frag:"IN vec2 texCoord;\nUNI sampler2D tex;\nUNI float amountX;\nUNI float amountY;\n\nvoid main()\n{\n    vec4 col=vec4(0.0,0.0,0.0,1.0);\n    float x=mod(texCoord.x+amountX,1.0);\n    float y=mod(texCoord.y+amountY,1.0);\n\n    #ifdef NO_REPEAT\n        x=texCoord.x+amountX*0.1;\n        y=texCoord.y+amountY*0.1;\n    #endif\n\n    col=texture(tex,vec2(x,y));\n\n    #ifdef NO_REPEAT\n        if(x>1.0 || x<0.0 || y>1.0 || y<0.0) col=vec4(0.0,0.0,0.0,1.0);\n    #endif\n    outColor= col;\n}",};
var render=op.inTrigger('render');
var trigger=op.outTrigger('trigger');

var amountX=op.inValue("amountX");
var amountY=op.inValue("amountY");

var repeat=op.inValueBool("Repeat",true);

repeat.onChange=updateRepeat;

var cgl=op.patch.cgl;


var shader=new CGL.Shader(cgl);
shader.setSource(shader.getDefaultVertexShader(),attachments.scroll_frag);
var textureUniform=new CGL.Uniform(shader,'t','tex',0);
var amountXUniform=new CGL.Uniform(shader,'f','amountX',amountX);
var amountYUniform=new CGL.Uniform(shader,'f','amountY',amountY);

updateRepeat();

function updateRepeat()
{
    if(!repeat.get())shader.define("NO_REPEAT");
    else shader.removeDefine("NO_REPEAT");
}

render.onTriggered=function()
{
    if(!CGL.TextureEffect.checkOpInEffect(op)) return;

    cgl.setShader(shader);
    cgl.currentTextureEffect.bind();

    cgl.setTexture(0, cgl.currentTextureEffect.getCurrentSourceTexture().tex );


    cgl.currentTextureEffect.finish();
    cgl.setPreviousShader();

    trigger.trigger();
};


};

Ops.Gl.TextureEffects.Scroll.prototype = new CABLES.Op();
CABLES.OPS["9b151d99-7888-4948-81c7-cd23b334e8d4"]={f:Ops.Gl.TextureEffects.Scroll,objName:"Ops.Gl.TextureEffects.Scroll"};




// **************************************************************
// 
// Ops.Math.RandomNumbers
// 
// **************************************************************

Ops.Math.RandomNumbers = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments={};
const index=op.inValueInt("index");
const seed=op.inValueFloat("random seed");
const min=op.inValueFloat("Min");
const max=op.inValueFloat("Max");
const outX=op.outValue("X");
const outY=op.outValue("Y");
const outZ=op.outValue("Z");

var numValues=100;
min.set(-1);
max.set(1);
seed.set(Math.round(Math.random()*99999));

max.onChange=init;
min.onChange=init;
seed.onChange=init;

var arr=[];
init();

index.onChange=function()
{
    var idx=Math.floor(index.get())||0;
    if(idx*3>=arr.length)
    {
        numValues=idx+100;
        init();
    }

    idx*=3;

    outX.set(arr[idx+0]);
    outY.set(arr[idx+1]);
    outZ.set(arr[idx+2]);
};

function init()
{
    Math.randomSeed=seed.get();

    arr.length=Math.floor(numValues*3) || 300;
    for(var i=0;i<arr.length;i+=3)
    {
        arr[i+0]=Math.seededRandom()* ( max.get() - min.get() ) + min.get() ;
        arr[i+1]=Math.seededRandom()* ( max.get() - min.get() ) + min.get() ;
        arr[i+2]=Math.seededRandom()* ( max.get() - min.get() ) + min.get() ;
    }
}


};

Ops.Math.RandomNumbers.prototype = new CABLES.Op();
CABLES.OPS["855880fa-6a85-4ba0-aac8-50440ccae948"]={f:Ops.Math.RandomNumbers,objName:"Ops.Math.RandomNumbers"};




// **************************************************************
// 
// Ops.Gl.TextureEffects.Noise.GlitchNoise
// 
// **************************************************************

Ops.Gl.TextureEffects.Noise.GlitchNoise = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments={glitchnoise_frag:"IN vec2 texCoord;\nUNI sampler2D tex;\n\n{{CGL.BLENDMODES}}\n\nUNI float amount;\nUNI float time;\nUNI float frequency;\nUNI float strength;\nUNI float blockSizeA;\nUNI float blockSizeB;\nUNI float blockSizeC;\nUNI float blockSizeD;\nUNI float scrollX;\nUNI float scrollY;\n\nfloat rng2(vec2 seed)\n{\n    return fract(sin(dot(seed * floor(time * (frequency * 10.0)), vec2(127.1,311.7))) * 43758.5453123);//43758.5453123\n}\n\nfloat rng(float seed)\n{\n    return rng2(vec2(seed, 1.0));\n}\n\nvoid main( )\n{\n    //add scroll for x and y\n    vec2 scrollXY = vec2(scrollX,scrollY);\n    vec2 blockS = floor((texCoord + scrollXY ) * vec2(blockSizeA,blockSizeB));\n    vec2 blockL = floor((texCoord )  * vec2(blockSizeC,blockSizeD));\n\n    float r = rng2(texCoord);\n    vec3 noise = (vec3(r, 1. - r, r / 2. + 0.5) * 1.0 - 2.0) * 0.08;\n\n    float lineNoise = pow(rng2(blockS), 8.0) * pow(rng2(blockL), 3.0) - pow(rng(7.2341), 17.0) * 2.;\n\n    vec4 col1 = texture(tex, texCoord);\n    vec4 col2 = texture(tex, texCoord + vec2(lineNoise * (0.05 * strength)  * rng(5.0), 1));\n    vec4 col3 = texture(tex, texCoord - vec2(lineNoise * (0.05 * strength) * rng(31.0), 1));\n\n    float glitch = (lineNoise * strength * rng(5.0)) + (lineNoise * strength * rng(31.));\n    float glitch2 = lineNoise * strength * rng(31.);\n\n    //blend section\n    vec4 col=vec4(vec3(glitch),1.0);\n    //original texture\n    vec4 base=texture(tex,texCoord);\n\n    outColor=cgl_blend(base,col,amount);\n\n}",};
const
    render=op.inTrigger("render"),
    amount=op.inValueSlider("Amount",1),
    blendMode=CGL.TextureEffect.AddBlendSelect(op,"Blend Mode","normal"),
    time=op.inValue('Seed',0.5),
    inFrequency=op.inValue('frequency',1),
    inStrength=op.inValue('strength',8.0),
    inBlockSizeA=op.inValue('Block size small x',24.0),
    inBlockSizeB=op.inValue('Block size small y',9.0),
    inBlockSizeC=op.inValue('Block size large x',8.0),
    inBlockSizeD=op.inValue('Block size large y',4.0),
    inScrollX=op.inValue('Scroll X',0.0),
    inScrollY=op.inValue('Scroll Y',0.0),
    trigger=op.outTrigger('trigger');

const TEX_SLOT=0;
const cgl=op.patch.cgl;
const shader=new CGL.Shader(cgl);
shader.setSource(shader.getDefaultVertexShader(),attachments.glitchnoise_frag);

const
    textureUniform=new CGL.Uniform(shader,'t','tex',TEX_SLOT),
    uniformAmount=new CGL.Uniform(shader,'f','amount',amount),
    timeUniform=new CGL.Uniform(shader,'f','time',time),
    frequencyUniform=new CGL.Uniform(shader,'f','frequency',inFrequency),
    strengthUniform=new CGL.Uniform(shader,'f','strength',inStrength),
    sizeAUniform=new CGL.Uniform(shader,'f','blockSizeA',inBlockSizeA),
    sizeBUniform=new CGL.Uniform(shader,'f','blockSizeB',inBlockSizeB),
    sizeCUniform=new CGL.Uniform(shader,'f','blockSizeC',inBlockSizeC),
    sizeDUniform=new CGL.Uniform(shader,'f','blockSizeD',inBlockSizeD),
    scrollXUniform=new CGL.Uniform(shader,'f','scrollX',inScrollX),
    scrollYUniform=new CGL.Uniform(shader,'f','scrollY',inScrollY);

CGL.TextureEffect.setupBlending(op,shader,blendMode,amount);

render.onTriggered=function()
{
    if(!CGL.TextureEffect.checkOpInEffect(op)) return;

    cgl.setShader(shader);
    cgl.currentTextureEffect.bind();

    cgl.setTexture(TEX_SLOT, cgl.currentTextureEffect.getCurrentSourceTexture().tex );

    cgl.currentTextureEffect.finish();
    cgl.setPreviousShader();

    trigger.trigger();
};

};

Ops.Gl.TextureEffects.Noise.GlitchNoise.prototype = new CABLES.Op();
CABLES.OPS["a55eea17-efb8-4418-bcf9-7fefeecf40e5"]={f:Ops.Gl.TextureEffects.Noise.GlitchNoise,objName:"Ops.Gl.TextureEffects.Noise.GlitchNoise"};




// **************************************************************
// 
// Ops.Gl.TextureEffects.PixelDisplacement_v3
// 
// **************************************************************

Ops.Gl.TextureEffects.PixelDisplacement_v3 = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments={pixeldisplace3_frag:"IN vec2 texCoord;\nUNI sampler2D tex;\nUNI sampler2D displaceTex;\nUNI float amountX;\nUNI float amountY;\nUNI float amount;\n\n{{CGL.BLENDMODES}}\n\nvec3 getOffset(vec3 offset)\n{\n    #ifdef ZERO_BLACK\n        return offset;\n    #endif\n\n    #ifdef ZERO_GREY\n        return offset*2.0-1.0;\n    #endif\n}\n\nfloat getOffset(float offset)\n{\n    #ifdef ZERO_BLACK\n        return offset;\n    #endif\n\n    #ifdef ZERO_GREY\n        return offset*2.0-1.0;\n    #endif\n}\n\nvoid main()\n{\n    vec3 offset=texture(displaceTex,texCoord).rgb;\n    float x,y;\n\n    #ifdef INPUT_REDGREEN\n        offset=getOffset(offset);\n        x=offset.r*amountX+texCoord.x;\n        y=offset.g*amountY+texCoord.y;\n    #endif\n    #ifdef INPUT_RED\n        offset=getOffset(offset);\n        x=offset.r*amountX+texCoord.x;\n        y=offset.r*amountY+texCoord.y;\n    #endif\n    #ifdef INPUT_GREEN\n        offset=getOffset(offset);\n        x=offset.g*amountX+texCoord.x;\n        y=offset.g*amountY+texCoord.y;\n    #endif\n    #ifdef INPUT_BLUE\n        offset=getOffset(offset);\n        x=offset.b*amountX+texCoord.x;\n        y=offset.b*amountY+texCoord.y;\n    #endif\n    #ifdef INPUT_LUMINANCE\n        float o=dot(vec3(0.2126,0.7152,0.0722), offset);\n        o=getOffset(o);\n        x=o*amountX+texCoord.x;\n        y=o*amountY+texCoord.y;\n    #endif\n    #ifdef WRAP_CLAMP\n        x=clamp(x,0.0,1.0);\n        y=clamp(y,0.0,1.0);\n    #endif\n    #ifdef WRAP_REPEAT\n        x=mod(x,1.0);\n        y=mod(y,1.0);\n    #endif\n    #ifdef WRAP_MIRROR\n        float mx=mod(x,2.0);\n        float my=mod(y,2.0);\n        x=abs((floor(mx)-fract(mx)));\n        y=abs((floor(my)-fract(my)));\n    #endif\n\n    vec4 col=texture(tex,vec2(x,y));\n    vec4 base=texture(tex,texCoord);\n\n    outColor=cgl_blend(base,col,amount);\n}",};
const
    render=op.inTrigger("render"),
    displaceTex=op.inTexture("displaceTex"),
    blendMode=CGL.TextureEffect.AddBlendSelect(op,"Blend Mode","normal"),
    amount=op.inValueSlider("Amount",1),
    amountX=op.inValueSlider("amount X"),
    amountY=op.inValueSlider("amount Y"),
    inWrap=op.inSwitch("Wrap",["Mirror","Clamp","Repeat"],"Mirror"),
    inInput=op.inValueSelect("Input",["Luminance","RedGreen","Red","Green","Blue"],"Luminance"),
    inZero=op.inSwitch("Zero Displace",["Grey","Black"],"Grey"),
    // displaceTex=op.inTexture("displaceTex"),
    trigger=op.outTrigger("trigger");

op.setPortGroup("Axis Displacement Strength",[amountX,amountY]);
op.setPortGroup("Modes",[inWrap,inInput]);
op.toWorkPortsNeedToBeLinked(displaceTex);

const
    cgl=op.patch.cgl,
    shader=new CGL.Shader(cgl);

shader.setSource(shader.getDefaultVertexShader(),attachments.pixeldisplace3_frag);

const
    textureUniform=new CGL.Uniform(shader,'t','tex',0),
    textureDisplaceUniform=new CGL.Uniform(shader,'t','displaceTex',1),
    amountXUniform=new CGL.Uniform(shader,'f','amountX',amountX),
    amountYUniform=new CGL.Uniform(shader,'f','amountY',amountY),
    amountUniform=new CGL.Uniform(shader,'f','amount',amount);

inZero.onChange=updateZero;
inWrap.onChange=updateWrap;
inInput.onChange=updateInput;

updateWrap();
updateInput();
updateZero();

CGL.TextureEffect.setupBlending(op,shader,blendMode,amount);

function updateZero()
{
    shader.removeDefine("ZERO_BLACK");
    shader.removeDefine("ZERO_GREY");
    shader.define("ZERO_"+(inZero.get()+'').toUpperCase());
}

function updateWrap()
{
    shader.removeDefine("WRAP_CLAMP");
    shader.removeDefine("WRAP_REPEAT");
    shader.removeDefine("WRAP_MIRROR");
    shader.define("WRAP_"+(inWrap.get()+'').toUpperCase());
}

function updateInput()
{
    shader.removeDefine("INPUT_LUMINANCE");
    shader.removeDefine("INPUT_REDGREEN");
    shader.removeDefine("INPUT_RED");
    shader.define("INPUT_"+(inInput.get()+'').toUpperCase());
}

render.onTriggered=function()
{
    if(!CGL.TextureEffect.checkOpInEffect(op)) return;

    cgl.setShader(shader);
    cgl.currentTextureEffect.bind();

    cgl.setTexture(0, cgl.currentTextureEffect.getCurrentSourceTexture().tex );
    if(displaceTex.get()) cgl.setTexture(1, displaceTex.get().tex );

    cgl.currentTextureEffect.finish();
    cgl.setPreviousShader();

    trigger.trigger();
};


};

Ops.Gl.TextureEffects.PixelDisplacement_v3.prototype = new CABLES.Op();
CABLES.OPS["c089646e-9324-48b2-8b32-81240408222e"]={f:Ops.Gl.TextureEffects.PixelDisplacement_v3,objName:"Ops.Gl.TextureEffects.PixelDisplacement_v3"};




// **************************************************************
// 
// Ops.Math.Abs
// 
// **************************************************************

Ops.Math.Abs = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments={};
const number=op.inValue("number");
const result=op.outValue("result");

number.onChange=function()
{
    result.set( Math.abs(number.get()) );
};

};

Ops.Math.Abs.prototype = new CABLES.Op();
CABLES.OPS["6b5af21d-065f-44d2-9442-8b7a254753f6"]={f:Ops.Math.Abs,objName:"Ops.Math.Abs"};




// **************************************************************
// 
// Ops.Gl.TextureEffects.ChromaticAberration
// 
// **************************************************************

Ops.Gl.TextureEffects.ChromaticAberration = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments={chromatic_frag:"\nIN vec2 texCoord;\nUNI sampler2D tex;\nUNI float pixel;\nUNI float onePixel;\nUNI float amount;\nUNI float lensDistort;\n\n#ifdef MASK\nUNI sampler2D texMask;\n#endif\n\n{{CGL.BLENDMODES}}\n\nvoid main()\n{\n   vec4 base=texture(tex,texCoord);\n   vec4 col=texture(tex,texCoord);\n\n   vec2 tc=texCoord;;\n   float pix = pixel;\n   if(lensDistort>0.0)\n   {\n       float dist = distance(texCoord, vec2(0.5,0.5));\n       tc-=0.5;\n       tc *=smoothstep(-0.9,1.0*lensDistort,1.0-dist);\n       tc+=0.5;\n   }\n\n    #ifdef MASK\n        vec4 m=texture(texMask,texCoord);\n        pix*=m.r*m.a;\n    #endif\n\n    #ifdef SMOOTH\n    #ifdef WEBGL2\n        float numSamples=round(pix/onePixel/4.0+1.0);\n        col.r=0.0;\n        col.b=0.0;\n\n        for(float off=0.0;off<numSamples;off++)\n        {\n            float diff=(pix/numSamples)*off;\n            col.r+=texture(tex,vec2(tc.x+diff,tc.y)).r/numSamples;\n            col.b+=texture(tex,vec2(tc.x-diff,tc.y)).b/numSamples;\n        }\n    #endif\n    #endif\n\n    #ifndef SMOOTH\n        col.r=texture(tex,vec2(tc.x+pix,tc.y)).r;\n        col.b=texture(tex,vec2(tc.x-pix,tc.y)).b;\n    #endif\n\n//   outColor = col;\n   outColor= cgl_blend(base,col,amount);\n\n}\n",};
const
    render=op.inTrigger('render'),
    blendMode=CGL.TextureEffect.AddBlendSelect(op,"Blend Mode","normal"),
    amount=op.inValueSlider("Amount",1),
    pixel=op.inValue("Pixel",5),
    lensDistort=op.inValueSlider("Lens Distort",0),
    doSmooth=op.inValueBool("Smooth",false),
    textureMask=op.inTexture("Mask"),
    trigger=op.outTrigger('trigger');

const cgl=op.patch.cgl;
const shader=new CGL.Shader(cgl,"chromatic");

CGL.TextureEffect.setupBlending(op,shader,blendMode,amount);

shader.setSource(shader.getDefaultVertexShader(),attachments.chromatic_frag);
const textureUniform=new CGL.Uniform(shader,'t','tex',0),
    uniPixel=new CGL.Uniform(shader,'f','pixel',0),
    uniOnePixel=new CGL.Uniform(shader,'f','onePixel',0),
    unitexMask=new CGL.Uniform(shader,'t','texMask',1),
    uniAmount=new CGL.Uniform(shader,'f','amount',amount),
    unilensDistort=new CGL.Uniform(shader,'f','lensDistort',lensDistort);

doSmooth.onChange=function()
{
    if(doSmooth.get())shader.define("SMOOTH");
        else shader.removeDefine("SMOOTH");
};

textureMask.onChange=function()
{
    if(textureMask.get())shader.define("MASK");
        else shader.removeDefine("MASK");
};

render.onTriggered=function()
{
    if(!CGL.TextureEffect.checkOpInEffect(op)) return;

    var texture=cgl.currentTextureEffect.getCurrentSourceTexture();

    uniPixel.setValue(pixel.get()*(1/texture.width));
    uniOnePixel.setValue(1/texture.width);

    cgl.setShader(shader);
    cgl.currentTextureEffect.bind();

    cgl.setTexture(0, texture.tex );

    if(textureMask.get()) cgl.setTexture(1, textureMask.get().tex );

    cgl.currentTextureEffect.finish();
    cgl.setPreviousShader();

    trigger.trigger();
};


};

Ops.Gl.TextureEffects.ChromaticAberration.prototype = new CABLES.Op();
CABLES.OPS["38ac43a1-1757-48f4-9450-29f07ac0d376"]={f:Ops.Gl.TextureEffects.ChromaticAberration,objName:"Ops.Gl.TextureEffects.ChromaticAberration"};




// **************************************************************
// 
// Ops.Gl.Meshes.Circle
// 
// **************************************************************

Ops.Gl.Meshes.Circle = function()
{
CABLES.Op.apply(this,arguments);
const op=this;
const attachments={};
const render=op.inTrigger("render");
const radius=op.inValue('radius',0.5);
const innerRadius=op.inValueSlider('innerRadius',0);
const segments=op.inValueInt('segments',40);
const percent=op.inValueSlider('percent',1);
const steps=op.inValue('steps',0);
const invertSteps=op.inValueBool('invertSteps',false);
const mapping=op.inSwitch("mapping",['flat','round']);
const drawSpline=op.inValueBool("Spline",false);
const inDraw=op.inValueBool('Draw',true);
const trigger=op.outTrigger('trigger');
const geomOut=op.outObject("geometry");


op.setPortGroup('Size',[radius,innerRadius]);
op.setPortGroup('Display',[percent,steps,invertSteps]);

mapping.set('flat');

mapping.onChange=
    segments.onChange=
    radius.onChange=
    innerRadius.onChange=
    percent.onChange=
    steps.onChange=
    invertSteps.onChange=
    drawSpline.onChange=calcLater;

geomOut.ignoreValueSerialize=true;
const cgl=op.patch.cgl;

var geom=new CGL.Geometry("circle");
var mesh=null;
var lastSegs=-1;

var oldPrim=0;
var shader=null;
var needsCalc=true;

op.preRender=
render.onTriggered=function()
{
    if(!CGL.TextureEffect.checkOpNotInTextureEffect(op)) return;

    if(needsCalc)calc();
    shader=cgl.getShader();
    if(!shader)return;
    oldPrim=shader.glPrimitive;

    if(drawSpline.get()) shader.glPrimitive=cgl.gl.LINE_STRIP;

    if(inDraw.get())mesh.render(shader);
    trigger.trigger();

    shader.glPrimitive=oldPrim;
};

function calc()
{
    var segs=Math.max(3,Math.floor(segments.get()));

    geom.clear();

    var faces=[];
    var texCoords=[];
    var vertexNormals=[];
    var tangents=[];
    var biTangents=[];

    var i=0,degInRad=0;
    var oldPosX=0,oldPosY=0;
    var oldPosXTexCoord=0,oldPosYTexCoord=0;

    var oldPosXIn=0,oldPosYIn=0;
    var oldPosXTexCoordIn=0,oldPosYTexCoordIn=0;

    var posxTexCoordIn=0,posyTexCoordIn=0;
    var posxTexCoord=0,posyTexCoord=0;
    var posx=0,posy=0;

    var verts=[];

    if(drawSpline.get())
    {
        var lastX=0;
        var lastY=0;
        var tc=[];
        for (i=0; i <= segs*percent.get(); i++)
        {
            degInRad = (360/segs)*i*CGL.DEG2RAD;
            posx=Math.cos(degInRad)*radius.get();
            posy=Math.sin(degInRad)*radius.get();

            posyTexCoord=0.5;

            if(i>0)
            {
                verts.push(lastX);
                verts.push(lastY);
                verts.push(0);
                posxTexCoord=1.0-(i-1)/segs;

                tc.push(posxTexCoord,posyTexCoord);
            }
            verts.push(posx);
            verts.push(posy);
            verts.push(0);

            lastX=posx;
            lastY=posy;
        }
        geom.setPointVertices(verts);
    }
    else
    if(innerRadius.get()<=0)
    {

        for (i=0; i <= segs*percent.get(); i++)
        {
            degInRad = (360/segs)*i*CGL.DEG2RAD;
            posx=Math.cos(degInRad)*radius.get();
            posy=Math.sin(degInRad)*radius.get();

            if(mapping.get()=='flat')
            {
                posxTexCoord=(Math.cos(degInRad)+1.0)/2;
                posyTexCoord=1.0-(Math.sin(degInRad)+1.0)/2;
                posxTexCoordIn=0.5;
                posyTexCoordIn=0.5;
            }
            else if(mapping.get()=='round')
            {
                posxTexCoord=1.0-i/segs;
                posyTexCoord=0;
                posxTexCoordIn=posxTexCoord;
                posyTexCoordIn=1;
            }

            faces.push(
                      [posx,posy,0],
                      [oldPosX,oldPosY,0],
                      [0,0,0]
                      );

            texCoords.push(posxTexCoord,posyTexCoord,oldPosXTexCoord,oldPosYTexCoord,posxTexCoordIn,posyTexCoordIn);
            vertexNormals.push(0,0,1,0,0,1,0,0,1);
            tangents.push(1,0,0,1,0,0,1,0,0);
            biTangents.push(0,1,0,0,1,0,0,1,0);

            oldPosXTexCoord=posxTexCoord;
            oldPosYTexCoord=posyTexCoord;

            oldPosX=posx;
            oldPosY=posy;
        }

        geom=CGL.Geometry.buildFromFaces(faces);
        geom.vertexNormals=vertexNormals;
        geom.tangents=tangents;
        geom.biTangents=biTangents;
        geom.texCoords=texCoords;
    }
    else
    {
        var count=0;
        var numSteps=segs*percent.get();
        var pos=0;

        for (i=0; i <= numSteps; i++)
        {
            count++;

            degInRad = (360/segs)*i*CGL.DEG2RAD;
            posx=Math.cos(degInRad)*radius.get();
            posy=Math.sin(degInRad)*radius.get();

            var posxIn=Math.cos(degInRad)*innerRadius.get()*radius.get();
            var posyIn=Math.sin(degInRad)*innerRadius.get()*radius.get();

            if(mapping.get()=='round')
            {
                posxTexCoord=1.0-i/segs;
                posyTexCoord=0;
                posxTexCoordIn=posxTexCoord;
                posyTexCoordIn=1;
            }

            if(steps.get()===0.0 ||
                (count%parseInt(steps.get(),10)===0 && !invertSteps.get()) ||
                (count%parseInt(steps.get(),10)!==0 && invertSteps.get()) )
            {
                faces.push(
                        [posx,posy,0],
                        [oldPosX,oldPosY,0],
                        [posxIn,posyIn,0]
                        );

                faces.push(
                        [posxIn,posyIn,0],
                        [oldPosX,oldPosY,0],
                        [oldPosXIn,oldPosYIn,0]
                        );

                texCoords.push(
                    posxTexCoord,0,
                    oldPosXTexCoord,0,
                    posxTexCoordIn,1,

                    posxTexCoord,1,
                    oldPosXTexCoord,0,
                    oldPosXTexCoordIn,1);

                vertexNormals.push(
                    0,0,1,0,0,1,0,0,1,
                    0,0,1,0,0,1,0,0,1
                );
                tangents.push(
                    1,0,0,1,0,0,1,0,0,
                    1,0,0,1,0,0,1,0,0
                );
                biTangents.push(
                    0,1,0,0,1,0,0,1,0,
                    0,1,0,0,1,0,0,1,0
                );
            }

            oldPosXTexCoordIn=posxTexCoordIn;
            oldPosYTexCoordIn=posyTexCoordIn;

            oldPosXTexCoord=posxTexCoord;
            oldPosYTexCoord=posyTexCoord;

            oldPosX=posx;
            oldPosY=posy;

            oldPosXIn=posxIn;
            oldPosYIn=posyIn;
        }

        geom=CGL.Geometry.buildFromFaces(faces);
        geom.vertexNormals=vertexNormals;
        geom.tangents=tangents;
        geom.biTangents=biTangents;

        if(mapping.get()=='flat') geom.mapTexCoords2d();
            else geom.texCoords=texCoords;
    }

    geomOut.set(null);
    geomOut.set(geom);

    if(geom.vertices.length==0)return;
    if(mesh) mesh.dispose();
    mesh=null;
    mesh=new CGL.Mesh(cgl,geom);
    needsCalc=false;
}

function calcLater()
{
    needsCalc=true;
}

op.onDelete=function()
{
    if(mesh)mesh.dispose();
}

};

Ops.Gl.Meshes.Circle.prototype = new CABLES.Op();
CABLES.OPS["4db917cc-2cef-43f4-83d5-38c4572fe943"]={f:Ops.Gl.Meshes.Circle,objName:"Ops.Gl.Meshes.Circle"};



