part of craft;

class World {
  static const maxXSize = Chunk.xSize;
  static const maxZSize = Chunk.zSize;
  
  Techniques.MaterialLight _matLit;
  Materials _mats;
  Generator _gen;
  List<Chunk> _chunks;
  Player _player;
  ThreeDart.Entity _entity;

  World(ThreeDart.ThreeDart td) {
    this._mats = new Materials(td);
    this._gen = new Generator(this);
    this._chunks = new List<Chunk>();
    this._entity = new ThreeDart.Entity(name: "world");

    for (int x = -maxXSize; x < maxXSize; x += Chunk.xSize) {
      for (int z = -maxZSize; z < maxZSize; z += Chunk.zSize) {
        Chunk chunk = new Chunk(x, z, this);
        this._chunks.add(chunk);
        this.entity.children.add(chunk.shaper.entity);
      }
    }
    this._gen.fillWorld();
  }

  Generator get generator => this._gen;
  Player get player => this._player;
  set player(Player player) {
    this._player = player;
    this._player._entity.technique = this._matLit;
  }


  ThreeDart.Entity get entity => this._entity;
  Materials get materials => this._mats;

  Chunk findChunk(int x, int z) {
    for (Chunk chunk in this._chunks) {
      if ((chunk.x == x) && (chunk.z == z)) return chunk;
    }
    return null;
  }

  BlockInfo getBlock(double x, double y, double z) {
    int cx = (x.truncate() ~/ Chunk.xSize) * Chunk.xSize;
    int cz = (z.truncate() ~/ Chunk.zSize) * Chunk.zSize;
    if (x < 0.0) cx -= Chunk.xSize;
    if (z < 0.0) cz -= Chunk.zSize;
    Chunk chunk = this.findChunk(cx, cz);

    int bx = x.floor() - cx;
    int by = y.floor();
    int bz = z.floor() - cz;
    if (bx < 0) bx += Chunk.xSize;
    if (bz < 0) bz += Chunk.zSize;

    return new BlockInfo(bx, by, bz, cx, cz, chunk);
  }

  void update(ThreeDart.EventArgs args) {
    Math.Matrix4 mat = this.player.location.matrix;
    Math.Point3 loc3 = mat.transPnt3(new Math.Point3(0.0, 0.0, 0.0));
    Math.Point3 front3 = mat.transPnt3(new Math.Point3(0.0, 0.0, -Chunk.zSize.toDouble()));
    Math.Point2 loc = new Math.Point2(loc3.x, loc3.z);
    Math.Point2 front = new Math.Point2(front3.x, front3.z);

    for (Chunk chunk in this._chunks) {
      chunk.updateShape();
      chunk.updateVisiblity(loc, front);
    }
  }
}
