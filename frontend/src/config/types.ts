// Entorno usuario
type User = {
    id?: number;
    name: string;
    surname: string;
    secondSurname?: string;
    email: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
};

// Entorno de transacciones
type Transaction = {
    id?: number;
    userId?: number;
    type: string;
    categoryName: string;
    date: Date;
    description: string;
    amount: number;
}   

type Category = {
    id?: number;
    userId: number;
    name: string;
    type: 'income' | 'debt' | 'expense'
}

export type { User, Transaction, Category };



// 1. Centralización de tipos:
    //· Permite que los tipos más utilizados, como User, se definan en un único lugar. Esto evita redundancia y asegura consistencia en el código.
    //· Si en el futuro necesitas cambiar o extender la estructura de User, solo necesitas actualizar este archivo, y todos los lugares donde se usa ese tipo se adaptarán automáticamente.

// 2. Facilita el mantenimiento:

    // · Cuando trabajas en equipo, todos los desarrolladores pueden referirse al archivo config/types.ts para saber cómo están tipados los datos clave de la aplicación.
    // · Al tener una referencia centralizada, reduces errores y malentendidos relacionados con las estructuras de datos.

//3. Compatibilidad y flexibilidad:
    //· Si usas una base de datos como Prisma, Sequelize, o TypeORM, puedes mapear los tipos de tus modelos directamente a este archivo.
    //·Si tus datos provienen de una API externa, también puedes definir los tipos aquí para modelar la respuesta.

//4. Escalabilidad del proyecto:
    //· Con el crecimiento del proyecto, pueden surgir nuevos modelos o tipos. Al tener un archivo como config/types.ts, puedes seguir organizando y expandiendo tu sistema de tipado sin complicaciones.

//5.  Facilita la validación y el desarrollo de middlewares:
    //· En middlewares como el de autenticación (userAuth), necesitas extender el tipo de Request para agregar datos específicos, como user. Tener el tipo User bien definido ayuda a que este proceso sea claro y reutilizable.

//6. Legibilidad y documentación implícita:
    //· Los tipos sirven como documentación para otros desarrolladores. Al ver la estructura de User, por ejemplo, entienden inmediatamente qué campos maneja un usuario en tu aplicación.
