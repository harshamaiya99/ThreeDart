// Copyright (c) 2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.test.test024;

import 'dart:html';
import 'dart:math';

import 'package:ThreeDart/ThreeDart.dart' as ThreeDart;
import 'package:ThreeDart/Shapes.dart' as Shapes;
import 'package:ThreeDart/Movers.dart' as Movers;
import 'package:ThreeDart/Math.dart' as Math;
import 'package:ThreeDart/Techniques.dart' as Techniques;
import 'package:ThreeDart/Scenes.dart' as Scenes;
import 'package:ThreeDart/Lights.dart' as Lights;
import '../common/common.dart' as common;

void main() {
  common.shellTest("Test 024", ["shapes"],
    "Test of a simple spot light. Use Ctrl plus the mouse to move the light.");

  Movers.UserRotater viewRotater = new Movers.UserRotater();
  Movers.UserRotater objRotater = new Movers.UserRotater()
    ..ctrlPressed = true;

  Movers.Group lightMover = new Movers.Group()
    ..add(new Movers.Constant(new Math.Matrix4.translate(0.0, 0.0, -2.5)))
    ..add(objRotater);

  Lights.Spot spot = new Lights.Spot(
    mover:        lightMover,
    color:        new Math.Color3.white(),
    cutoff:       0.6,
    coneAngle:    0.5,
    attenuation0: 0.5,
    attenuation1: 0.05,
    attenuation2: 0.05);

  Techniques.MaterialLight tech = new Techniques.MaterialLight()
    ..lights.add(spot)
    ..emissionColor = new Math.Color3.black()
    ..ambientColor = new Math.Color3.gray(0.0)
    ..diffuseColor = new Math.Color3.gray(0.7)
    ..specularColor = new Math.Color3.gray(0.3)
    ..shininess = 100.0;

  ThreeDart.Entity centerObj = new ThreeDart.Entity()
    ..shape = Shapes.toroid();

  ThreeDart.Entity room = new ThreeDart.Entity()
    ..mover = new Movers.Constant(new Math.Matrix4.scale(3.0, 3.0, 3.0))
    ..shape = (Shapes.cube()..flip());

  Movers.Group camMover = new Movers.Group()
  ..add(viewRotater)
  ..add(new Movers.Constant(new Math.Matrix4.rotateX(PI)))
  ..add(new Movers.Constant(new Math.Matrix4.translate(0.0, 0.0, 5.0)));

  ThreeDart.Entity obj = new ThreeDart.Entity()
    ..mover = (new Movers.Group()
                ..add(new Movers.Constant(new Math.Matrix4.scale(0.1, 0.1, 0.1)))
                ..add(lightMover))
    ..shape = Shapes.cylinder(bottomRadius: 0.0, sides: 40, capBottom: false)
    ..technique = (new Techniques.MaterialLight()
                ..emissionColor = new Math.Color3.white());

  Scenes.RenderPass pass = new Scenes.RenderPass()
    ..tech = tech
    ..children.add(centerObj)
    ..children.add(room)
    ..children.add(obj)
    ..camara.mover = camMover;

  ThreeDart.ThreeDart td = new ThreeDart.ThreeDart.fromId("threeDart")
    ..scene = pass;

  new common.RadioGroup("shapes")
    ..add("Cube",     () { centerObj.shape = Shapes.cube(); })
    ..add("Cylinder", () { centerObj.shape = Shapes.cylinder(sides: 40); })
    ..add("Cone",     () { centerObj.shape = Shapes.cylinder(topRadius: 0.0, sides: 40, capTop: false); })
    ..add("Sphere",   () { centerObj.shape = Shapes.sphere(widthDiv: 6, heightDiv: 6); })
    ..add("Toroid",   () { centerObj.shape = Shapes.toroid(); }, true)
    ..add("Knot",     () { centerObj.shape = Shapes.knot(); });

  viewRotater.attach(td.userInput);
  objRotater.attach(td.userInput);

  var update;
  update = (num t) {
    td.render();
    window.requestAnimationFrame(update);
  };
  window.requestAnimationFrame(update);
}
