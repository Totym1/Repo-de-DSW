import { Request, Response } from 'express';
import { Categoria } from './categ.model';

export class CategoriaController {
    public async createCategoria(req: Request, res: Response): Promise<void> {
      try { 
        const newCategoria = new Categoria(req.body);
        await newCategoria.save();
        res.status(201).json({ message: 'Categoria guardada correctamente!', newCategoria});
      } catch (error) {
        res.status(500).json({ message: 'Error al crear la categoria', error });
      }
    }

    public async getAll(req: Request, res: Response): Promise<void> {
      try {
        const categorias = await Categoria.find();
        res.status(200).json(categorias);
      } catch (error) {
        res.status(500).json({ message: 'Error al obtener las categorias', error });
      }
    }

    public async getCategoria(req: Request, res: Response): Promise<void> {
      try {
        const idCategoria = Number(req.params.idCategoria);
        const categoria = await Categoria.findOne({ idCategoria });
        if (categoria) {
            res.status(200).json(categoria);
        } else {
            res.status(404).json({ message: 'Categoria no encontrada' });
        }
      } catch (error) {
        res.status(500).json({ message: 'Error al obtener la categoria', error });
      }
    }

    public async updateCategoria(req: Request, res: Response): Promise<void> {
      try {
        const idCategoria = Number(req.params.idCategoria);
        const categoriaUpdated = await Categoria.findOneAndUpdate(
            { idCategoria },
            req.body,
            { new: true }
        );
        if (categoriaUpdated) {
            res.status(200).json({ message: 'Categoria actualizada correctamente!', categoriaUpdated });
        } else {
            res.status(404).json({ message: 'Categoria no encontrada' })
          }
      } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la categoria', error });
      }
    }

    public async deleteCategoria(req: Request, res: Response): Promise<void> {
        const idCategoria = Number(req.params.idCategoria);
        try {
            const deletedCategoria = await Categoria.findOneAndDelete({ idCategoria });
            if (deletedCategoria) {
                res.status(200).json({ message: 'Categoria eliminada correctamente!' });
            } else {
                res.status(404).json({ message: 'Categoria no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar la categoria', error });
        }
    }
}